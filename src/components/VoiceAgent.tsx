import { useConversation } from "@11labs/react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Mic, MicOff, Phone, PhoneOff } from "lucide-react";
import { useToast } from "./ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const VoiceAgent = () => {
  const { toast } = useToast();
  const [isConnecting, setIsConnecting] = useState(false);
  const [signedUrl, setSignedUrl] = useState<string | null>(null);

  const conversation = useConversation({
    onConnect: () => {
      console.log("Connected to Tim!");
      toast({
        title: "Connected",
        description: "You're now speaking with Tim from Cardinal Consulting",
      });
    },
    onDisconnect: () => {
      console.log("Disconnected from Tim");
      toast({
        title: "Call Ended",
        description: "Your conversation with Tim has ended",
      });
    },
    onError: (error) => {
      console.error("Conversation error:", error);
      toast({
        title: "Connection Error",
        description: "There was an issue connecting to Tim. Please try again.",
        variant: "destructive",
      });
    },
    onMessage: (message) => {
      console.log("Message from Tim:", message);
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

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="flex flex-col items-end gap-4">
        {conversation.status === "connected" && (
          <div className="bg-card border rounded-lg p-4 shadow-lg max-w-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mic className={`w-6 h-6 ${conversation.isSpeaking ? 'text-primary animate-pulse' : 'text-muted-foreground'}`} />
                </div>
                {conversation.isSpeaking && (
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                )}
              </div>
              <div>
                <p className="font-semibold text-sm">Tim from Cardinal Consulting</p>
                <p className="text-xs text-muted-foreground">
                  {conversation.isSpeaking ? "Speaking..." : "Listening..."}
                </p>
              </div>
            </div>
          </div>
        )}

        {conversation.status === "connected" ? (
          <Button
            onClick={endConversation}
            size="lg"
            variant="destructive"
            className="rounded-full h-16 w-16 shadow-lg"
          >
            <PhoneOff className="w-6 h-6" />
          </Button>
        ) : (
          <Button
            onClick={startConversation}
            disabled={isConnecting}
            size="lg"
            className="rounded-full h-16 w-16 shadow-lg bg-primary hover:bg-primary/90"
          >
            {isConnecting ? (
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
            ) : (
              <Phone className="w-6 h-6" />
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default VoiceAgent;
