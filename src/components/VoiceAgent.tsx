import { useConversation } from "@11labs/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { PhoneOff, Loader2, Bot } from "lucide-react";
import { useToast } from "./ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const VoiceAgent = () => {
  const { toast } = useToast();
  const [isConnecting, setIsConnecting] = useState(false);
  const [signedUrl, setSignedUrl] = useState<string | null>(null);

  const conversation = useConversation({
    onConnect: () => {
      console.log("Connected to Lily!");
      toast({
        title: "Connected",
        description: "You're now speaking with Lily from Cardinal Consulting",
      });
    },
    onDisconnect: () => {
      console.log("Disconnected from Lily");
      toast({
        title: "Call Ended",
        description: "Your conversation with Lily has ended",
      });
    },
    onError: (error) => {
      console.error("Conversation error:", error);
      toast({
        title: "Connection Error",
        description: "There was an issue connecting to Lily. Please try again.",
        variant: "destructive",
      });
    },
    onMessage: (message) => {
      console.log("Message from Lily:", message);
    },
    clientTools: {
      scheduleAppointment: async (parameters: {
        date: string;
        time: string;
        service: string;
        name: string;
        email: string;
        phone?: string;
      }) => {
        console.log("Scheduling appointment:", parameters);
        
        try {
          // Store appointment request in contact_submissions
          const { error } = await supabase
            .from('contact_submissions')
            .insert({
              first_name: parameters.name.split(' ')[0] || parameters.name,
              last_name: parameters.name.split(' ').slice(1).join(' ') || '',
              email: parameters.email,
              company: parameters.service,
              message: `Appointment Request - Date: ${parameters.date}, Time: ${parameters.time}, Service: ${parameters.service}${parameters.phone ? `, Phone: ${parameters.phone}` : ''}`,
              status: 'new'
            });

          if (error) throw error;

          toast({
            title: "Appointment Scheduled",
            description: `Your appointment for ${parameters.date} at ${parameters.time} has been requested.`,
          });

          return `Great! I've scheduled your appointment for ${parameters.service} on ${parameters.date} at ${parameters.time}. You'll receive a confirmation email at ${parameters.email} shortly.`;
        } catch (error) {
          console.error("Error scheduling appointment:", error);
          return "I apologize, but there was an issue scheduling your appointment. Please try again or contact us directly.";
        }
      },
      getServices: () => {
        return JSON.stringify({
          services: [
            "Web Development",
            "Mobile App Development",
            "SEO & Digital Marketing",
            "Brand Identity Design",
            "UI/UX Design",
            "E-commerce Solutions",
            "Custom Software Development"
          ]
        });
      },
      getBusinessInfo: () => {
        return JSON.stringify({
          name: "Cardinal Consulting",
          description: "We're a full-service digital agency specializing in web development, mobile applications, and digital marketing.",
          location: "Serving clients nationwide",
          hours: "Monday-Friday: 9AM-6PM CST",
          contact: {
            phone: "(555) 123-4567",
            email: "info@cardinalconsulting.com"
          },
          specialties: [
            "Custom web applications with React and modern frameworks",
            "Mobile app development for iOS and Android",
            "SEO optimization and digital marketing campaigns",
            "Brand identity and visual design",
            "E-commerce platforms and integrations"
          ]
        });
      }
    },
  });

  const startConversation = async () => {
    try {
      setIsConnecting(true);

      // Request microphone access first
      await navigator.mediaDevices.getUserMedia({ audio: true });

      // Get signed URL from our edge function
      const { data, error } = await supabase.functions.invoke('elevenlabs-session');

      if (error) throw error;

      if (!data?.signed_url) {
        throw new Error("Failed to get signed URL");
      }

      setSignedUrl(data.signed_url);

      // Start the conversation with the signed URL
      await conversation.startSession({ 
        signedUrl: data.signed_url 
      });

    } catch (error) {
      console.error("Error starting conversation:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to start conversation",
        variant: "destructive",
      });
    } finally {
      setIsConnecting(false);
    }
  };

  const endConversation = async () => {
    await conversation.endSession();
    setSignedUrl(null);
  };

  const { status, isSpeaking } = conversation;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {status === "connected" && (
        <div className="bg-white rounded-lg shadow-lg p-4 animate-in slide-in-from-bottom-2">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${isSpeaking ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
            <span className="text-sm font-medium text-gray-700">
              {isSpeaking ? 'Lily is speaking...' : 'Listening...'}
            </span>
          </div>
        </div>
      )}
      
      <Button
        onClick={status === "connected" ? endConversation : startConversation}
        disabled={isConnecting}
        size="lg"
        className="group relative h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white"
      >
        {isConnecting ? (
          <Loader2 className="h-6 w-6 animate-spin text-white" />
        ) : status === "connected" ? (
          <PhoneOff className="h-6 w-6 text-white" />
        ) : (
          <Bot className="h-7 w-7 text-white" />
        )}
        
        {status !== "connected" && !isConnecting && (
          <div className="absolute -top-12 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Lily By Cardinal
            <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900" />
          </div>
        )}
      </Button>
    </div>
  );
};

export default VoiceAgent;
