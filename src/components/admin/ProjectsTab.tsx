import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Calendar, DollarSign, Plus, Search, Edit, Trash2, Eye, Crown, Star, Target, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Project {
  id: string;
  name: string;
  description: string | null;
  client_name: string;
  service_type: string;
  status: string;
  priority: string;
  start_date: string | null;
  end_date: string | null;
  deadline: string | null;
  budget: number | null;
  actual_cost: number;
  progress: number;
  team_lead: string | null;
  assigned_team: string[];
  tags: string[];
  created_at: string;
  updated_at: string;
}

const ProjectsTab = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectDialogOpen, setIsProjectDialogOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [deleteProject, setDeleteProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState<Partial<Project>>({
    name: '',
    client_name: '',
    service_type: 'web-development',
    status: 'new',
    priority: 'medium',
    progress: 0,
    actual_cost: 0,
    assigned_team: [],
    tags: []
  });
  const { toast } = useToast();

  useEffect(() => {
    loadProjects();
    
    // Set up realtime subscription
    const channel = supabase
      .channel('projects-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'projects'
        },
        () => {
          loadProjects();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to load projects",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCreateProject = async () => {
    try {
      if (!formData.name || !formData.client_name) {
        toast({
          title: "Error",
          description: "Please fill in required fields",
          variant: "destructive"
        });
        return;
      }

      const projectData = {
        name: formData.name,
        client_name: formData.client_name,
        description: formData.description || null,
        service_type: formData.service_type || 'web-development',
        status: formData.status || 'new',
        priority: formData.priority || 'medium',
        start_date: formData.start_date || null,
        end_date: formData.end_date || null,
        deadline: formData.deadline || null,
        budget: formData.budget || null,
        actual_cost: formData.actual_cost || 0,
        progress: formData.progress || 0,
        team_lead: formData.team_lead || null,
        assigned_team: formData.assigned_team || [],
        tags: formData.tags || []
      };

      const { error } = await supabase
        .from('projects')
        .insert([projectData]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Project created successfully"
      });
      
      setIsProjectDialogOpen(false);
      resetForm();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to create project",
        variant: "destructive"
      });
    }
  };

  const handleUpdateProject = async () => {
    try {
      if (!selectedProject || !formData.name || !formData.client_name) {
        toast({
          title: "Error",
          description: "Please fill in required fields",
          variant: "destructive"
        });
        return;
      }

      const { error } = await supabase
        .from('projects')
        .update(formData)
        .eq('id', selectedProject.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Project updated successfully"
      });
      
      setIsProjectDialogOpen(false);
      setIsEditMode(false);
      setSelectedProject(null);
      resetForm();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to update project",
        variant: "destructive"
      });
    }
  };

  const handleDeleteProject = async () => {
    try {
      if (!deleteProject) return;

      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', deleteProject.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Project deleted successfully"
      });
      
      setDeleteProject(null);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to delete project",
        variant: "destructive"
      });
    }
  };

  const openCreateDialog = () => {
    resetForm();
    setIsEditMode(false);
    setSelectedProject(null);
    setIsProjectDialogOpen(true);
  };

  const openEditDialog = (project: Project) => {
    setFormData(project);
    setSelectedProject(project);
    setIsEditMode(true);
    setIsProjectDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      client_name: '',
      service_type: 'web-development',
      status: 'new',
      priority: 'medium',
      progress: 0,
      actual_cost: 0,
      assigned_team: [],
      tags: []
    });
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

  const formatCurrency = (amount: number | null) => {
    if (!amount) return '$0.00';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Not set';
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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
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
          <h2 className="text-3xl font-bold text-gray-900">Project Management</h2>
          <p className="text-gray-600 mt-2">Manage your projects with precision</p>
        </div>
        <Button onClick={openCreateDialog} className="bg-emerald-600 hover:bg-emerald-700">
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
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
          <SelectTrigger className="w-40">
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
                    <CardTitle className="text-lg text-gray-900 line-clamp-1">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mt-1">
                      {project.client_name}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col gap-2 ml-2">
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
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                  {project.description || 'No description'}
                </p>
                
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
                  <Progress value={project.progress} className="h-2" />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  {project.deadline && (
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600 text-xs">{formatDate(project.deadline)}</span>
                    </div>
                  )}
                  {project.budget && (
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600 text-xs">{formatCurrency(project.budget)}</span>
                    </div>
                  )}
                </div>

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
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1"
                    onClick={() => openEditDialog(project)}
                  >
                    <Edit className="mr-1 h-3 w-3" />
                    Edit
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={() => setDeleteProject(project)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No projects found</p>
        </div>
      )}

      {/* Create/Edit Dialog */}
      <Dialog open={isProjectDialogOpen} onOpenChange={setIsProjectDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{isEditMode ? 'Edit Project' : 'Create New Project'}</DialogTitle>
            <DialogDescription>
              {isEditMode ? 'Update project details' : 'Add a new project to your portfolio'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Project Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter project name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client_name">Client Name *</Label>
                <Input
                  id="client_name"
                  value={formData.client_name}
                  onChange={(e) => setFormData({...formData, client_name: e.target.value})}
                  placeholder="Enter client name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description || ''}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Project description"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="service_type">Service Type</Label>
                <Select
                  value={formData.service_type}
                  onValueChange={(value) => setFormData({...formData, service_type: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="mobile-applications">Mobile Applications</SelectItem>
                    <SelectItem value="brand-identity">Brand Identity</SelectItem>
                    <SelectItem value="digital-campaigns">Digital Campaigns</SelectItem>
                    <SelectItem value="seo-insights">SEO Insights</SelectItem>
                    <SelectItem value="experience-optimization">Experience Optimization</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) => setFormData({...formData, status: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="in-review">In Review</SelectItem>
                    <SelectItem value="quoted">Quoted</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select
                  value={formData.priority}
                  onValueChange={(value) => setFormData({...formData, priority: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="progress">Progress (%)</Label>
                <Input
                  id="progress"
                  type="number"
                  min="0"
                  max="100"
                  value={formData.progress}
                  onChange={(e) => setFormData({...formData, progress: parseInt(e.target.value) || 0})}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="budget">Budget</Label>
                <Input
                  id="budget"
                  type="number"
                  value={formData.budget || ''}
                  onChange={(e) => setFormData({...formData, budget: parseFloat(e.target.value) || null})}
                  placeholder="0.00"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="actual_cost">Actual Cost</Label>
                <Input
                  id="actual_cost"
                  type="number"
                  value={formData.actual_cost}
                  onChange={(e) => setFormData({...formData, actual_cost: parseFloat(e.target.value) || 0})}
                  placeholder="0.00"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="start_date">Start Date</Label>
                <Input
                  id="start_date"
                  type="date"
                  value={formData.start_date || ''}
                  onChange={(e) => setFormData({...formData, start_date: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="end_date">End Date</Label>
                <Input
                  id="end_date"
                  type="date"
                  value={formData.end_date || ''}
                  onChange={(e) => setFormData({...formData, end_date: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deadline">Deadline</Label>
                <Input
                  id="deadline"
                  type="date"
                  value={formData.deadline || ''}
                  onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="team_lead">Team Lead</Label>
              <Input
                id="team_lead"
                value={formData.team_lead || ''}
                onChange={(e) => setFormData({...formData, team_lead: e.target.value})}
                placeholder="Enter team lead name"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsProjectDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={isEditMode ? handleUpdateProject : handleCreateProject}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              {isEditMode ? 'Update Project' : 'Create Project'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Project Dialog */}
      {selectedProject && !isEditMode && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl text-gray-900">{selectedProject.name}</DialogTitle>
              <DialogDescription className="text-gray-600">
                {selectedProject.client_name} • {selectedProject.service_type.replace('-', ' ')}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6 mt-6">
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
                    <div className="flex justify-between">
                      <span className="text-gray-600">Start Date:</span>
                      <span className="text-gray-900">{formatDate(selectedProject.start_date)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">End Date:</span>
                      <span className="text-gray-900">{formatDate(selectedProject.end_date)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Deadline:</span>
                      <span className="text-gray-900">{formatDate(selectedProject.deadline)}</span>
                    </div>
                    {selectedProject.team_lead && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Team Lead:</span>
                        <span className="text-gray-900">{selectedProject.team_lead}</span>
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
                    <p className="text-gray-700">{selectedProject.description}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteProject} onOpenChange={() => setDeleteProject(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the project "{deleteProject?.name}". This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteProject} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ProjectsTab;
