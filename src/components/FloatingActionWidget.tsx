import { useState, useCallback, useEffect } from "react";
import { 
  Phone, 
  Calendar, 
  Code, 
  Smartphone, 
  Search, 
  Palette, 
  X,
  ChevronUp,
  MessageCircle,
  ExternalLink,
  Star
} from "lucide-react";

const FloatingActionWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const quickActions = [
    {
      icon: Phone,
      title: "Call Us Now",
      subtitle: "Speak directly with our team",
      action: "tel:+12819017016",
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

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll visibility for mobile
  useEffect(() => {
    const handleScroll = () => {
      if (!isMobile) {
        setIsVisible(true);
        return;
      }

      // Get hero section height (approximately 75vh)
      const heroHeight = window.innerHeight * 0.75;
      const scrollY = window.scrollY;
      
      // Show widget when scrolled past hero section
      if (scrollY > heroHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        // Close widget if it's open when scrolling back to hero
        if (isOpen) {
          setIsOpen(false);
          setIsExpanded(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, isOpen]);

  const handleAction = useCallback((action: string, external: boolean = false) => {
    if (external) {
      window.location.href = action;
    } else {
      window.location.href = action;
    }
    setIsOpen(false);
    setIsExpanded(false);
  }, []);

  const toggleWidget = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(prev => !prev);
    if (isOpen) {
      setIsExpanded(false);
    }
  }, [isOpen]);

  const toggleExpanded = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(prev => !prev);
  }, []);

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
    setIsExpanded(false);
  }, []);

  // Close widget with Escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        setIsExpanded(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  // Don't render if not visible (mobile only)
  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* Enhanced Backdrop - Render first, below everything */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[99998] transition-opacity duration-300"
          onClick={handleBackdropClick}
          style={{ pointerEvents: 'auto' }}
        />
      )}

      <div className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-[99999] floating-widget transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`} style={{ pointerEvents: 'auto' }}>
        {/* Main Floating Button */}
        <div className="relative" style={{ pointerEvents: 'auto' }}>
          <button
            type="button"
            onClick={toggleWidget}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border-0 cursor-pointer flex items-center justify-center group relative z-10"
            style={{
              boxShadow: '0 10px 40px rgba(5, 150, 105, 0.3), 0 0 20px rgba(5, 150, 105, 0.2)',
              pointerEvents: 'auto'
            }}
          >
            {isOpen ? (
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            ) : (
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            )}
          </button>

          {/* Pulse Animation Rings */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-full bg-green-300 animate-ping opacity-20 pointer-events-none" style={{ animationDelay: '1s' }}></div>
          
          {/* Status Indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse pointer-events-none">
            <div className="absolute inset-1 bg-green-400 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Quick Actions Popup */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 w-80 sm:w-96 transform transition-all duration-300 ease-out scale-100 opacity-100 z-10" style={{ pointerEvents: 'auto' }}>
            {/* Popup Container */}
            <div className="border shadow-2xl bg-white backdrop-blur-xl overflow-hidden rounded-2xl transform transition-all duration-300 hover:scale-[1.01] w-full" style={{ pointerEvents: 'auto', minWidth: '320px' }}>
              {/* Enhanced Header */}
              <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 p-5 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-300 rounded-full translate-y-12 -translate-x-12"></div>
                </div>
                
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold flex items-center mb-1">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Quick Actions
                    </h3>
                    <p className="text-green-100 text-sm">Get started in seconds</p>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <button
                      type="button"
                      onClick={toggleExpanded}
                      className="text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-200 hover:scale-110"
                      aria-label="Toggle expand"
                    >
                      <ChevronUp className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-200 hover:scale-110"
                      aria-label="Close widget"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-0 w-full">
                {/* Expanded View - All Actions */}
                {isExpanded ? (
                  <div className="p-5 space-y-3 max-h-96 overflow-y-auto w-full">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleAction(action.action, action.external)}
                      className={`w-full p-4 rounded-xl border-2 ${action.bgColor} ${action.borderColor} ${action.hoverBg} transition-all duration-300 hover:scale-[1.02] hover:shadow-lg text-left group relative overflow-hidden`}
                    >
                      {/* Hover Background Effect */}
                      <div className={`absolute inset-0 ${action.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      
                      <div className="flex items-center space-x-4 relative z-10">
                        <div className={`p-3 rounded-xl ${action.bgColor} group-hover:scale-110 transition-all duration-300 group-hover:rotate-3 flex-shrink-0`}>
                          <action.icon className={`w-6 h-6 ${action.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-gray-900 group-hover:text-gray-800 text-base transition-colors duration-300 mb-1">{action.title}</h4>
                          <p className="text-gray-600 group-hover:text-gray-700 text-sm transition-colors duration-300">{action.subtitle}</p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-all duration-300 group-hover:translate-x-1 flex-shrink-0" />
                      </div>
                      
                      {/* Ripple Effect */}
                      <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  ))}
                </div>
                ) : (
                  /* Collapsed View - Top 3 Actions */
                  <div className="p-5 space-y-3 w-full">
                  {quickActions.slice(0, 3).map((action, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleAction(action.action, action.external)}
                      className={`w-full p-4 rounded-xl border-2 ${action.bgColor} ${action.borderColor} ${action.hoverBg} transition-all duration-300 hover:scale-[1.02] hover:shadow-lg text-left group relative overflow-hidden`}
                    >
                      {/* Hover Background Effect */}
                      <div className={`absolute inset-0 ${action.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      
                      <div className="flex items-center space-x-4 relative z-10">
                        <div className={`p-3 rounded-xl ${action.bgColor} group-hover:scale-110 transition-all duration-300 group-hover:rotate-3 flex-shrink-0`}>
                          <action.icon className={`w-6 h-6 ${action.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-gray-900 group-hover:text-gray-800 text-base transition-colors duration-300 mb-1">{action.title}</h4>
                          <p className="text-gray-600 group-hover:text-gray-700 text-sm transition-colors duration-300">{action.subtitle}</p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-all duration-300 group-hover:translate-x-1 flex-shrink-0" />
                      </div>
                      
                      {/* Ripple Effect */}
                      <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  ))}
                  
                  {/* Enhanced Show More Button */}
                  <button
                    type="button"
                    onClick={toggleExpanded}
                    className="w-full p-3 rounded-lg border border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-300 text-center group hover:shadow-md hover:scale-[1.02] relative overflow-hidden"
                  >
                    {/* Hover Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                      <div className="flex items-center justify-center space-x-2 text-gray-600 group-hover:text-gray-800 relative z-10">
                        <span className="text-base font-semibold">Show More Actions</span>
                        <ChevronUp className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    
                    {/* Subtle Border Animation */}
                    <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-green-200 transition-all duration-300"></div>
                  </button>
                </div>
              )}

              {/* Enhanced Footer */}
              <div className="border-t border-gray-100 p-5 bg-gradient-to-r from-gray-50/80 to-green-50/30 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-green-400 rounded-full -translate-y-8 translate-x-8"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-blue-400 rounded-full translate-y-6 -translate-x-6"></div>
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-600 relative z-10">
                  <div className="flex items-center space-x-2 group cursor-pointer">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="group-hover:text-green-600 transition-colors duration-300">Available 24/7</span>
                  </div>
                  <div className="flex items-center space-x-1 group cursor-pointer">
                    <Star className="w-3 h-3 text-yellow-500 fill-current group-hover:scale-125 transition-transform duration-300" />
                    <span className="group-hover:text-yellow-600 transition-colors duration-300">4.9/5 Rating</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow Pointer */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-200"></div>
          </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingActionWidget;
