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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, User, DollarSign, Clock, Plus, Filter, Search, Edit, Trash2, Mail, Phone, Globe, Building, Users, TrendingUp, Award, Star, Crown, Gem, Diamond, Sparkles, Rocket, Brain, Cpu, Shield, Database, Globe as GlobeIcon, Network, Activity, Target, CheckCircle, AlertCircle, Clock as ClockIcon, FileUp, MessageSquare, BarChart3, Zap } from 'lucide-react';

// Define local types since these tables don't exist in the database yet
interface Project {
  id: string;
  name: string;
  status: string;
  budget: number;
  progress: number;
  created_at: string;
  updated_at: string;
}

interface Client {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company: string;
  website?: string;
  industry: string;
  address?: string;
  notes?: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface ClientWithProjects extends Client {
  projects?: Project[];
  totalRevenue?: number;
  activeProjects?: number;
  completedProjects?: number;
  averageProjectValue?: number;
}

const ClientsTab = () => {
  const [clients, setClients] = useState<ClientWithProjects[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [industryFilter, setIndustryFilter] = useState<string>('all');
  const [selectedClient, setSelectedClient] = useState<ClientWithProjects | null>(null);
  const [isClientDialogOpen, setIsClientDialogOpen] = useState(false);
  const { toast } = useToast();

  // Form states
  const [clientForm, setClientForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    industry: '',
    address: '',
    notes: ''
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      
      // Demo data for luxury clients
      const demoClients: ClientWithProjects[] = [
        {
          id: '1',
          name: 'TechCorp Solutions',
          email: 'ceo@techcorp.com',
          phone: '(281) 901-7016',
          company: 'TechCorp Solutions',
          website: 'https://techcorp.com',
          industry: 'Technology',
          address: '123 Innovation Drive, Silicon Valley, CA 94025',
          notes: 'Leading AI and blockchain technology company. Strategic partner for enterprise solutions.',
          status: 'active',
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
          totalRevenue: 1250000,
          activeProjects: 3,
          completedProjects: 12,
          averageProjectValue: 85000,
          projects: [
            {
              id: '1',
              name: 'Quantum E-commerce Platform',
              status: 'in-progress',
              budget: 250000,
              progress: 65,
              created_at: '2024-01-15T00:00:00Z',
              updated_at: '2024-01-15T00:00:00Z'
            } as Project
          ]
        },
        {
          id: '2',
          name: 'FinanceFirst Bank',
          email: 'cto@financefirst.com',
          phone: '+1 (555) 234-5678',
          company: 'FinanceFirst Bank',
          website: 'https://financefirst.com',
          industry: 'Finance',
          address: '456 Wall Street, New York, NY 10005',
          notes: 'Premier financial institution specializing in digital banking solutions and fintech innovation.',
          status: 'active',
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
          totalRevenue: 2800000,
          activeProjects: 2,
          completedProjects: 18,
          averageProjectValue: 155000,
          projects: [
            {
              id: '2',
              name: 'Neural Banking Application',
              status: 'in-progress',
              budget: 450000,
              progress: 85,
              created_at: '2024-01-01T00:00:00Z',
              updated_at: '2024-01-01T00:00:00Z'
            } as Project
          ]
        },
        {
          id: '3',
          name: 'Creative Studio Inc',
          email: 'creative@creativestudio.com',
          phone: '+1 (555) 345-6789',
          company: 'Creative Studio Inc',
          website: 'https://creativestudio.com',
          industry: 'Creative',
          address: '789 Design District, Los Angeles, CA 90210',
          notes: 'Award-winning creative agency specializing in brand identity and digital experiences.',
          status: 'active',
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
          totalRevenue: 680000,
          activeProjects: 1,
          completedProjects: 8,
          averageProjectValue: 75000,
          projects: [
            {
              id: '3',
              name: 'Quantum Brand Identity Suite',
              status: 'in-progress',
              budget: 85000,
              progress: 90,
              created_at: '2024-01-20T00:00:00Z',
              updated_at: '2024-01-20T00:00:00Z'
            } as Project
          ]
        },
        {
          id: '4',
          name: 'HealthTech Innovations',
          email: 'innovation@healthtech.com',
          phone: '+1 (555) 456-7890',
          company: 'HealthTech Innovations',
          website: 'https://healthtech.com',
          industry: 'Healthcare',
          address: '321 Medical Center Blvd, Boston, MA 02115',
          notes: 'Pioneering healthcare technology company focused on AI-driven medical solutions.',
          status: 'active',
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
          totalRevenue: 920000,
          activeProjects: 2,
          completedProjects: 6,
          averageProjectValue: 115000,
          projects: []
        },
        {
          id: '5',
          name: 'Green Energy Solutions',
          email: 'sustainability@greenenergy.com',
          phone: '+1 (555) 567-8901',
          company: 'Green Energy Solutions',
          website: 'https://greenenergy.com',
          industry: 'Energy',
          address: '654 Renewable Way, Austin, TX 78701',
          notes: 'Sustainable energy company developing next-generation renewable energy technologies.',
          status: 'active',
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
          totalRevenue: 450000,
          activeProjects: 1,
          completedProjects: 4,
          averageProjectValue: 90000,
          projects: []
        }
      ];

      setClients(demoClients);
    } catch (error) {
      console.error('Error loading data:', error);
      toast({
        title: "Error",
        description: "Failed to load client data",
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
      case 'prospect': return 'bg-blue-500';
      case 'lead': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getIndustryIcon = (industry: string) => {
    switch (industry.toLowerCase()) {
      case 'technology': return Cpu;
      case 'finance': return DollarSign;
      case 'creative': return Sparkles;
      case 'healthcare': return Shield;
      case 'energy': return Zap;
      default: return Building;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || client.status === statusFilter;
    const matchesIndustry = industryFilter === 'all' || client.industry === industryFilter;
    
    return matchesSearch && matchesStatus && matchesIndustry;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-gray-600">Loading clients...</div>
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
            Client Management
          </h2>
          <p className="text-gray-600 mt-2">Comprehensive client relationship management for Cardinal Consulting</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            <Filter className="mr-2 h-4 w-4" />
            Advanced Filter
          </Button>
          <Dialog open={isClientDialogOpen} onOpenChange={setIsClientDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="mr-2 h-4 w-4" />
                New Client
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New Client</DialogTitle>
                <DialogDescription>
                  Create a new client profile for Cardinal Consulting
                </DialogDescription>
              </DialogHeader>
              {/* Form content would go here */}
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsClientDialogOpen(false)}>
                  Cancel
                </Button>
                <Button>Create Client</Button>
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
                <p className="text-sm font-medium text-gray-600 truncate">Total Clients</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900 truncate">{clients.length}</p>
              </div>
              <div className="flex-shrink-0">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0 pr-4">
                <p className="text-sm font-medium text-gray-600 truncate">Active Clients</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900 truncate">
                  {clients.filter(c => c.status === 'active').length}
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
                  {formatCurrency(clients.reduce((sum, client) => sum + (client.totalRevenue || 0), 0))}
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
                <p className="text-sm font-medium text-gray-600 truncate">Avg Project Value</p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 break-words">
                  {formatCurrency(clients.reduce((sum, client) => sum + (client.averageProjectValue || 0), 0) / clients.length)}
                </p>
              </div>
              <div className="flex-shrink-0">
                <Award className="h-8 w-8 text-purple-600" />
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
            placeholder="Search clients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
            <SelectItem value="prospect">Prospect</SelectItem>
            <SelectItem value="lead">Lead</SelectItem>
          </SelectContent>
        </Select>
        <Select value={industryFilter} onValueChange={setIndustryFilter}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Industries</SelectItem>
            <SelectItem value="Technology">Technology</SelectItem>
            <SelectItem value="Finance">Finance</SelectItem>
            <SelectItem value="Creative">Creative</SelectItem>
            <SelectItem value="Healthcare">Healthcare</SelectItem>
            <SelectItem value="Energy">Energy</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredClients.map((client) => {
          const IndustryIcon = getIndustryIcon(client.industry);
          return (
            <Card key={client.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                        {getInitials(client.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg text-gray-900">{client.name}</CardTitle>
                      <CardDescription className="text-gray-600">{client.company}</CardDescription>
                    </div>
                  </div>
                  <Badge className={getStatusColor(client.status)}>
                    {client.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <IndustryIcon className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">{client.industry}</span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">{client.email}</span>
                  </div>
                  {client.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{client.phone}</span>
                    </div>
                  )}
                  {client.website && (
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{client.website}</span>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">{client.activeProjects || 0}</p>
                    <p className="text-xs text-gray-600">Active Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">{formatCurrency(client.totalRevenue || 0)}</p>
                    <p className="text-xs text-gray-600">Total Revenue</p>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setSelectedClient(client)}
                  >
                    <User className="mr-1 h-3 w-3" />
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

      {/* Client Details Dialog */}
      {selectedClient && (
        <Dialog open={!!selectedClient} onOpenChange={() => setSelectedClient(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold text-lg">
                    {getInitials(selectedClient.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <DialogTitle className="text-2xl text-gray-900">{selectedClient.name}</DialogTitle>
                  <DialogDescription className="text-gray-600">
                    {selectedClient.company} • {selectedClient.industry}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>
            
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="grid grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">Client Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <Badge className={getStatusColor(selectedClient.status)}>
                          {selectedClient.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Industry:</span>
                        <span className="text-gray-900">{selectedClient.industry}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Member Since:</span>
                        <span className="text-gray-900">{formatDate(selectedClient.created_at)}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">Financial Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Revenue:</span>
                        <span className="text-gray-900 font-semibold">{formatCurrency(selectedClient.totalRevenue || 0)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Active Projects:</span>
                        <span className="text-gray-900">{selectedClient.activeProjects || 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Completed Projects:</span>
                        <span className="text-gray-900">{selectedClient.completedProjects || 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Avg Project Value:</span>
                        <span className="text-gray-900">{formatCurrency(selectedClient.averageProjectValue || 0)}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {selectedClient.address && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">Address</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{selectedClient.address}</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="projects" className="space-y-4 mt-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="mr-2 h-4 w-4" />
                    New Project
                  </Button>
                </div>
                <div className="space-y-3">
                  {selectedClient.projects && selectedClient.projects.length > 0 ? (
                    selectedClient.projects.map((project) => (
                      <Card key={project.id}>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium text-gray-900">{project.name}</h4>
                              <p className="text-sm text-gray-600">Budget: {formatCurrency(project.budget || 0)}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-gray-300">
                                {project.status.replace('-', ' ')}
                              </Badge>
                              <span className="text-sm text-gray-900">{project.progress || 0}%</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No projects found for this client.</p>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="contact" className="space-y-4 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium text-gray-700">Email</Label>
                        <p className="text-gray-900">{selectedClient.email}</p>
                      </div>
                      {selectedClient.phone && (
                        <div>
                          <Label className="text-sm font-medium text-gray-700">Phone</Label>
                          <p className="text-gray-900">{selectedClient.phone}</p>
                        </div>
                      )}
                      {selectedClient.website && (
                        <div>
                          <Label className="text-sm font-medium text-gray-700">Website</Label>
                          <p className="text-gray-900">{selectedClient.website}</p>
                        </div>
                      )}
                      {selectedClient.company && (
                        <div>
                          <Label className="text-sm font-medium text-gray-700">Company</Label>
                          <p className="text-gray-900">{selectedClient.company}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notes" className="space-y-4 mt-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Notes</h3>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Note
                  </Button>
                </div>
                {selectedClient.notes ? (
                  <Card>
                    <CardContent className="p-4">
                      <p className="text-gray-600">{selectedClient.notes}</p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No notes available for this client.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ClientsTab;