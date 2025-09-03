import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import ServicesMegaMenu from "./ServicesMegaMenu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
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

  const checkAdminRole = async (userId: string) => {
    const { data } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', userId)
      .single();
    
    setIsAdmin(data?.role === 'admin');
  };

  const navItems = [
    { name: "Services", href: "/services", hasMegaMenu: true },
    { name: "Industries", href: "/industries" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
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

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-lg">
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
          <div className="hidden lg:block relative">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative">
                  {item.hasMegaMenu ? (
                    <div
                      className="text-gray-700 hover:text-green-600 text-sm font-medium transition-all duration-300 relative group transform hover:scale-105 cursor-pointer"
                      style={{animationDelay: `${index * 100}ms`}}
                      onMouseEnter={() => setIsServicesMenuOpen(true)}
                    >
                      {item.name}
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></div>
                      {/* Mega menu indicator */}
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100"></div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-gray-700 hover:text-green-600 text-sm font-medium transition-all duration-300 relative group transform hover:scale-105"
                      style={{animationDelay: `${index * 100}ms`}}
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
                  <Link to="/auth">
                    <Button variant="outline" size="sm" className="text-sm">
                      <User className="mr-2 h-4 w-4" />
                      Sign In
                    </Button>
                  </Link>
                )}
                
                <Link to="/contact">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-sm font-medium group transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Contact us
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Services Mega Menu */}
          <ServicesMegaMenu 
            isOpen={isServicesMenuOpen} 
            onClose={() => setIsServicesMenuOpen(false)}
            setIsOpen={setIsServicesMenuOpen}
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
                  className="text-gray-700 hover:text-green-600 block py-2 text-base font-medium transition-all duration-300 hover:translate-x-2 hover:bg-green-50 rounded-lg px-4"
                  onClick={() => setIsMenuOpen(false)}
                  style={{animationDelay: `${index * 50}ms`}}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                {user ? (
                  <div className="space-y-2">
                    {isAdmin && (
                      <Link to="/admin" onClick={() => setIsMenuOpen(false)}>
                        <Button variant="outline" className="w-full text-sm">
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
                      className="w-full text-sm"
                    >
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full text-sm">
                      <User className="mr-2 h-4 w-4" />
                      Sign In
                    </Button>
                  </Link>
                )}
              </div>
              
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-3 group transition-all duration-300 hover:scale-105">
                  Contact us
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
