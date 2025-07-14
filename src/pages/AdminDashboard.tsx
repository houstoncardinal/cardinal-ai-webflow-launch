import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { LogOut, Mail, User, Phone, Building, MessageCircle, Calendar, DollarSign } from 'lucide-react';
import Navigation from '@/components/Navigation';

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
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate('/auth');
      return;
    }

    setUser(session.user);

    // Check if user is admin
    const { data: roleData } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', session.user.id)
      .single();

    if (roleData?.role === 'admin') {
      setIsAdmin(true);
      await loadData();
    } else {
      toast({
        title: "Access Denied",
        description: "You don't have admin privileges.",
        variant: "destructive",
      });
      navigate('/');
      return;
    }

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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage submissions and evaluations</p>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>

        <Tabs defaultValue="contacts" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="contacts">
              Contact Submissions ({contactSubmissions.length})
            </TabsTrigger>
            <TabsTrigger value="projects">
              Project Evaluations ({projectEvaluations.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contacts" className="space-y-4">
            {contactSubmissions.map((submission) => (
              <Card key={submission.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5" />
                        {submission.first_name} {submission.last_name}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Building className="h-4 w-4" />
                        {submission.company}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(submission.status)}>
                        {submission.status}
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">
                        <Calendar className="h-4 w-4 inline mr-1" />
                        {formatDate(submission.created_at)}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      {submission.email}
                    </p>
                    <div className="flex items-start gap-2">
                      <MessageCircle className="h-4 w-4 mt-1" />
                      <p className="text-sm">{submission.message}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="projects" className="space-y-4">
            {projectEvaluations.map((evaluation) => (
              <Card key={evaluation.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5" />
                        {evaluation.name}
                      </CardTitle>
                      <CardDescription>
                        Service: {evaluation.service.replace('-', ' ').toUpperCase()}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(evaluation.status)}>
                        {evaluation.status}
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">
                        <Calendar className="h-4 w-4 inline mr-1" />
                        {formatDate(evaluation.created_at)}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      {evaluation.email}
                    </p>
                    {evaluation.phone && (
                      <p className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        {evaluation.phone}
                      </p>
                    )}
                    {evaluation.estimated_budget && (
                      <p className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        Budget: {evaluation.estimated_budget.replace('-', ' - ').toUpperCase()}
                      </p>
                    )}
                    {evaluation.timeline && (
                      <p className="text-sm">
                        <strong>Timeline:</strong> {evaluation.timeline}
                      </p>
                    )}
                    {evaluation.project_description && (
                      <div>
                        <strong>Description:</strong>
                        <p className="text-sm mt-1">{evaluation.project_description}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;