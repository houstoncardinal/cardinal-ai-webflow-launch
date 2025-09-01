import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, User, DollarSign, Clock, Plus, Filter, Search, Edit, Trash2, FileText, Upload, Download, Eye, CalendarDays, Users, Tag, Target, CheckCircle, AlertCircle, Clock as ClockIcon, FileUp, MessageSquare, BarChart3, Zap, Crown, Star, Award, Trophy, Gem, Diamond, Sparkles, Rocket, Brain, Cpu, Shield, Database, Globe, Network, Activity, TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SimpleProject {
  id: string;
  name: string;
  description: string;
  client_name: string;
  service_type: string;
  status: string;
  priority: string;
  start_date: string;
  end_date: string;
  deadline: string;
  budget: number;
  actual_cost: number;
  progress: number;
  team_lead: string;
  assigned_team: string[];
  tags: string[];
  created_at: string;
  updated_at: string;
}

const ProjectsTab = () => {
  const [projects, setProjects] = useState<SimpleProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<SimpleProject | null>(null);
  const [isProjectDialogOpen, setIsProjectDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      
      // Demo data for luxury projects
      const demoProjects: SimpleProject[] = [
        {
          id: '1',
          name: 'Quantum E-commerce Platform',
          description: 'Next-generation e-commerce platform with AI-powered recommendations, blockchain payments, and immersive AR shopping experiences.',
          client_name: 'TechCorp Solutions',
          service_type: 'web-development',
          status: 'in-progress',
          priority: 'critical',
          start_date: '2024-01-15',
          end_date: '2024-06-30',
          deadline: '2024-06-30',
          budget: 250000,
          actual_cost: 125000,
          progress: 65,
          team_lead: 'Dr. Sarah Chen',
          assigned_team: ['Alex Rodriguez', 'Emma Thompson', 'Marcus Kim', 'Lisa Park'],
          tags: ['AI/ML', 'Blockchain', 'AR/VR', 'Enterprise'],
          created_at: '2024-01-15T00:00:00Z',
          updated_at: '2024-01-15T00:00:00Z'
        },
        {
          id: '2',
          name: 'Neural Banking Application',
          description: 'Revolutionary mobile banking app with neural network security, biometric authentication, and predictive financial insights.',
          client_name: 'FinanceFirst Bank',
          service_type: 'mobile-applications',
          status: 'in-progress',
          priority: 'critical',
          start_date: '2024-01-01',
          end_date: '2024-05-15',
          deadline: '2024-05-15',
          budget: 450000,
          actual_cost: 280000,
          progress: 85,
          team_lead: 'Dr. Michael Chang',
          assigned_team: ['Sophie Williams', 'David Kim', 'Rachel Green'],
          tags: ['Neural Networks', 'Biometrics', 'FinTech', 'Security'],
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z'
        },
        {
          id: '3',
          name: 'Quantum Brand Identity Suite',
          description: 'Comprehensive brand identity system with quantum-inspired design principles, dynamic logos, and immersive brand experiences.',
          client_name: 'Creative Studio Inc',
          service_type: 'brand-identity',
          status: 'in-progress',
          priority: 'high',
          start_date: '2024-01-20',
          end_date: '2024-03-20',
          deadline: '2024-03-20',
          budget: 85000,
          actual_cost: 52000,
          progress: 90,
          team_lead: 'Creative Director Lisa Park',
          assigned_team: ['Tom Wilson', 'Anna Rodriguez'],
          tags: ['Quantum Design', 'Dynamic Branding', 'Immersive', 'Creative'],
          created_at: '2024-01-20T00:00:00Z',
          updated_at: '2024-01-20T00:00:00Z'
        }
      ];

      setProjects(demoProjects);
    } catch (error) {
      console.error('Error loading data:', error);
      toast({
        title: "Error",
        description: "Failed to load project data",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500';
      case 'in-review': return 'bg-yellow-500';
      case 'quoted': return 'bg-purple-500';
      case 'approved': return 'bg-indigo-500';
      case 'in-progress': return 'bg-green-500';
      case 'completed': return 'bg-emerald-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'critical': return Crown;
      case 'high': return Star;
      case 'medium': return Target;
      case 'low': return CheckCircle;
      default: return Target;
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

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || project.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-gray-600">Loading projects...</div>
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
            Project Management
          </h2>
          <p className="text-gray-600 mt-2">Advanced project orchestration for Cardinal Consulting</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            <Filter className="mr-2 h-4 w-4" />
            Advanced Filter
          </Button>
          <Dialog open={isProjectDialogOpen} onOpenChange={setIsProjectDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Project</DialogTitle>
                <DialogDescription>
                  Initialize a new advanced project for Cardinal Consulting
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsProjectDialogOpen(false)}>
                  Cancel
                </Button>
                <Button>Create Project</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search projects..."
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
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="in-review">In Review</SelectItem>
            <SelectItem value="quoted">Quoted</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
        <Select value={priorityFilter} onValueChange={setPriorityFilter}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priority</SelectItem>
            <SelectItem value="low">Low</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="critical">Critical</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          const PriorityIcon = getPriorityIcon(project.priority);
          return (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-lg text-gray-900">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mt-1">
                      {project.client_name}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                      <PriorityIcon className="h-4 w-4 text-gray-500" />
                      <Badge className={getPriorityColor(project.priority)}>
                        {project.priority}
                      </Badge>
                    </div>
                    <Badge className={getStatusColor(project.status)} variant="secondary">
                      {project.status.replace('-', ' ')}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
                
                <div className="flex items-center gap-2 text-sm">
                  <Badge variant="outline" className="border-gray-300 text-gray-700">
                    {project.service_type.replace('-', ' ')}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="text-gray-900 font-medium">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2">
                    <div className="h-full bg-blue-600 rounded-full transition-all duration-300" style={{ width: `${project.progress}%` }}></div>
                  </Progress>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  {project.deadline && (
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{formatDate(project.deadline)}</span>
                    </div>
                  )}
                  {project.budget && (
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{formatCurrency(project.budget)}</span>
                    </div>
                  )}
                </div>

                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-700 border-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                <div className="flex gap-2 pt-4">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setSelectedProject(project)}
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

      {/* Project Details Dialog */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl text-gray-900">{selectedProject.name}</DialogTitle>
              <DialogDescription className="text-gray-600">
                {selectedProject.client_name} • {selectedProject.service_type.replace('-', ' ')}
              </DialogDescription>
            </DialogHeader>
            
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="grid grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">Project Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <Badge className={getStatusColor(selectedProject.status)}>
                          {selectedProject.status.replace('-', ' ')}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Priority:</span>
                        <Badge className={getPriorityColor(selectedProject.priority)}>
                          {selectedProject.priority}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Progress:</span>
                        <span className="text-gray-900">{selectedProject.progress}%</span>
                      </div>
                      {selectedProject.budget && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Budget:</span>
                          <span className="text-gray-900">{formatCurrency(selectedProject.budget)}</span>
                        </div>
                      )}
                      {selectedProject.actual_cost > 0 && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Actual Cost:</span>
                          <span className="text-gray-900">{formatCurrency(selectedProject.actual_cost)}</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">Timeline</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {selectedProject.start_date && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Start Date:</span>
                          <span className="text-gray-900">{formatDate(selectedProject.start_date)}</span>
                        </div>
                      )}
                      {selectedProject.deadline && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Deadline:</span>
                          <span className="text-gray-900">{formatDate(selectedProject.deadline)}</span>
                        </div>
                      )}
                      {selectedProject.end_date && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">End Date:</span>
                          <span className="text-gray-900">{formatDate(selectedProject.end_date)}</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {selectedProject.description && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">Description</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{selectedProject.description}</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="team" className="space-y-4 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900">Team Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Team Lead</h4>
                      <p className="text-gray-600">{selectedProject.team_lead}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Team Members</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.assigned_team.map((member, index) => (
                          <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700 border-gray-300">
                            {member}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="timeline" className="space-y-4 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900">Project Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div>
                          <p className="font-medium text-gray-900">Project Started</p>
                          <p className="text-sm text-gray-600">{formatDate(selectedProject.start_date)}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <div>
                          <p className="font-medium text-gray-900">Current Progress</p>
                          <p className="text-sm text-gray-600">{selectedProject.progress}% Complete</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <div>
                          <p className="font-medium text-gray-900">Project Deadline</p>
                          <p className="text-sm text-gray-600">{formatDate(selectedProject.deadline)}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ProjectsTab;