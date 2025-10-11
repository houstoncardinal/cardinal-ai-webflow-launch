import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Calendar, User, DollarSign, Clock, Plus, Filter, Search, Edit, Trash2, FileText, Upload, Download, Eye, CalendarDays, Users, Tag, Target, CheckCircle, AlertCircle, Clock as ClockIcon, FileUp, MessageSquare, BarChart3, Zap, Crown, Star, Award, Trophy, Gem, Diamond, Sparkles, Rocket, Brain, Cpu, Shield, Database, Globe, Network, Activity, TrendingUp, Palette, Code, Smartphone, Search as SearchIcon, Settings, Globe as GlobeIcon, Cloud } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  status: string;
  base_price: number;
  hourly_rate: number;
  estimated_duration: number;
  features: string[];
  requirements: string[];
  deliverables: string[];
  created_at: string;
  updated_at: string;
  total_projects?: number;
  total_revenue?: number;
  average_rating?: number;
  completion_rate?: number;
}

interface ServicePackage {
  id: string;
  service_id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  features: string[];
  is_popular?: boolean;
}

const ServicesTab = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isServiceDialogOpen, setIsServiceDialogOpen] = useState(false);
  const { toast } = useToast();

  // Form states
  const [serviceForm, setServiceForm] = useState({
    name: '',
    description: '',
    category: '',
    status: 'active',
    base_price: '',
    hourly_rate: '',
    estimated_duration: '',
    features: [] as string[],
    requirements: [] as string[],
    deliverables: [] as string[]
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      
      // Demo data for luxury services
      const demoServices: Service[] = [
        {
          id: '1',
          name: 'Quantum Web Development',
          description: 'Next-generation web applications built with cutting-edge technologies including AI, blockchain, and quantum computing principles.',
          category: 'web-development',
          status: 'active',
          base_price: 25000,
          hourly_rate: 150,
          estimated_duration: 160,
          features: [
            'AI-Powered User Experience',
            'Blockchain Integration',
            'Quantum-Safe Security',
            'Real-time Analytics',
            'Scalable Architecture',
            'Performance Optimization'
          ],
          requirements: [
            'Detailed project requirements',
            'Brand guidelines',
            'Target audience analysis',
            'Competitive research'
          ],
          deliverables: [
            'Fully functional web application',
            'Source code and documentation',
            'Deployment guide',
            'Training materials',
            '3 months of support'
          ],
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
          total_projects: 15,
          total_revenue: 375000,
          average_rating: 4.9,
          completion_rate: 98
        },
        {
          id: '2',
          name: 'Neural Mobile Applications',
          description: 'Revolutionary mobile apps with neural network capabilities, biometric authentication, and predictive user experiences.',
          category: 'mobile-applications',
          status: 'active',
          base_price: 35000,
          hourly_rate: 175,
          estimated_duration: 200,
          features: [
            'Neural Network Integration',
            'Biometric Authentication',
            'Predictive Analytics',
            'Offline Functionality',
            'Cross-platform Compatibility',
            'Advanced Security'
          ],
          requirements: [
            'App store guidelines compliance',
            'Device compatibility requirements',
            'Security requirements',
            'Performance benchmarks'
          ],
          deliverables: [
            'iOS and Android applications',
            'App store submissions',
            'Testing documentation',
            'User training materials',
            '6 months of maintenance'
          ],
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
          total_projects: 8,
          total_revenue: 280000,
          average_rating: 4.8,
          completion_rate: 95
        },
        {
          id: '3',
          name: 'Quantum Brand Identity',
          description: 'Comprehensive brand identity systems with quantum-inspired design principles and dynamic visual elements.',
          category: 'brand-identity',
          status: 'active',
          base_price: 15000,
          hourly_rate: 125,
          estimated_duration: 120,
          features: [
            'Quantum Design System',
            'Dynamic Logo Creation',
            'Brand Guidelines',
            'Visual Identity Package',
            'Brand Strategy',
            'Implementation Guide'
          ],
          requirements: [
            'Company vision and mission',
            'Target audience profiles',
            'Competitive analysis',
            'Brand positioning'
          ],
          deliverables: [
            'Complete brand identity package',
            'Logo variations and formats',
            'Brand guidelines document',
            'Implementation templates',
            'Brand strategy report'
          ],
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
          total_projects: 12,
          total_revenue: 180000,
          average_rating: 4.9,
          completion_rate: 100
        },
        {
          id: '4',
          name: 'AI-Powered SEO Insights',
          description: 'Advanced SEO optimization using artificial intelligence to analyze, predict, and improve search engine rankings.',
          category: 'seo-insights',
          status: 'active',
          base_price: 8000,
          hourly_rate: 100,
          estimated_duration: 80,
          features: [
            'AI Content Analysis',
            'Predictive Ranking Models',
            'Competitive Intelligence',
            'Technical SEO Audit',
            'Performance Monitoring',
            'Automated Reporting'
          ],
          requirements: [
            'Website access',
            'Current SEO data',
            'Business objectives',
            'Target keywords'
          ],
          deliverables: [
            'Comprehensive SEO audit',
            'Optimization strategy',
            'Content recommendations',
            'Technical improvements',
            'Monthly performance reports'
          ],
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
          total_projects: 20,
          total_revenue: 160000,
          average_rating: 4.7,
          completion_rate: 92
        },
        {
          id: '5',
          name: 'Cloud Infrastructure Solutions',
          description: 'Enterprise-grade cloud infrastructure with advanced security, scalability, and performance optimization.',
          category: 'cloud-solutions',
          status: 'active',
          base_price: 45000,
          hourly_rate: 200,
          estimated_duration: 225,
          features: [
            'Multi-cloud Architecture',
            'Advanced Security',
            'Auto-scaling',
            'Disaster Recovery',
            'Performance Monitoring',
            'Cost Optimization'
          ],
          requirements: [
            'Current infrastructure assessment',
            'Security requirements',
            'Performance requirements',
            'Compliance needs'
          ],
          deliverables: [
            'Cloud infrastructure setup',
            'Security implementation',
            'Monitoring and alerting',
            'Documentation and training',
            'Ongoing support'
          ],
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
          total_projects: 6,
          total_revenue: 270000,
          average_rating: 4.9,
          completion_rate: 97
        }
      ];

      setServices(demoServices);
    } catch (error) {
      console.error('Error loading data:', error);
      toast({
        title: "Error",
        description: "Failed to load service data",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'inactive': return 'bg-gray-500';
      case 'draft': return 'bg-yellow-500';
      case 'archived': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web-development': return Code;
      case 'mobile-applications': return Smartphone;
      case 'brand-identity': return Palette;
      case 'seo-insights': return SearchIcon;
      case 'cloud-solutions': return Cloud;
      case 'digital-campaigns': return BarChart3;
      case 'experience-optimization': return Settings;
      default: return Settings;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDuration = (hours: number) => {
    const weeks = Math.ceil(hours / 40);
    return `${weeks} week${weeks > 1 ? 's' : ''}`;
  };

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || service.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || service.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-gray-600">Loading services...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Service Management
          </h2>
          <p className="text-gray-600 mt-2">Comprehensive service portfolio management for Cardinal Consulting</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            <Filter className="mr-2 h-4 w-4" />
            Advanced Filter
          </Button>
          <Dialog open={isServiceDialogOpen} onOpenChange={setIsServiceDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="mr-2 h-4 w-4" />
                New Service
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Service</DialogTitle>
                <DialogDescription>
                  Add a new service to the Cardinal Consulting portfolio
                </DialogDescription>
              </DialogHeader>
              {/* Form content would go here */}
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsServiceDialogOpen(false)}>
                  Cancel
                </Button>
                <Button>Create Service</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0 pr-4">
                <p className="text-sm font-medium text-gray-600 truncate">Total Services</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900 truncate">{services.length}</p>
              </div>
              <div className="flex-shrink-0">
                <Settings className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0 pr-4">
                <p className="text-sm font-medium text-gray-600 truncate">Active Services</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900 truncate">
                  {services.filter(s => s.status === 'active').length}
                </p>
              </div>
              <div className="flex-shrink-0">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0 pr-4">
                <p className="text-sm font-medium text-gray-600 truncate">Total Revenue</p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 break-words">
                  {formatCurrency(services.reduce((sum, service) => sum + (service.total_revenue || 0), 0))}
                </p>
              </div>
              <div className="flex-shrink-0">
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0 pr-4">
                <p className="text-sm font-medium text-gray-600 truncate">Avg Rating</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900 truncate">
                  {(services.reduce((sum, service) => sum + (service.average_rating || 0), 0) / services.length).toFixed(1)}
                </p>
              </div>
              <div className="flex-shrink-0">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="web-development">Web Development</SelectItem>
            <SelectItem value="mobile-applications">Mobile Applications</SelectItem>
            <SelectItem value="brand-identity">Brand Identity</SelectItem>
            <SelectItem value="seo-insights">SEO Insights</SelectItem>
            <SelectItem value="cloud-solutions">Cloud Solutions</SelectItem>
            <SelectItem value="digital-campaigns">Digital Campaigns</SelectItem>
            <SelectItem value="experience-optimization">Experience Optimization</SelectItem>
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredServices.map((service) => {
          const CategoryIcon = getCategoryIcon(service.category);
          return (
            <Card key={service.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <CategoryIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-gray-900">{service.name}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {service.category.replace('-', ' ')}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className={getStatusColor(service.status)}>
                    {service.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">{formatCurrency(service.base_price)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">{formatDuration(service.estimated_duration)}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">{service.total_projects || 0}</p>
                    <p className="text-xs text-gray-600">Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">{service.average_rating || 0}</p>
                    <p className="text-xs text-gray-600">Rating</p>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setSelectedService(service)}
                  >
                    <Eye className="mr-1 h-3 w-3" />
                    View
                  </Button>
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Edit className="mr-1 h-3 w-3" />
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Service Details Dialog */}
      {selectedService && (
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  {(() => {
                    const CategoryIcon = getCategoryIcon(selectedService.category);
                    return <CategoryIcon className="h-8 w-8 text-blue-600" />;
                  })()}
                </div>
                <div>
                  <DialogTitle className="text-2xl text-gray-900">{selectedService.name}</DialogTitle>
                  <DialogDescription className="text-gray-600">
                    {selectedService.category.replace('-', ' ')} • {selectedService.status}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>
            
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="deliverables">Deliverables</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="grid grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">Service Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <Badge className={getStatusColor(selectedService.status)}>
                          {selectedService.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Category:</span>
                        <span className="text-gray-900">{selectedService.category.replace('-', ' ')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Base Price:</span>
                        <span className="text-gray-900 font-semibold">{formatCurrency(selectedService.base_price)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Hourly Rate:</span>
                        <span className="text-gray-900">{formatCurrency(selectedService.hourly_rate)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="text-gray-900">{formatDuration(selectedService.estimated_duration)}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">Performance Metrics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Projects:</span>
                        <span className="text-gray-900">{selectedService.total_projects || 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Revenue:</span>
                        <span className="text-gray-900 font-semibold">{formatCurrency(selectedService.total_revenue || 0)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Average Rating:</span>
                        <span className="text-gray-900">{selectedService.average_rating || 0}/5.0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Completion Rate:</span>
                        <span className="text-gray-900">{selectedService.completion_rate || 0}%</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900">Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{selectedService.description}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="features" className="space-y-4 mt-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Features</h3>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Feature
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.features.map((feature, index) => (
                    <Card key={index}>
                      <CardContent className="p-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-gray-900">{feature}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="requirements" className="space-y-4 mt-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Requirements</h3>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Requirement
                  </Button>
                </div>
                <div className="space-y-3">
                  {selectedService.requirements.map((requirement, index) => (
                    <Card key={index}>
                      <CardContent className="p-3">
                        <div className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-blue-600" />
                          <span className="text-gray-900">{requirement}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="deliverables" className="space-y-4 mt-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Deliverables</h3>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Deliverable
                  </Button>
                </div>
                <div className="space-y-3">
                  {selectedService.deliverables.map((deliverable, index) => (
                    <Card key={index}>
                      <CardContent className="p-3">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-purple-600" />
                          <span className="text-gray-900">{deliverable}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ServicesTab;