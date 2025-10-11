import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import DashboardOverview from '@/components/admin/DashboardOverview';
import ProjectsTab from '@/components/admin/ProjectsTab';
import ClientsTab from '@/components/admin/ClientsTab';
import ServicesTab from '@/components/admin/ServicesTab';
import TeamTab from '@/components/admin/TeamTab';
import FinanceTab from '@/components/admin/FinanceTab';
import HostingTab from '@/components/admin/HostingTab';
import MarketingTab from '@/components/admin/MarketingTab';
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
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'overview';
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleTabChange = (tab: string) => {
    setSearchParams({ tab });
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      setLoading(true);
      
      // Get current session
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError) throw sessionError;
      
      if (!session) {
        navigate('/auth');
        return;
      }

      setUser(session.user);

      // Check if user has admin role
      const { data: roleData, error: roleError } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id)
        .eq('role', 'admin')
        .single();

      if (roleError || !roleData) {
        toast({
          title: "Access Denied",
          description: "You don't have permission to access this page",
          variant: "destructive"
        });
        navigate('/');
        return;
      }

      setIsAdmin(true);
      await loadData();
    } catch (error) {
      console.error('Auth error:', error);
      navigate('/auth');
    } finally {
      setLoading(false);
    }
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
      <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50/30 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative animate-spin rounded-full h-32 w-32 border-4 border-emerald-100 border-t-emerald-600 mx-auto mb-6"></div>
          </div>
          <div className="text-emerald-900 text-2xl font-bold mb-2">Initializing Cardinal Dashboard</div>
          <div className="text-emerald-600 text-sm font-medium">Loading enterprise systems...</div>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardOverview />;
      case 'projects':
        return <ProjectsTab />;
      case 'clients':
        return <ClientsTab />;
      case 'services':
        return <ServicesTab />;
      case 'team':
        return <TeamTab />;
      case 'finance':
        return <FinanceTab />;
      case 'hosting':
        return <HostingTab />;
      case 'marketing':
        return <MarketingTab />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen w-full flex bg-gradient-to-br from-white via-emerald-50/20 to-white">
        <SEO 
          title="Admin Dashboard - Cardinal Consulting"
          description="Cardinal Consulting enterprise admin dashboard for managing projects, clients, services, and business operations."
          keywords="admin dashboard, project management, client management, business operations"
          url="/admin"
          type="website"
        />
        
        <AdminSidebar 
          onSignOut={handleSignOut} 
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        
        <main className="flex-1 overflow-auto">
          {/* Top Bar */}
          <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-emerald-100/50 shadow-sm">
            <div className="flex items-center justify-between px-8 py-4">
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </h1>
                <p className="text-sm text-emerald-600 font-medium mt-0.5">
                  Manage your {activeTab} with precision
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-lg">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-emerald-700">Live</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;