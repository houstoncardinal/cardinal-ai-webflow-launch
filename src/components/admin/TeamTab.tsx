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
import { Progress } from '@/components/ui/progress';
import { Calendar, User, Mail, Phone, Building, Globe, MapPin, Plus, Search, Edit, Eye, MessageSquare, FileText, DollarSign, Users, Clock, Star, Award, Trophy, Gem, Diamond, Sparkles, Rocket, Brain, Cpu, Shield, Database, Network, Activity, TrendingUp, Zap, Crown, Target, CheckCircle, AlertCircle, Briefcase, GraduationCap, Languages, Code, Palette, Server, BarChart3, Smartphone, Cloud, Globe as GlobeIcon, Shield as ShieldIcon, Database as DatabaseIcon, Cpu as CpuIcon, Brain as BrainIcon, Network as NetworkIcon, Activity as ActivityIcon, TrendingUp as TrendingUpIcon, Zap as ZapIcon, Crown as CrownIcon, Target as TargetIcon, CheckCircle as CheckCircleIcon, AlertCircle as AlertCircleIcon, Briefcase as BriefcaseIcon, GraduationCap as GraduationCapIcon, Languages as LanguagesIcon, Code as CodeIcon, Palette as PaletteIcon, Server as ServerIcon, BarChart3 as BarChart3Icon, Smartphone as SmartphoneIcon } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  department: string;
  role: 'admin' | 'manager' | 'developer' | 'designer' | 'analyst' | 'consultant';
  status: 'active' | 'inactive' | 'on-leave';
  avatar: string;
  bio: string;
  skills: string[];
  experience_years: number;
  hourly_rate: number;
  projects_count: number;
  completed_projects: number;
  performance_rating: number;
  availability: number;
  location: string;
  timezone: string;
  joined_date: string;
  last_active: string;
  certifications: string[];
  education: string;
  languages: string[];
  specializations: string[];
  achievements: Achievement[];
  current_projects: string[];
  workload: WorkloadStats;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'award' | 'certification' | 'project' | 'innovation';
  icon: any;
}

interface WorkloadStats {
  current_hours: number;
  max_hours: number;
  utilization_rate: number;
  upcoming_deadlines: number;
  overdue_tasks: number;
}

