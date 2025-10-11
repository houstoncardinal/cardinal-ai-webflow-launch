import { useConversation } from "@11labs/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { PhoneOff, Loader2 } from "lucide-react";
import { useToast } from "./ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import lilyAvatar from "@/assets/lily-ai-avatar.png";

const VoiceAgent = () => {
  const { toast } = useToast();
  const [isConnecting, setIsConnecting] = useState(false);
  const [signedUrl, setSignedUrl] = useState<string | null>(null);

  const conversation = useConversation({
    onConnect: () => {
      console.log("✅ Connected to Lily successfully!");
      toast({
        title: "Connected",
        description: "You're now speaking with Lily from Cardinal Consulting",
      });
    },
    onDisconnect: () => {
      console.log("❌ Disconnected from Lily");
      toast({
        title: "Call Ended",
        description: "Your conversation with Lily has ended",
      });
    },
    onError: (error) => {
      console.error("❌ Conversation error:", error);
      toast({
        title: "Connection Error",
        description: "There was an issue connecting to Lily. Please try again.",
        variant: "destructive",
      });
    },
    onMessage: (message) => {
      console.log("📩 Message from Lily:", JSON.stringify(message, null, 2));
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
        console.log("📅 Scheduling appointment with parameters:", parameters);
        
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

          if (error) {
            console.error("❌ Database error:", error);
            throw error;
          }

          console.log("✅ Appointment saved successfully");

          toast({
            title: "Appointment Scheduled",
            description: `Your appointment for ${parameters.date} at ${parameters.time} has been requested.`,
          });

          const response = `Perfect! I've successfully scheduled your appointment for ${parameters.service} on ${parameters.date} at ${parameters.time}. You'll receive a confirmation email at ${parameters.email} shortly. Is there anything else I can help you with?`;
          console.log("🤖 Returning response:", response);
          return response;
        } catch (error) {
          console.error("❌ Error scheduling appointment:", error);
          return "I apologize, but there was an issue scheduling your appointment. Please try again or contact us directly at 281-901-7016.";
        }
      },
      getServices: async () => {
        console.log("Fetching services...");
        return "We offer: Web Development for custom websites and web applications, Mobile Applications for iOS and Android, SEO and Digital Marketing services, Brand Identity design including logos and branding, E-commerce Solutions, and UI/UX Design services.";
      },
      getBusinessInfo: async () => {
        console.log("Fetching business info...");
        return "Cardinal Consulting is a full-service digital agency serving clients nationwide. You can reach us at 281-901-7016 or hello@cardinalhtx.com. We're open Monday through Friday, 9 AM to 6 PM. We specialize in Custom Web Development, Mobile App Development, SEO and Digital Marketing, Brand Identity and Design, E-commerce Solutions, and UI/UX Design.";
      }
    },
  });

  const startConversation = async () => {
    try {
      setIsConnecting(true);
      console.log("🎙️ Requesting microphone access...");

      // Request microphone access first
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        } 
      });
      console.log("✅ Microphone access granted");

      // Get signed URL from our edge function
      console.log("🔗 Fetching signed URL...");
      const { data, error } = await supabase.functions.invoke('elevenlabs-session');

      if (error) {
        console.error("❌ Edge function error:", error);
        throw error;
      }

      if (!data?.signed_url) {
        throw new Error("Failed to get signed URL");
      }

      console.log("✅ Signed URL received");
      setSignedUrl(data.signed_url);

      // Start the conversation with the signed URL
      console.log("🚀 Starting conversation session...");
      await conversation.startSession({ 
        signedUrl: data.signed_url 
      });
      console.log("✅ Conversation session started");

    } catch (error) {
      console.error("❌ Error starting conversation:", error);
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
      
      <div className="group relative">
        {status !== "connected" && !isConnecting && (
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-24 flex items-end justify-center pointer-events-none">
            <svg viewBox="0 0 240 120" className="w-full h-full">
              <path
                id="curve"
                d="M 30,100 Q 120,30 210,100"
                fill="transparent"
              />
              <text className="fill-green-500 font-bold text-[22px] animate-pulse" style={{ letterSpacing: '0.15em' }}>
                <textPath href="#curve" startOffset="50%" textAnchor="middle">
                  Lily By Cardinal
                </textPath>
              </text>
            </svg>
          </div>
        )}
        
        <Button
          onClick={status === "connected" ? endConversation : startConversation}
          disabled={isConnecting}
          size="lg"
          className="relative h-16 w-16 rounded-full bg-transparent hover:bg-transparent p-0 border-0 overflow-visible"
        >
          <div 
            className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/30 to-emerald-600/30 blur-xl group-hover:blur-2xl transition-all duration-500 -z-10"
            style={{ transform: 'scale(1.4)' }}
          />
          
          {isConnecting ? (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-2xl">
              <Loader2 className="h-7 w-7 animate-spin text-white" />
            </div>
          ) : status === "connected" ? (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-2xl">
              <PhoneOff className="h-7 w-7 text-white" />
            </div>
          ) : (
            <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-white shadow-2xl group-hover:ring-4 group-hover:ring-green-400/50 transition-all duration-500">
              <img 
                src={lilyAvatar} 
                alt="Lily AI Assistant" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                style={{
                  filter: 'drop-shadow(0 10px 30px rgba(34, 197, 94, 0.4))',
                  objectPosition: 'center 30%'
                }}
              />
            </div>
          )}
        </Button>
      </div>
    </div>
  );
};

export default VoiceAgent;
