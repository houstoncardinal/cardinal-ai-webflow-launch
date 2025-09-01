import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  Calendar, 
  Code, 
  Smartphone, 
  Search, 
  Palette, 
  Share2, 
  Zap,
  X,
  ChevronUp,
  MessageCircle,
  ExternalLink,
  Star,
  Users,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";

const FloatingActionWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const quickActions = [
    {
      icon: Phone,
      title: "Call Us Now",
      subtitle: "Speak directly with our team",
      action: "tel:+18329892163",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      hoverBg: "hover:bg-green-100",
      external: true
    },
    {
      icon: Calendar,
      title: "Schedule Consultation",
      subtitle: "Free 30-minute discovery call",
      action: "/contact",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      hoverBg: "hover:bg-blue-100"
    },
    {
      icon: Code,
      title: "Web Development",
      subtitle: "Custom websites & applications",
      action: "/services/web-development",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      hoverBg: "hover:bg-purple-100"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      subtitle: "iOS & Android development",
      action: "/services/mobile-applications",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      hoverBg: "hover:bg-emerald-100"
    },
    {
      icon: Search,
      title: "SEO & Marketing",
      subtitle: "Digital marketing solutions",
      action: "/services/seo-insights",
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
      hoverBg: "hover:bg-rose-100"
    },
    {
      icon: Palette,
      title: "Brand Identity",
      subtitle: "Logo & brand design",
      action: "/services/brand-identity",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      hoverBg: "hover:bg-indigo-100"
    }
  ];

  const handleAction = (action: string, external: boolean = false) => {
    if (external) {
      window.location.href = action;
    } else {
      window.location.href = action;
    }
    setIsOpen(false);
    setIsExpanded(false);
  };

  const toggleWidget = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsExpanded(false);
    }
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <div className="relative">
          {/* Main Floating Button */}
          <Button
            onClick={toggleWidget}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border-0 animate-float hover:animate-glow"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MessageCircle className="w-6 h-6" />
            )}
          </Button>

          {/* Pulse Animation Ring */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
          
          {/* Status Indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
        </div>

        {/* Quick Actions Popup */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 w-72 sm:w-80 lg:w-96 animate-in slide-in-from-bottom-2 duration-300">
            {/* Popup Container */}
            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Quick Actions</h3>
                    <p className="text-green-100 text-sm">Get started in seconds</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleExpanded}
                    className="text-white hover:bg-green-700/50 p-1"
                  >
                    <ChevronUp className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-0">
                {/* Expanded View - All Actions */}
                {isExpanded ? (
                  <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
                    {quickActions.map((action, index) => (
                      <button
                        key={index}
                        onClick={() => handleAction(action.action, action.external)}
                        className={`w-full p-3 rounded-lg border ${action.bgColor} ${action.borderColor} ${action.hoverBg} transition-all duration-200 hover:scale-[1.02] hover:shadow-md text-left group`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${action.bgColor} group-hover:scale-110 transition-transform duration-200`}>
                            <action.icon className={`w-5 h-5 ${action.color}`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm">{action.title}</h4>
                            <p className="text-gray-600 text-xs">{action.subtitle}</p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  /* Collapsed View - Top 3 Actions */
                  <div className="p-4 space-y-3">
                    {quickActions.slice(0, 3).map((action, index) => (
                      <button
                        key={index}
                        onClick={() => handleAction(action.action, action.external)}
                        className={`w-full p-3 rounded-lg border ${action.bgColor} ${action.borderColor} ${action.hoverBg} transition-all duration-200 hover:scale-[1.02] hover:shadow-md text-left group`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${action.bgColor} group-hover:scale-110 transition-transform duration-200`}>
                            <action.icon className={`w-5 h-5 ${action.color}`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm">{action.title}</h4>
                            <p className="text-gray-600 text-xs">{action.subtitle}</p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
                        </div>
                      </button>
                    ))}
                    
                    {/* Show More Button */}
                    <button
                      onClick={toggleExpanded}
                      className="w-full p-3 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-all duration-200 text-center group"
                    >
                      <div className="flex items-center justify-center space-x-2 text-gray-600 group-hover:text-gray-800">
                        <span className="text-sm font-medium">Show More Actions</span>
                        <ChevronUp className="w-4 h-4 transition-transform duration-300" />
                      </div>
                    </button>
                  </div>
                )}

                {/* Footer */}
                <div className="border-t border-gray-100 p-4 bg-gray-50/50">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Available 24/7</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span>4.9/5 Rating</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Arrow Pointer */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-200"></div>
          </div>
        )}
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => {
            setIsOpen(false);
            setIsExpanded(false);
          }}
        />
      )}
    </>
  );
};

export default FloatingActionWidget; 