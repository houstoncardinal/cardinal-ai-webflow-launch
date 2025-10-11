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
      getServices: async () => {
        console.log("Fetching services...");
        return JSON.stringify([
          "Web Development - Custom websites and web applications",
          "Mobile Applications - iOS and Android app development",
          "SEO & Digital Marketing - Search engine optimization and online marketing",
          "Brand Identity - Logo design, branding, and visual identity",
          "E-commerce Solutions - Online store development and optimization",
          "UI/UX Design - User interface and experience design"
        ]);
      },
      getBusinessInfo: async () => {
        console.log("Fetching business info...");
        return JSON.stringify({
          name: "Cardinal Consulting",
          phone: "Contact through the website",
          email: "Contact through the website",
          address: "We serve clients nationwide",
          hours: "Monday-Friday, 9 AM - 6 PM",
          specialties: [
            "Custom Web Development",
            "Mobile App Development", 
            "SEO & Digital Marketing",
            "Brand Identity & Design"
          ]
        });
      },
      getProjectStats: async () => {
        console.log("Fetching project statistics...");
        
        try {
          const { count: totalProjects } = await supabase
            .from('projects')
            .select('*', { count: 'exact', head: true });

          const { count: activeProjects } = await supabase
            .from('projects')
            .select('*', { count: 'exact', head: true })
            .in('status', ['in_progress', 'planning']);

          const { count: completedProjects } = await supabase
            .from('projects')
            .select('*', { count: 'exact', head: true })
            .eq('status', 'completed');

          return JSON.stringify({
            totalProjects: totalProjects || 0,
            activeProjects: activeProjects || 0,
            completedProjects: completedProjects || 0,
            message: `We have ${totalProjects || 0} total projects, with ${activeProjects || 0} currently active and ${completedProjects || 0} completed successfully.`
          });
        } catch (error) {
          console.error("Error fetching project stats:", error);
          return JSON.stringify({
            totalProjects: 0,
            activeProjects: 0,
            completedProjects: 0
          });
        }
      },
      getRecentProjects: async () => {
        console.log("Fetching recent projects...");
        
        try {
          const { data: projects, error } = await supabase
            .from('projects')
            .select('name, service_type, status, client_name')
            .order('created_at', { ascending: false })
            .limit(5);

          if (error) throw error;

          return JSON.stringify(projects || []);
        } catch (error) {
          console.error("Error fetching recent projects:", error);
          return JSON.stringify([]);
        }
      },
      getContactSubmissions: async () => {
        console.log("Fetching contact submission stats...");
        
        try {
          const { count: totalSubmissions } = await supabase
            .from('contact_submissions')
            .select('*', { count: 'exact', head: true });

          const { count: newSubmissions } = await supabase
            .from('contact_submissions')
            .select('*', { count: 'exact', head: true })
            .eq('status', 'new');

          return JSON.stringify({
            total: totalSubmissions || 0,
            new: newSubmissions || 0,
            message: `We have ${totalSubmissions || 0} total contact submissions, with ${newSubmissions || 0} new ones waiting for review.`
          });
        } catch (error) {
          console.error("Error fetching contact submissions:", error);
          return JSON.stringify({ total: 0, new: 0 });
        }
      },
      getNewsletterSubscribers: async () => {
        console.log("Fetching newsletter subscriber count...");
        
        try {
          const { count } = await supabase
            .from('newsletter_subscriptions')
            .select('*', { count: 'exact', head: true })
            .eq('is_active', true);

          return JSON.stringify({
            count: count || 0,
            message: `We have ${count || 0} active newsletter subscribers.`
          });
        } catch (error) {
          console.error("Error fetching newsletter subscribers:", error);
          return JSON.stringify({ count: 0 });
        }
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
