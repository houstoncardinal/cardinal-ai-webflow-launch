import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import ServicesMegaMenu from "./ServicesMegaMenu";
import ContactMegaMenu from "./ContactMegaMenu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isHoveringMegaMenu, setIsHoveringMegaMenu] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isHoveringNavItem, setIsHoveringNavItem] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        checkAdminRole(session.user.id);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        if (session?.user) {
          checkAdminRole(session.user.id);
        } else {
          setIsAdmin(false);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  // Ensure only one mega menu is open at a time
  useEffect(() => {
    // No need for this effect since we only have one mega menu now
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  // Enhanced hover detection with mouse position tracking
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!navRef.current) return;

      const navRect = navRef.current.getBoundingClientRect();
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // Check if mouse is within the navigation area (including mega menus)
      // Add buffer zones to prevent premature closing
      const buffer = 20; // 20px buffer
      const isInNavArea = (
        mouseX >= navRect.left - buffer && 
        mouseX <= navRect.right + buffer && 
        mouseY >= navRect.top - buffer && 
        mouseY <= navRect.bottom + 500 // Extended area for mega menus
      );

      // If mouse leaves the extended nav area, close mega menus
      if (!isInNavArea && (isServicesMenuOpen || isContactMenuOpen)) {
        setTimeout(() => {
          if (!isHoveringMegaMenu) {
            setIsServicesMenuOpen(false);
            setIsContactMenuOpen(false);
            setActiveMegaMenu(null);
          }
        }, 500);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isServicesMenuOpen, isContactMenuOpen, isHoveringMegaMenu]);

  const checkAdminRole = async (userId: string) => {
    const { data } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', userId)
      .single();
    
    setIsAdmin(data?.role === 'admin');
  };

  const navItems = [
    { name: "Services", href: "/services", hasMegaMenu: true, megaMenuType: "services" },
    { name: "Industries", href: "/industries" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact", hasMegaMenu: true, megaMenuType: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close mega menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.mega-menu-container') && !target.closest('.nav-item')) {
        setIsServicesMenuOpen(false);
        setIsContactMenuOpen(false);
        setActiveMegaMenu(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Topbar - Desktop Only */}
      <div className="hidden lg:block bg-green-600 text-white fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between py-1">
            <div className="flex items-center space-x-3">
              <span className="text-xs font-medium">🎯</span>
              <span className="text-xs">
                <strong>Limited Time Offer:</strong> Get a FREE Website Audit + SEO Analysis Worth $2,500
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-xs opacity-90">No strings attached • Instant results</span>
              <Link to="/free-audit">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-white text-green-600 bg-white hover:bg-green-50 text-xs font-medium transition-all duration-300 hover:scale-105 h-6 px-3"
                >
                  Claim Your Free Audit
                  <ArrowRight className="ml-1 w-3 h-3" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-lg lg:top-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link 
              to="/" 
              onClick={handleLogoClick}
              className="flex items-center group cursor-pointer"
            >
              <img 
                src="/logo.png" 
                alt="Cardinal Consulting Logo" 
                className="h-16 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>
          
          {/* Desktop Menu with enhanced animations */}
          <div 
            ref={navRef}
            className="hidden lg:block relative mega-menu-container"
            onMouseLeave={() => {
              // Close all mega menus when leaving the navigation area
              setTimeout(() => {
                if (!isHoveringMegaMenu && !isHoveringNavItem) {
                  setIsServicesMenuOpen(false);
                  setIsContactMenuOpen(false);
                  setActiveMegaMenu(null);
                }
              }, 500);
            }}
          >
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative">
                  {item.hasMegaMenu ? (
                    <div className="relative">
                      <Link
                        to={item.href}
                        className="text-gray-700 hover:text-green-600 text-sm font-medium transition-all duration-300 relative group transform hover:scale-105 cursor-pointer nav-item"
                        style={{animationDelay: `${index * 100}ms`}}
                        onMouseEnter={() => {
                          // Clear any existing timeout
                          if (hoverTimeout) {
                            clearTimeout(hoverTimeout);
                            setHoverTimeout(null);
                          }
                          
                          // Set which nav item we're hovering
                          if (item.megaMenuType === "services") {
                            setIsHoveringNavItem("services");
                            setIsServicesMenuOpen(true);
                            setActiveMegaMenu("services");
                          } else if (item.megaMenuType === "contact") {
                            setIsHoveringNavItem("contact");
                            setIsContactMenuOpen(true);
                            setActiveMegaMenu("contact");
                          }
                        }}
                        onMouseLeave={() => {
                          // Clear the nav item hover state
                          setIsHoveringNavItem(null);
                          
                          // Set a timeout to close the mega menu if not hovering over it
                          const timeout = setTimeout(() => {
                            if (!isHoveringMegaMenu && !isHoveringNavItem) {
                              if (item.megaMenuType === "services") {
                                setIsServicesMenuOpen(false);
                                setActiveMegaMenu(null);
                              } else if (item.megaMenuType === "contact") {
                                setIsContactMenuOpen(false);
                                setActiveMegaMenu(null);
                              }
                            }
                          }, 300);
                          setHoverTimeout(timeout);
                        }}
                      >
                        {item.name}
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></div>
                        {/* Mega menu indicator */}
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100"></div>
                      </Link>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-gray-700 hover:text-green-600 text-sm font-medium transition-all duration-300 relative group transform hover:scale-105 nav-item"
                      style={{animationDelay: `${index * 100}ms`}}
                      onMouseEnter={() => {
                        // Close any open mega menus when hovering over regular nav items
                        setIsServicesMenuOpen(false);
                        setIsContactMenuOpen(false);
                        setActiveMegaMenu(null);
                      }}
                    >
                      {item.name}
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></div>
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="flex items-center gap-4 ml-4">
                {user ? (
                  <div className="flex items-center gap-2">
                    {isAdmin && (
                      <Link to="/admin">
                        <Button variant="outline" size="sm" className="text-sm">
                          Admin
                        </Button>
                      </Link>
                    )}
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => supabase.auth.signOut()}
                      className="text-sm"
                    >
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open("tel:+18325550123", "_self")}
                      className="text-sm"
                    >
                      📞 Call Now
                    </Button>
                    <Link to="/contact">
                      <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-sm font-medium group transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        Free Consultation
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Services Mega Menu */}
          <ServicesMegaMenu 
            isOpen={isServicesMenuOpen} 
            onClose={() => setIsServicesMenuOpen(false)}
            setIsOpen={setIsServicesMenuOpen}
            setIsHoveringMegaMenu={setIsHoveringMegaMenu}
          />

          {/* Contact Mega Menu */}
          <ContactMegaMenu 
            isOpen={isContactMenuOpen} 
            onClose={() => setIsContactMenuOpen(false)}
            setIsOpen={setIsContactMenuOpen}
            setIsHoveringMegaMenu={setIsHoveringMegaMenu}
          />

          {/* Enhanced mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 p-2 transition-all duration-300 hover:scale-110 hover:bg-green-50 rounded-lg"
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X size={24} className="animate-fade-in" />
                ) : (
                  <Menu size={24} className="animate-fade-in" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-green-600 block py-3 px-4 text-base font-medium transition-all duration-300 hover:translate-x-2 hover:bg-green-50 rounded-xl group"
                  onClick={() => setIsMenuOpen(false)}
                  style={{animationDelay: `${index * 50}ms`}}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </Link>
              ))}
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                {user ? (
                  <div className="space-y-3">
                    {isAdmin && (
                      <Link to="/admin" onClick={() => setIsMenuOpen(false)}>
                        <Button variant="outline" className="w-full text-sm py-3 border-green-200 text-green-600 hover:bg-green-50 hover:border-green-300 transition-all duration-300">
                          <User className="mr-2 w-4 h-4" />
                          Admin Dashboard
                        </Button>
                      </Link>
                    )}
                    <Button 
                      onClick={() => {
                        supabase.auth.signOut();
                        setIsMenuOpen(false);
                      }}
                      variant="ghost"
                      className="w-full text-sm py-3 text-gray-600 hover:bg-gray-50 transition-all duration-300"
                    >
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full text-sm py-3 border-green-200 text-green-600 hover:bg-green-50 hover:border-green-300 transition-all duration-300"
                      onClick={() => {
                        window.open("tel:+18325550123", "_self");
                        setIsMenuOpen(false);
                      }}
                    >
                      📞 Call Now
                    </Button>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="outline" className="w-full text-sm py-3 border-green-200 text-green-600 hover:bg-green-50 hover:border-green-300 transition-all duration-300">
                        Free Consultation
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
              
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full mt-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 group transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Contact us
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navigation;
