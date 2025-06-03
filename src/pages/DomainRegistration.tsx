
import { useState } from "react";
import { Search, Check, X, Globe, Shield, Zap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface DomainResult {
  domain: string;
  available: boolean;
  price: string;
  extension: string;
}

const DomainRegistration = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<DomainResult[]>([]);
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const { toast } = useToast();

  const popularExtensions = [".com", ".net", ".org", ".io", ".co", ".app", ".dev", ".tech"];
  
  const features = [
    {
      icon: Shield,
      title: "Domain Privacy Protection",
      description: "Keep your personal information private with WHOIS protection",
      price: "$9.99/year"
    },
    {
      icon: Globe,
      title: "DNS Management",
      description: "Advanced DNS controls and management tools included",
      price: "Free"
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Get your domain up and running in minutes",
      price: "Free"
    },
    {
      icon: Calendar,
      title: "Auto-Renewal",
      description: "Never lose your domain with automatic renewal",
      price: "Optional"
    }
  ];

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      toast({
        title: "Please enter a domain name",
        description: "Enter the domain name you'd like to search for",
        variant: "destructive"
      });
      return;
    }

    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      const baseDomain = searchTerm.toLowerCase().replace(/\s+/g, '');
      const results: DomainResult[] = popularExtensions.map(ext => ({
        domain: `${baseDomain}${ext}`,
        available: Math.random() > 0.4, // Simulate availability
        price: ext === '.com' ? '$12.99' : ext === '.io' ? '$39.99' : ext === '.org' ? '$14.99' : '$19.99',
        extension: ext
      }));
      
      setSearchResults(results);
      setIsSearching(false);
    }, 1500);
  };

  const toggleDomainSelection = (domain: string) => {
    setSelectedDomains(prev => 
      prev.includes(domain) 
        ? prev.filter(d => d !== domain)
        : [...prev, domain]
    );
  };

  const calculateTotal = () => {
    return searchResults
      .filter(result => selectedDomains.includes(result.domain))
      .reduce((total, result) => total + parseFloat(result.price.replace('$', '')), 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    if (selectedDomains.length === 0) {
      toast({
        title: "No domains selected",
        description: "Please select at least one domain to proceed",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Proceeding to checkout",
      description: `${selectedDomains.length} domain(s) selected. Total: $${calculateTotal()}`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            Find Your Perfect
            <span className="block text-blue-600 font-normal">Domain Name</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Search for available domain names and register them instantly. 
            Get started with your online presence today.
          </p>

          {/* Search Section */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Enter your domain name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="h-14 text-lg pl-12 pr-4"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              <Button 
                onClick={handleSearch}
                disabled={isSearching}
                className="h-14 px-8 text-lg bg-blue-600 hover:bg-blue-700"
              >
                {isSearching ? "Searching..." : "Search"}
              </Button>
            </div>

            {/* Popular Extensions */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {popularExtensions.map(ext => (
                <span 
                  key={ext}
                  className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:border-blue-300 cursor-pointer transition-colors"
                  onClick={() => setSearchTerm(searchTerm + ext)}
                >
                  {ext}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Results List */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Search Results for "{searchTerm}"
                </h2>
                <div className="space-y-4">
                  {searchResults.map((result) => (
                    <Card 
                      key={result.domain}
                      className={`transition-all duration-200 hover:shadow-lg cursor-pointer ${
                        selectedDomains.includes(result.domain) ? 'ring-2 ring-blue-500' : ''
                      }`}
                      onClick={() => result.available && toggleDomainSelection(result.domain)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                              result.available ? 'bg-green-100' : 'bg-red-100'
                            }`}>
                              {result.available ? (
                                <Check className="w-4 h-4 text-green-600" />
                              ) : (
                                <X className="w-4 h-4 text-red-600" />
                              )}
                            </div>
                            <div>
                              <h3 className="text-lg font-medium text-gray-900">{result.domain}</h3>
                              <p className={`text-sm ${result.available ? 'text-green-600' : 'text-red-600'}`}>
                                {result.available ? 'Available' : 'Unavailable'}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-semibold text-gray-900">{result.price}</p>
                            <p className="text-sm text-gray-500">/year</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Checkout Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-8">
                  <CardHeader>
                    <CardTitle>Your Selection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedDomains.length === 0 ? (
                      <p className="text-gray-500 text-center py-8">
                        No domains selected
                      </p>
                    ) : (
                      <div className="space-y-4">
                        {selectedDomains.map(domain => {
                          const result = searchResults.find(r => r.domain === domain);
                          return (
                            <div key={domain} className="flex justify-between items-center">
                              <span className="text-sm text-gray-900">{domain}</span>
                              <span className="text-sm font-medium">{result?.price}</span>
                            </div>
                          );
                        })}
                        <div className="border-t pt-4">
                          <div className="flex justify-between items-center text-lg font-semibold">
                            <span>Total:</span>
                            <span>${calculateTotal()}</span>
                          </div>
                        </div>
                        <Button 
                          onClick={handleCheckout}
                          className="w-full bg-green-600 hover:bg-green-700"
                        >
                          Proceed to Checkout
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our domain registration service includes powerful features to help you succeed online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <p className="text-blue-600 font-medium">{feature.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              No hidden fees. What you see is what you pay.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">.com</CardTitle>
                <div className="text-4xl font-bold text-blue-600">$12.99</div>
                <p className="text-gray-600">/year</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-2" />
                    <span>Most popular extension</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-2" />
                    <span>Global recognition</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-2" />
                    <span>SEO friendly</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 ring-2 ring-blue-500">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">.io</CardTitle>
                <div className="text-4xl font-bold text-blue-600">$39.99</div>
                <p className="text-gray-600">/year</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-2" />
                    <span>Perfect for tech startups</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-2" />
                    <span>Modern and trendy</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-2" />
                    <span>Developer favorite</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">.org</CardTitle>
                <div className="text-4xl font-bold text-blue-600">$14.99</div>
                <p className="text-gray-600">/year</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-2" />
                    <span>Ideal for organizations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-2" />
                    <span>Trusted extension</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-2" />
                    <span>Non-profit friendly</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DomainRegistration;
