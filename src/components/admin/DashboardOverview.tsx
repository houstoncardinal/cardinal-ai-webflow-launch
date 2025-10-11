import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, DollarSign, Clock, Server, Smartphone, FileText, Mail, Activity } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const DashboardOverview = () => {
  const [stats, setStats] = useState({
    totalProjects: 0,
    totalClients: 0,
    totalSubmissions: 0,
    totalSubscribers: 0,
    blogPosts: 0,
    publishedPosts: 0
  });
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch real data from Supabase
      const [contactRes, newsletterRes, blogRes, projectsRes] = await Promise.all([
        supabase.from('contact_submissions').select('*', { count: 'exact', head: true }),
        supabase.from('newsletter_subscriptions').select('*', { count: 'exact', head: true }),
        supabase.from('blog_posts').select('status', { count: 'exact' }),
        supabase.from('project_evaluations').select('*', { count: 'exact', head: true })
      ]);

      const totalBlogPosts = blogRes.count || 0;
      const publishedPosts = blogRes.data?.filter(p => p.status === 'published').length || 0;

      setStats({
        totalProjects: projectsRes.count || 0,
        totalClients: new Set((await supabase.from('contact_submissions').select('email')).data?.map(s => s.email)).size,
        totalSubmissions: contactRes.count || 0,
        totalSubscribers: newsletterRes.count || 0,
        blogPosts: totalBlogPosts,
        publishedPosts: publishedPosts
      });
    } catch (error) {
      console.error('Error loading dashboard data:', error);
      toast({
        title: "Error",
        description: "Failed to load dashboard data",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    { title: "Active Projects", value: stats.totalProjects.toString(), change: "+12%", icon: Clock, color: "from-emerald-500 to-teal-600", bgGlow: "emerald" },
    { title: "Total Clients", value: stats.totalClients.toString(), change: "+8%", icon: Users, color: "from-blue-500 to-cyan-600", bgGlow: "blue" },
    { title: "Contact Submissions", value: stats.totalSubmissions.toString(), change: "+15%", icon: Mail, color: "from-purple-500 to-pink-600", bgGlow: "purple" },
    { title: "Newsletter Subscribers", value: stats.totalSubscribers.toString(), change: "+23%", icon: TrendingUp, color: "from-orange-500 to-red-600", bgGlow: "orange" },
    { title: "Blog Posts", value: stats.blogPosts.toString(), change: `${stats.publishedPosts} published`, icon: FileText, color: "from-violet-500 to-purple-600", bgGlow: "violet" },
    { title: "Engagement Rate", value: "94%", change: "+5%", icon: Activity, color: "from-green-500 to-emerald-600", bgGlow: "green" },
  ];

  const recentActivity = [
    { type: "Project", title: "E-commerce Website", client: "TechCorp", status: "In Progress", time: "2 hours ago" },
    { type: "Contact", title: "New Inquiry", client: "StartupXYZ", status: "New", time: "5 hours ago" },
    { type: "Newsletter", title: "New Subscriber", client: "Creative Agency", status: "Active", time: "1 day ago" },
    { type: "Blog", title: "New Post Published", client: "Cardinal Blog", status: "Published", time: "2 days ago" },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <div className="text-gray-600">Loading dashboard...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat, index) => (
          <Card 
            key={index}
            className="group relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent cursor-pointer hover:-translate-y-1"
          >
            {/* Animated gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            
            {/* Glow effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
            
            <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                {stat.title}
              </CardTitle>
              <div className={`p-2.5 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <stat.icon className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <p className="text-xs text-gray-600 mt-2 flex items-center gap-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                  {stat.change}
                </span>
                <span className="text-gray-500">from last month</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="overflow-hidden border-gray-100 hover:shadow-xl transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
            <CardTitle className="text-gray-900">Recent Activity</CardTitle>
            <CardDescription className="text-gray-600">Latest updates across all departments</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50">
                        {activity.type}
                      </Badge>
                      <span className="font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
                        {activity.title}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1.5">
                      Client: <span className="font-medium text-gray-700">{activity.client}</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant={activity.status === 'Completed' || activity.status === 'Published' ? 'default' : 'secondary'}
                      className="bg-emerald-100 text-emerald-700 border-emerald-200"
                    >
                      {activity.status}
                    </Badge>
                    <p className="text-xs text-gray-500 mt-1.5">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button 
              variant="outline" 
              className="w-full mt-6 border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300"
            >
              View All Activity
            </Button>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-gray-100 hover:shadow-xl transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
            <CardTitle className="text-gray-900">Quick Actions</CardTitle>
            <CardDescription className="text-gray-600">Frequently used operations</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'New Project', icon: Clock, color: 'emerald' },
                { label: 'View Contacts', icon: Mail, color: 'blue' },
                { label: 'Manage Blog', icon: FileText, color: 'purple' },
                { label: 'Analytics', icon: TrendingUp, color: 'orange' },
              ].map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`h-24 flex-col gap-2 border-${action.color}-200 hover:bg-${action.color}-50 hover:border-${action.color}-300 hover:shadow-md transition-all duration-300 group`}
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-br from-${action.color}-500 to-${action.color}-600 group-hover:scale-110 transition-transform`}>
                    <action.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{action.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;