import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut, Mail, User, Phone, Building, MessageCircle, Calendar, DollarSign, BarChart3, Users, FolderOpen, Briefcase, UserCheck, CreditCard, Server, TrendingUp, X, Settings, Activity, Zap, Globe, Shield, Database, Cpu, Brain, Network, Target, Rocket, Crown, Star, Award, Trophy, Gem, Diamond, Sparkles } from 'lucide-react';
import DashboardOverview from '@/components/admin/DashboardOverview';
import ProjectsTab from '@/components/admin/ProjectsTab';
import ClientsTab from '@/components/admin/ClientsTab';
import ServicesTab from '@/components/admin/ServicesTab';
import TeamTab from '@/components/admin/TeamTab';
import FinanceTab from '@/components/admin/FinanceTab';
import HostingTab from '@/components/admin/HostingTab';
import SEO from '@/components/SEO';

interface ContactSubmission {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  message: string;
  created_at: string;
  status: string;
}

interface ProjectEvaluation {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  created_at: string;
  status: string;
  estimated_budget: string;
  project_description: string;
  timeline: string;
}

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [projectEvaluations, setProjectEvaluations] = useState<ProjectEvaluation[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    // BYPASS: Always allow admin access for development
    setIsAdmin(true);
    setUser({ id: 'admin-bypass', email: 'admin@cardinalconsulting.com' } as any);
    await loadData();
    setLoading(false);
  };

  const loadData = async () => {
    // Load contact submissions
    const { data: contacts } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (contacts) {
      setContactSubmissions(contacts);
    }

    // Load project evaluations
    const { data: projects } = await supabase
      .from('project_evaluations')
      .select('*')
      .order('created_at', { ascending: false });

    if (projects) {
      setProjectEvaluations(projects);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500';
      case 'in-review': return 'bg-yellow-500';
      case 'completed': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-gray-700 text-xl font-medium">Initializing Cardinal Dashboard</div>
          <div className="text-gray-500 text-sm mt-2">Loading enterprise systems...</div>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Admin Dashboard - Cardinal Consulting"
        description="Cardinal Consulting enterprise admin dashboard for managing projects, clients, services, and business operations."
        keywords="admin dashboard, project management, client management, business operations"
        url="/admin"
        type="website"
      />
      {/* Header Bar */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Cardinal Consulting
                </h1>
                <p className="text-xs text-gray-500 font-medium">Enterprise Dashboard</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 ml-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-600 font-medium">System Online</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Admin User</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4" />
                <span>Live</span>
              </div>
            </div>
            <Button 
              variant="outline" 
              onClick={handleSignOut}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Exit Dashboard
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-8 bg-white border border-gray-200 rounded-lg p-1 mb-8 shadow-sm">
            <TabsTrigger 
              value="overview" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition-colors"
            >
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger 
              value="projects" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition-colors"
            >
              <FolderOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Projects</span>
            </TabsTrigger>
            <TabsTrigger 
              value="clients" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition-colors"
            >
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Clients</span>
            </TabsTrigger>
            <TabsTrigger 
              value="services" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition-colors"
            >
              <Briefcase className="h-4 w-4" />
              <span className="hidden sm:inline">Services</span>
            </TabsTrigger>
            <TabsTrigger 
              value="team" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition-colors"
            >
              <UserCheck className="h-4 w-4" />
              <span className="hidden sm:inline">Team</span>
            </TabsTrigger>
            <TabsTrigger 
              value="finance" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition-colors"
            >
              <CreditCard className="h-4 w-4" />
              <span className="hidden sm:inline">Finance</span>
            </TabsTrigger>
            <TabsTrigger 
              value="hosting" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition-colors"
            >
              <Server className="h-4 w-4" />
              <span className="hidden sm:inline">Hosting</span>
            </TabsTrigger>
            <TabsTrigger 
              value="marketing" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition-colors"
            >
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">Marketing</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <DashboardOverview />
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <ProjectsTab />
          </TabsContent>

          <TabsContent value="clients" className="space-y-6">
            <ClientsTab />
          </TabsContent>

          <TabsContent value="services" className="space-y-6">
            <ServicesTab />
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <TeamTab />
          </TabsContent>

          <TabsContent value="finance" className="space-y-6">
            <FinanceTab />
          </TabsContent>

          <TabsContent value="hosting" className="space-y-6">
            <HostingTab />
          </TabsContent>

          <TabsContent value="marketing" className="space-y-6">
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Marketing Analytics</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Advanced marketing analytics and campaign management system coming soon. 
                Track performance, analyze trends, and optimize campaigns.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">98.5%</div>
                  <div className="text-sm text-gray-600">Campaign Success Rate</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">2.4M</div>
                  <div className="text-sm text-gray-600">Total Reach</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 mb-2">$847K</div>
                  <div className="text-sm text-gray-600">Revenue Generated</div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Zap className="mr-2 h-5 w-5" />
          Quick Actions
        </Button>
      </div>
    </div>
  );
};

export default AdminDashboard;