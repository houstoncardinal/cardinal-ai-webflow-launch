import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
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
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Insights", href: "/insights" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg' 
        : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              onClick={handleLogoClick}
              className="text-2xl font-light text-gray-900 tracking-wide group cursor-pointer"
            >
              <span className="group-hover:text-green-600 transition-colors duration-300">CARDINAL</span>
              <span className="text-green-600 font-normal ml-1 animate-pulse">.</span>
            </Link>
          </div>
          
          {/* Desktop Menu with enhanced animations */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-green-600 text-sm font-medium transition-all duration-300 relative group transform hover:scale-105"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                  <span className="absolute -inset-2 rounded-lg bg-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </Link>
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
                
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-sm font-medium group transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Contact us
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>

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
              
              <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-3 group transition-all duration-300 hover:scale-105">
                Contact us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
