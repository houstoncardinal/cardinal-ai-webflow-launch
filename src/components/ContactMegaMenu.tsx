import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  Calendar, 
  MessageCircle, 
  ArrowRight,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  setIsOpen: (open: boolean) => void;
  setIsHoveringMegaMenu?: (hovering: boolean) => void;
}

const ContactMegaMenu = ({ isOpen, onClose, setIsOpen, setIsHoveringMegaMenu }: ContactMegaMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const contactOptions = [
    {
      id: "call",
      icon: Phone,
      title: "Call Us Now",
      description: "Speak directly with our experts",
      phone: "+1 (832) 989-2163",
      gradient: "from-green-500/20 via-emerald-400/25 to-green-600/20",
      accentColor: "text-green-600",
      glowColor: "green-500/30",
      action: () => window.open("tel:+18329892163", "_self"),
      features: ["24/7 Support", "Expert Consultation", "Immediate Response"]
    },
    {
      id: "email",
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message",
      email: "hunain@cardinalhtx.com",
      gradient: "from-blue-500/20 via-cyan-400/25 to-blue-600/20",
      accentColor: "text-blue-600",
      glowColor: "blue-500/30",
      action: () => window.open("mailto:hunain@cardinalhtx.com", "_self"),
      features: ["Detailed Proposals", "File Attachments", "Tracked Responses"]
    },
    {
      id: "schedule",
      icon: Calendar,
      title: "Schedule Consultation",
      description: "Book a free strategy session",
      gradient: "from-purple-500/20 via-violet-400/25 to-purple-600/20",
      accentColor: "text-purple-600",
      glowColor: "purple-500/30",
      action: () => window.open("/contact?type=consultation", "_self"),
      features: ["Free Strategy Session", "Custom Solutions", "ROI Analysis"]
    },
    {
      id: "callback",
      icon: MessageCircle,
      title: "Request Callback",
      description: "We'll call you back",
      gradient: "from-amber-500/20 via-yellow-400/25 to-amber-600/20",
      accentColor: "text-amber-600",
      glowColor: "amber-500/30",
      action: () => window.open("/contact?type=callback", "_self"),
      features: ["Flexible Timing", "No Obligation", "Quick Response"]
    }
  ];



  if (!isOpen) return null;

  return (
    <div 
      ref={menuRef}
      className="absolute top-full left-0 right-0 z-50 animate-in slide-in-from-top-2 duration-500 ease-out mega-menu-container"
      onMouseEnter={() => {
        setIsOpen(true);
        setIsHoveringMegaMenu?.(true);
      }}
      onMouseLeave={(e) => {
        // Only close if mouse is actually leaving the mega menu area
        const rect = menuRef.current?.getBoundingClientRect();
        if (rect) {
          // Add a much larger buffer zone to prevent premature closing
          const buffer = 50; // 50px buffer
          const isActuallyLeaving = (
            e.clientY < rect.top - buffer ||
            e.clientX < rect.left - buffer ||
            e.clientX > rect.right + buffer ||
            e.clientY > rect.bottom + buffer
          );
          
          if (isActuallyLeaving) {
            setTimeout(() => {
              setIsHoveringMegaMenu?.(false);
            }, 800);
          }
        }
      }}
    >
      {/* Backdrop blur */}
      <div 
        className="absolute inset-0 bg-black/5 backdrop-blur-sm"
        onMouseEnter={() => {
          setIsHoveringMegaMenu?.(true);
        }}
      />
      
      {/* Main menu container */}
      <div className="relative bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-xl">
        {/* Animated border gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 opacity-0 animate-pulse"></div>
        
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl"></div>
        </div>

        <div 
          className="max-w-5xl mx-auto px-6 lg:px-8 py-6 relative z-10"
          onMouseEnter={() => {
            setIsHoveringMegaMenu?.(true);
          }}
          onMouseLeave={() => {
            // Don't clear hover state immediately - let the main container handle it
          }}
        >
          {/* Header */}
          <div className="text-center mb-4">
            <h2 className="text-xl font-light text-gray-900 mb-1">
              Let's Start Your Project
            </h2>
            <p className="text-gray-600 text-xs">
              Choose your preferred way to connect with our expert team
            </p>
          </div>

          {/* Contact Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {contactOptions.map((option, index) => (
              <div
                key={option.id}
                className="animate-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="group relative block">
                  {/* Glass morphism effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-2xl backdrop-blur-[2px]"></div>
                    <div className="absolute inset-[1px] bg-gradient-to-br from-white/30 via-transparent to-white/20 rounded-2xl"></div>
                  </div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
                  </div>

                  <div 
                    className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-lg p-4 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-1 overflow-hidden cursor-pointer flex flex-col h-48"
                    onClick={option.action}
                  >
                    {/* Service gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-20 transition-all duration-300`}></div>
                    
                    <div className="relative z-10 flex flex-col h-full justify-between">
                      {/* Header Section */}
                      <div>
                        {/* Icon and Title Row */}
                        <div className="flex items-center mb-3">
                          <div className={`w-8 h-8 ${option.accentColor} relative group-hover:scale-110 transition-all duration-300 mr-3`}>
                            <option.icon className="w-full h-full" strokeWidth={1.5} />
                            <div className={`absolute inset-0 bg-${option.glowColor} opacity-0 group-hover:opacity-30 blur-md transition-all duration-300 rounded-full`}></div>
                          </div>
                          <h3 className={`text-sm font-semibold text-gray-900 group-hover:${option.accentColor} transition-colors duration-300`}>
                            {option.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                          {option.description}
                        </p>
                      </div>

                      {/* Footer Section */}
                      <div>
                        {/* Contact Info */}
                        <div className="mb-3">
                          {option.phone && (
                            <p className="text-sm font-medium text-gray-900 mb-1">{option.phone}</p>
                          )}
                          {option.email && (
                            <p className="text-sm font-medium text-gray-900 mb-1">{option.email}</p>
                          )}
                        </div>

                        {/* CTA */}
                        <div className={`inline-flex items-center text-sm font-medium ${option.accentColor} group-hover:translate-x-1 transition-all duration-300`}>
                          Connect Now
                          <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>

                    {/* Progress indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-100">
                      <div className={`h-full bg-gradient-to-r ${option.gradient} w-0 group-hover:w-full transition-all duration-1000 ease-out`}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>



          {/* Bottom CTA */}
          <div className="text-center pt-3 border-t border-gray-200/30">
            <Link
              to="/contact"
              onClick={onClose}
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-green-500/25 group"
            >
              <Zap className="mr-2 w-3 h-3 group-hover:rotate-12 transition-transform duration-300" />
              Start Your Project
              <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMegaMenu; 