const TeamTab = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState<string>('all');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isMemberDialogOpen, setIsMemberDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      
      // Luxury demo data for Cardinal Consulting team
      const demoTeamMembers: TeamMember[] = [
        {
          id: '1',
          name: 'Dr. Sarah Chen',
          email: 'sarah.chen@cardinalhtx.com',
          phone: '+1 (555) 123-4567',
          position: 'Chief Technology Officer',
          department: 'Technology',
          role: 'admin',
          status: 'active',
          avatar: '/avatars/sarah-chen.jpg',
          bio: 'Quantum computing expert with 15+ years in AI/ML and blockchain technologies. Led 50+ enterprise digital transformations.',
          skills: ['Quantum Computing', 'AI/ML', 'Blockchain', 'Cloud Architecture', 'DevOps'],
          experience_years: 15,
          hourly_rate: 250,
          projects_count: 12,
          completed_projects: 45,
          performance_rating: 4.9,
          availability: 95,
          location: 'San Francisco, CA',
          timezone: 'PST',
          joined_date: '2020-03-15',
          last_active: '2024-01-15T10:30:00Z',
          certifications: ['AWS Solutions Architect', 'Google Cloud Professional', 'Certified Scrum Master'],
          education: 'PhD Computer Science, Stanford University',
          languages: ['English', 'Mandarin', 'Spanish'],
          specializations: ['Enterprise Architecture', 'Digital Transformation', 'AI Strategy'],
          achievements: [
            { id: '1', title: 'Innovation Award 2023', description: 'Led breakthrough quantum computing implementation', date: '2023-12-01', type: 'award', icon: Trophy },
            { id: '2', title: 'AWS Solutions Architect', description: 'Advanced cloud architecture certification', date: '2023-06-15', type: 'certification', icon: Shield },
            { id: '3', title: 'TechCorp Transformation', description: 'Successfully delivered $2M digital transformation', date: '2023-09-30', type: 'project', icon: Rocket }
          ],
          current_projects: ['Quantum E-commerce Platform', 'Neural Banking Application'],
          workload: {
            current_hours: 35,
            max_hours: 40,
            utilization_rate: 87.5,
            upcoming_deadlines: 3,
            overdue_tasks: 0
          }
        },
        {
          id: '2',
          name: 'Alex Rodriguez',
          email: 'alex.rodriguez@cardinalhtx.com',
          phone: '+1 (555) 234-5678',
          position: 'Senior Full-Stack Developer',
          department: 'Development',
          role: 'developer',
          status: 'active',
          avatar: '/avatars/alex-rodriguez.jpg',
          bio: 'Full-stack development specialist with expertise in React, Node.js, and cloud-native applications. Passionate about clean code and scalable architecture.',
          skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'Kubernetes'],
          experience_years: 8,
          hourly_rate: 120,
          projects_count: 8,
          completed_projects: 32,
          performance_rating: 4.8,
          availability: 100,
          location: 'Austin, TX',
          timezone: 'CST',
          joined_date: '2021-06-01',
          last_active: '2024-01-15T14:20:00Z',
          certifications: ['AWS Developer Associate', 'Docker Certified Associate'],
          education: 'BS Computer Science, University of Texas',
          languages: ['English', 'Spanish'],
          specializations: ['Frontend Development', 'Backend Architecture', 'DevOps'],
          achievements: [
            { id: '4', title: 'Code Excellence Award', description: 'Recognized for outstanding code quality and architecture', date: '2023-11-15', type: 'award', icon: Award },
            { id: '5', title: 'AWS Developer Associate', description: 'Cloud development certification', date: '2023-04-20', type: 'certification', icon: Cloud }
          ],
          current_projects: ['Quantum E-commerce Platform'],
          workload: {
            current_hours: 38,
            max_hours: 40,
            utilization_rate: 95,
            upcoming_deadlines: 2,
            overdue_tasks: 0
          }
        },
        {
          id: '3',
          name: 'Emma Thompson',
          email: 'emma.thompson@cardinalhtx.com',
          phone: '+1 (555) 345-6789',
          position: 'UX/UI Design Lead',
          department: 'Design',
          role: 'designer',
          status: 'active',
          avatar: '/avatars/emma-thompson.jpg',
          bio: 'Award-winning designer specializing in user experience and interface design. Expert in design systems and accessibility.',
          skills: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping', 'Design Systems'],
          experience_years: 10,
          hourly_rate: 140,
          projects_count: 6,
          completed_projects: 28,
          performance_rating: 4.9,
          availability: 90,
          location: 'New York, NY',
          timezone: 'EST',
          joined_date: '2020-09-01',
          last_active: '2024-01-15T16:45:00Z',
          certifications: ['Google UX Design', 'Accessibility Specialist'],
          education: 'MFA Design, Parsons School of Design',
          languages: ['English', 'French'],
          specializations: ['User Experience', 'Interface Design', 'Design Systems'],
          achievements: [
            { id: '6', title: 'Design Excellence Award', description: 'Best UX design for enterprise applications', date: '2023-10-01', type: 'award', icon: Trophy },
            { id: '7', title: 'Google UX Design', description: 'Professional UX design certification', date: '2023-03-15', type: 'certification', icon: Palette }
          ],
          current_projects: ['Quantum E-commerce Platform', 'Neural Banking Application'],
          workload: {
            current_hours: 32,
            max_hours: 40,
            utilization_rate: 80,
            upcoming_deadlines: 4,
            overdue_tasks: 1
          }
        },
        {
          id: '4',
          name: 'Marcus Kim',
          email: 'marcus.kim@cardinalhtx.com',
          phone: '+1 (555) 456-7890',
          position: 'Data Science Lead',
          department: 'Analytics',
          role: 'analyst',
          status: 'active',
          avatar: '/avatars/marcus-kim.jpg',
          bio: 'Data science expert with deep expertise in machine learning, predictive analytics, and business intelligence.',
          skills: ['Python', 'R', 'TensorFlow', 'PyTorch', 'SQL', 'Tableau'],
          experience_years: 12,
          hourly_rate: 180,
          projects_count: 5,
          completed_projects: 22,
          performance_rating: 4.7,
          availability: 85,
          location: 'Seattle, WA',
          timezone: 'PST',
          joined_date: '2021-01-15',
          last_active: '2024-01-15T12:15:00Z',
          certifications: ['Google Data Analytics', 'AWS Machine Learning'],
          education: 'PhD Statistics, University of Washington',
          languages: ['English', 'Korean'],
          specializations: ['Machine Learning', 'Predictive Analytics', 'Business Intelligence'],
          achievements: [
            { id: '8', title: 'Data Science Innovation', description: 'Developed breakthrough ML model for fraud detection', date: '2023-08-20', type: 'innovation', icon: Brain },
            { id: '9', title: 'Google Data Analytics', description: 'Professional data analytics certification', date: '2023-02-10', type: 'certification', icon: BarChart3 }
          ],
          current_projects: ['Neural Banking Application'],
          workload: {
            current_hours: 36,
            max_hours: 40,
            utilization_rate: 90,
            upcoming_deadlines: 1,
            overdue_tasks: 0
          }
        },
        {
          id: '5',
          name: 'Lisa Park',
          email: 'lisa.park@cardinalhtx.com',
          phone: '+1 (555) 567-8901',
          position: 'Creative Director',
          department: 'Creative',
          role: 'designer',
          status: 'active',
          avatar: '/avatars/lisa-park.jpg',
          bio: 'Creative visionary with 15+ years in brand strategy and visual design. Expert in creating memorable brand experiences.',
          skills: ['Brand Strategy', 'Visual Design', 'Creative Direction', 'Adobe Creative Suite', '3D Design'],
          experience_years: 15,
          hourly_rate: 160,
          projects_count: 4,
          completed_projects: 18,
          performance_rating: 4.8,
          availability: 75,
          location: 'Los Angeles, CA',
          timezone: 'PST',
          joined_date: '2022-03-01',
          last_active: '2024-01-15T15:30:00Z',
          certifications: ['Adobe Creative Suite Expert', 'Brand Strategy Professional'],
          education: 'BFA Graphic Design, ArtCenter College of Design',
          languages: ['English', 'Korean'],
          specializations: ['Brand Strategy', 'Visual Design', 'Creative Direction'],
          achievements: [
            { id: '10', title: 'Creative Excellence Award', description: 'Outstanding creative direction for major brands', date: '2023-12-15', type: 'award', icon: Award },
            { id: '11', title: 'Adobe Creative Suite Expert', description: 'Master certification in Adobe tools', date: '2023-07-01', type: 'certification', icon: Palette }
          ],
          current_projects: ['Quantum Brand Identity Suite'],
          workload: {
            current_hours: 30,
            max_hours: 40,
            utilization_rate: 75,
            upcoming_deadlines: 2,
            overdue_tasks: 0
          }
        }
      ];

      setTeamMembers(demoTeamMembers);
    } catch (error) {
      console.error('Error loading data:', error);
      toast({
        title: "Error",
        description: "Failed to load team data",
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
      case 'on-leave': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin': return Crown;
      case 'manager': return Users;
      case 'developer': return Code;
      case 'designer': return Palette;
      case 'analyst': return BarChart3;
      case 'consultant': return Briefcase;
      default: return User;
    }
  };

  const getDepartmentIcon = (department: string) => {
    switch (department.toLowerCase()) {
      case 'technology': return Cpu;
      case 'development': return Code;
      case 'design': return Palette;
      case 'analytics': return BarChart3;
      case 'creative': return Sparkles;
      case 'consulting': return Briefcase;
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
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = departmentFilter === 'all' || member.department === departmentFilter;
    const matchesRole = roleFilter === 'all' || member.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || member.status === statusFilter;
    
    return matchesSearch && matchesDepartment && matchesRole && matchesStatus;
  });

  const departments = Array.from(new Set(teamMembers.map(member => member.department)));
  const roles = Array.from(new Set(teamMembers.map(member => member.role)));

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <div className="text-gray-600">Loading elite team...</div>
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
            Elite Team Management
          </h2>
          <p className="text-gray-600 mt-2">Orchestrating Cardinal Consulting's world-class talent</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            <Users className="mr-2 h-4 w-4" />
            Team Analytics
          </Button>
          <Dialog open={isMemberDialogOpen} onOpenChange={setIsMemberDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="mr-2 h-4 w-4" />
                Add Team Member
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add Elite Team Member</DialogTitle>
                <DialogDescription>
                  Welcome a new talent to the Cardinal Consulting family
                </DialogDescription>
              </DialogHeader>
              {/* Form content would go here */}
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsMemberDialogOpen(false)}>
                  Cancel
                </Button>
                <Button>Add Member</Button>
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
            placeholder="Search elite team members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Departments</SelectItem>
            {departments.map((department) => (
              <SelectItem key={department} value={department}>
                {department}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={roleFilter} onValueChange={setRoleFilter}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            {roles.map((role) => (
              <SelectItem key={role} value={role}>
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </SelectItem>
            ))}
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
            <SelectItem value="on-leave">On Leave</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="group relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent cursor-pointer hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          <CardContent className="p-6 relative">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">Total Team</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">{teamMembers.length}</p>
              </div>
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Users className="h-5 w-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="group relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent cursor-pointer hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          <CardContent className="p-6 relative">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">Active Members</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  {teamMembers.filter(m => m.status === 'active').length}
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Activity className="h-5 w-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="group relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent cursor-pointer hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          <CardContent className="p-6 relative">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">Avg Performance</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  {(teamMembers.reduce((sum, m) => sum + m.performance_rating, 0) / teamMembers.length).toFixed(1)}/5.0
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Star className="h-5 w-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="group relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent cursor-pointer hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          <CardContent className="p-6 relative">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">Total Projects</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  {teamMembers.reduce((sum, m) => sum + m.projects_count, 0)}
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Target className="h-5 w-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredMembers.map((member) => {
          const RoleIcon = getRoleIcon(member.role);
          const DepartmentIcon = getDepartmentIcon(member.department);
          return (
            <Card key={member.id} className="hover:shadow-xl transition-all duration-300 border-gray-100 group">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16 border-2 border-emerald-200">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-lg font-bold">
                        {getInitials(member.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg text-gray-900 group-hover:text-emerald-700 transition-colors">
                        {member.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600 mt-1">
                        {member.position}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                      <RoleIcon className="h-4 w-4 text-gray-500" />
                      <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                        {member.role}
                      </Badge>
                    </div>
                    <Badge className={getStatusColor(member.status)}>
                      {member.status.replace('-', ' ')}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <DepartmentIcon className="h-4 w-4 text-purple-400" />
                  <span className="text-purple-300">{member.department}</span>
                </div>
                
                <p className="text-sm text-purple-300 leading-relaxed line-clamp-2">{member.bio}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-purple-400" />
                    <span className="text-purple-300">{member.performance_rating}/5.0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-purple-400" />
                    <span className="text-purple-300">{member.projects_count} projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-purple-400" />
                    <span className="text-purple-300">{formatCurrency(member.hourly_rate)}/hr</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-purple-400" />
                    <span className="text-purple-300">{member.availability}% available</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-300">Workload</span>
                    <span className="text-white">{member.workload.utilization_rate}%</span>
                  </div>
                  <Progress value={member.workload.utilization_rate} className="h-2 bg-purple-900/50">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-300" style={{ width: `${member.workload.utilization_rate}%` }}></div>
                  </Progress>
                </div>

                <div className="flex flex-wrap gap-1">
                  {member.skills.slice(0, 3).map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-purple-900/50 text-purple-300 border-purple-700/50">
                      {skill}
                    </Badge>
                  ))}
                  {member.skills.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-purple-900/50 text-purple-300 border-purple-700/50">
                      +{member.skills.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-white"
                    onClick={() => setSelectedMember(member)}
                  >
                    <Eye className="mr-1 h-3 w-3" />
                    View
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    <MessageSquare className="mr-1 h-3 w-3" />
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Team Member Details Dialog */}
      {selectedMember && (
        <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-black/95 backdrop-blur-xl border border-purple-800/50">
            <DialogHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20 border-2 border-purple-600/50">
                  <AvatarImage src={selectedMember.avatar} />
                  <AvatarFallback className="bg-gradient-to-br from-purple-600 to-blue-600 text-white text-xl font-bold">
                    {getInitials(selectedMember.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <DialogTitle className="text-2xl text-white">{selectedMember.name}</DialogTitle>
                  <DialogDescription className="text-purple-300">
                    {selectedMember.position} • {selectedMember.department}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>
            
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-5 bg-black/40 backdrop-blur-xl border border-purple-800/50">
                <TabsTrigger value="overview" className="text-purple-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white">Overview</TabsTrigger>
                <TabsTrigger value="skills" className="text-purple-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white">Skills</TabsTrigger>
                <TabsTrigger value="achievements" className="text-purple-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white">Achievements</TabsTrigger>
                <TabsTrigger value="projects" className="text-purple-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white">Projects</TabsTrigger>
                <TabsTrigger value="workload" className="text-purple-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white">Workload</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="grid grid-cols-2 gap-6">
                  <Card className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-white">Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-purple-300">Email:</span>
                        <span className="text-white">{selectedMember.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-300">Phone:</span>
                        <span className="text-white">{selectedMember.phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-300">Location:</span>
                        <span className="text-white">{selectedMember.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-300">Timezone:</span>
                        <span className="text-white">{selectedMember.timezone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-300">Joined:</span>
                        <span className="text-white">{formatDate(selectedMember.joined_date)}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-white">Performance Metrics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-purple-300">Performance Rating:</span>
                        <span className="text-white">{selectedMember.performance_rating}/5.0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-300">Experience:</span>
                        <span className="text-white">{selectedMember.experience_years} years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-300">Hourly Rate:</span>
                        <span className="text-white">{formatCurrency(selectedMember.hourly_rate)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-300">Availability:</span>
                        <span className="text-white">{selectedMember.availability}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-300">Projects Completed:</span>
                        <span className="text-white">{selectedMember.completed_projects}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Bio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-300">{selectedMember.bio}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="skills" className="space-y-4 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-white">Technical Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="bg-purple-900/50 text-purple-300 border-purple-700/50">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-white">Specializations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.specializations.map((spec, index) => (
                          <Badge key={index} variant="secondary" className="bg-blue-900/50 text-blue-300 border-blue-700/50">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-white">Certifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {selectedMember.certifications.map((cert, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-purple-400" />
                            <span className="text-purple-300">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-white">Languages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.languages.map((lang, index) => (
                          <Badge key={index} variant="secondary" className="bg-green-900/50 text-green-300 border-green-700/50">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-4 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedMember.achievements.map((achievement) => {
                    const AchievementIcon = achievement.icon;
                    return (
                      <Card key={achievement.id} className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-purple-900/50 rounded-lg">
                              <AchievementIcon className="h-5 w-5 text-purple-400" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-white">{achievement.title}</h4>
                              <p className="text-sm text-purple-300 mt-1">{achievement.description}</p>
                              <p className="text-xs text-purple-400 mt-2">{formatDate(achievement.date)}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="projects" className="space-y-4 mt-6">
                <div className="space-y-3">
                  {selectedMember.current_projects.map((project, index) => (
                    <Card key={index} className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-white">{project}</h4>
                            <p className="text-sm text-purple-300">Active Project</p>
                          </div>
                          <Badge className="bg-green-900/50 text-green-300 border-green-700/50">
                            Active
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="workload" className="space-y-4 mt-6">
                <div className="grid grid-cols-2 gap-6">
                  <Card className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-white">Current Workload</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-purple-300">Utilization Rate</span>
                          <span className="text-white">{selectedMember.workload.utilization_rate}%</span>
                        </div>
                        <Progress value={selectedMember.workload.utilization_rate} className="h-2 bg-purple-900/50">
                          <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" style={{ width: `${selectedMember.workload.utilization_rate}%` }}></div>
                        </Progress>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-purple-300">Current Hours</p>
                          <p className="text-white font-medium">{selectedMember.workload.current_hours}/{selectedMember.workload.max_hours}h</p>
                        </div>
                        <div>
                          <p className="text-purple-300">Upcoming Deadlines</p>
                          <p className="text-white font-medium">{selectedMember.workload.upcoming_deadlines}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-white">Performance Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">{selectedMember.performance_rating}/5.0</div>
                        <div className="text-sm text-purple-300">Performance Rating</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-purple-300">Projects</p>
                          <p className="text-white font-medium">{selectedMember.projects_count}</p>
                        </div>
                        <div>
                          <p className="text-purple-300">Completed</p>
                          <p className="text-white font-medium">{selectedMember.completed_projects}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default TeamTab;