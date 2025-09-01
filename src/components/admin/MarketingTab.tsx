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
import { Calendar, User, DollarSign, Clock, Plus, Filter, Search, Edit, Trash2, FileText, Upload, Download, Eye, CalendarDays, Users, Tag, Target, CheckCircle, AlertCircle, Clock as ClockIcon, FileUp, MessageSquare, BarChart3, Zap, Crown, Star, Award, Trophy, Gem, Diamond, Sparkles, Rocket, Brain, Cpu, Shield, Database, Globe, Network, Activity, TrendingUp, Palette, Code, Smartphone, Search as SearchIcon, Settings, Globe as GlobeIcon, Cloud, Mail, Phone, MapPin, Building, TrendingDown, Users as UsersIcon, MousePointer, MousePointerClick, Share2, Heart, MessageCircle, Eye as EyeIcon, BarChart, PieChart, LineChart, Target as TargetIcon, Megaphone, Newspaper, Video, Image, FileImage, Link, ExternalLink, Filter as FilterIcon, Calendar as CalendarIcon, Clock as ClockIcon2 } from 'lucide-react';

interface MarketingCampaign {
  id: string;
  name: string;
  description: string;
  type: 'email' | 'social' | 'content' | 'paid' | 'seo';
  status: 'draft' | 'active' | 'paused' | 'completed' | 'cancelled';
  start_date: string;
  end_date: string;
  budget: number;
  spent: number;
  target_audience: string;
  goals: string[];
  metrics: {
    impressions: number;
    clicks: number;
    conversions: number;
    ctr: number;
    cpc: number;
    roas: number;
  };
  created_at: string;
  updated_at: string;
}

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  source: string;
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'closed' | 'lost';
  score: number;
  last_contact: string;
  notes: string;
  created_at: string;
  updated_at: string;
}

interface Content {
  id: string;
  title: string;
  type: 'blog' | 'video' | 'infographic' | 'whitepaper' | 'case-study';
  status: 'draft' | 'review' | 'published' | 'archived';
  author: string;
  publish_date: string;
  views: number;
  shares: number;
  engagement_rate: number;
  seo_score: number;
  created_at: string;
  updated_at: string;
}

interface Analytics {
  total_leads: number;
  conversion_rate: number;
  total_revenue: number;
  avg_lead_value: number;
  top_performing_campaign: string;
  monthly_growth: number;
  channel_performance: {
    email: number;
    social: number;
    paid: number;
    organic: number;
    direct: number;
  };
}

const MarketingTab = () => {
  const [campaigns, setCampaigns] = useState<MarketingCampaign[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [content, setContent] = useState<Content[]>([]);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [selectedCampaign, setSelectedCampaign] = useState<MarketingCampaign | null>(null);
  const [isCampaignDialogOpen, setIsCampaignDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      
      // Demo data for marketing campaigns
      const demoCampaigns: MarketingCampaign[] = [
        {
          id: '1',
          name: 'Quantum Technology Launch Campaign',
          description: 'Comprehensive digital campaign to launch our quantum computing services to enterprise clients.',
          type: 'paid',
          status: 'active',
          start_date: '2024-01-15',
          end_date: '2024-03-15',
          budget: 50000,
          spent: 28500,
          target_audience: 'Enterprise CTOs, Technology Directors',
          goals: ['Generate 200 qualified leads', 'Achieve 15% conversion rate', 'Establish thought leadership'],
          metrics: {
            impressions: 125000,
            clicks: 8500,
            conversions: 180,
            ctr: 6.8,
            cpc: 3.35,
            roas: 4.2
          },
          created_at: '2024-01-15T00:00:00Z',
          updated_at: '2024-01-15T00:00:00Z'
        },
        {
          id: '2',
          name: 'AI Solutions Email Series',
          description: 'Educational email campaign targeting decision-makers interested in AI implementation.',
          type: 'email',
          status: 'active',
          start_date: '2024-01-01',
          end_date: '2024-02-28',
          budget: 15000,
          spent: 8500,
          target_audience: 'CIOs, IT Managers, Business Analysts',
          goals: ['Educate prospects on AI benefits', 'Generate 150 qualified leads', 'Increase brand awareness'],
          metrics: {
            impressions: 45000,
            clicks: 3200,
            conversions: 145,
            ctr: 7.1,
            cpc: 2.66,
            roas: 3.8
          },
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z'
        },
        {
          id: '3',
          name: 'Brand Identity Social Media Campaign',
          description: 'Social media campaign showcasing our creative design capabilities and brand transformation success stories.',
          type: 'social',
          status: 'active',
          start_date: '2024-01-10',
          end_date: '2024-04-10',
          budget: 25000,
          spent: 12000,
          target_audience: 'Marketing Directors, Creative Directors, Brand Managers',
          goals: ['Increase social media engagement', 'Generate 100 creative project inquiries', 'Build brand recognition'],
          metrics: {
            impressions: 89000,
            clicks: 5600,
            conversions: 95,
            ctr: 6.3,
            cpc: 2.14,
            roas: 2.9
          },
          created_at: '2024-01-10T00:00:00Z',
          updated_at: '2024-01-10T00:00:00Z'
        }
      ];

      const demoLeads: Lead[] = [
        {
          id: '1',
          name: 'Sarah Johnson',
          email: 'sarah.johnson@techcorp.com',
          phone: '+1 (555) 123-4567',
          company: 'TechCorp Solutions',
          source: 'Quantum Technology Campaign',
          status: 'qualified',
          score: 85,
          last_contact: '2024-01-20',
          notes: 'Interested in quantum computing implementation. Budget approved for Q2.',
          created_at: '2024-01-15T00:00:00Z',
          updated_at: '2024-01-20T00:00:00Z'
        },
        {
          id: '2',
          name: 'Michael Chen',
          email: 'mchen@financefirst.com',
          phone: '+1 (555) 234-5678',
          company: 'FinanceFirst Bank',
          source: 'AI Solutions Email Series',
          status: 'proposal',
          score: 92,
          last_contact: '2024-01-22',
          notes: 'Ready for AI implementation proposal. Decision maker identified.',
          created_at: '2024-01-10T00:00:00Z',
          updated_at: '2024-01-22T00:00:00Z'
        },
        {
          id: '3',
          name: 'Lisa Park',
          email: 'lisa@creativestudio.com',
          phone: '+1 (555) 345-6789',
          company: 'Creative Studio Inc',
          source: 'Brand Identity Social Campaign',
          status: 'contacted',
          score: 78,
          last_contact: '2024-01-18',
          notes: 'Interested in brand transformation. Scheduling discovery call.',
          created_at: '2024-01-12T00:00:00Z',
          updated_at: '2024-01-18T00:00:00Z'
        }
      ];

      const demoContent: Content[] = [
        {
          id: '1',
          title: 'The Future of Quantum Computing in Enterprise',
          type: 'blog',
          status: 'published',
          author: 'Dr. Sarah Chen',
          publish_date: '2024-01-15',
          views: 12500,
          shares: 450,
          engagement_rate: 8.5,
          seo_score: 92,
          created_at: '2024-01-15T00:00:00Z',
          updated_at: '2024-01-15T00:00:00Z'
        },
        {
          id: '2',
          title: 'AI Implementation Guide for Financial Services',
          type: 'whitepaper',
          status: 'published',
          author: 'Michael Chang',
          publish_date: '2024-01-10',
          views: 8500,
          shares: 320,
          engagement_rate: 12.3,
          seo_score: 88,
          created_at: '2024-01-10T00:00:00Z',
          updated_at: '2024-01-10T00:00:00Z'
        },
        {
          id: '3',
          title: 'Brand Transformation Case Study: TechCorp',
          type: 'case-study',
          status: 'published',
          author: 'Lisa Park',
          publish_date: '2024-01-08',
          views: 6800,
          shares: 280,
          engagement_rate: 9.8,
          seo_score: 85,
          created_at: '2024-01-08T00:00:00Z',
          updated_at: '2024-01-08T00:00:00Z'
        }
      ];

      const demoAnalytics: Analytics = {
        total_leads: 425,
        conversion_rate: 12.5,
        total_revenue: 1250000,
        avg_lead_value: 2941,
        top_performing_campaign: 'Quantum Technology Launch Campaign',
        monthly_growth: 18.5,
        channel_performance: {
          email: 35,
          social: 28,
          paid: 22,
          organic: 12,
          direct: 3
        }
      };

      setCampaigns(demoCampaigns);
      setLeads(demoLeads);
      setContent(demoContent);
      setAnalytics(demoAnalytics);
    } catch (error) {
      console.error('Error loading data:', error);
      toast({
        title: "Error",
        description: "Failed to load marketing data",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'draft': return 'bg-yellow-500';
      case 'paused': return 'bg-orange-500';
      case 'completed': return 'bg-blue-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'email': return Mail;
      case 'social': return Share2;
      case 'content': return FileText;
      case 'paid': return DollarSign;
      case 'seo': return SearchIcon;
      default: return Megaphone;
    }
  };

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return FileText;
      case 'video': return Video;
      case 'infographic': return Image;
      case 'whitepaper': return FileText;
      case 'case-study': return FileText;
      default: return FileText;
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

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || campaign.status === statusFilter;
    const matchesType = typeFilter === 'all' || campaign.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-gray-600">Loading marketing data...</div>
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
            Marketing Management
          </h2>
          <p className="text-gray-600 mt-2">Comprehensive marketing campaign and lead management for Cardinal Consulting</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            <Filter className="mr-2 h-4 w-4" />
            Advanced Filter
          </Button>
          <Dialog open={isCampaignDialogOpen} onOpenChange={setIsCampaignDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="mr-2 h-4 w-4" />
                New Campaign
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Campaign</DialogTitle>
                <DialogDescription>
                  Launch a new marketing campaign for Cardinal Consulting
                </DialogDescription>
              </DialogHeader>
              {/* Form content would go here */}
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCampaignDialogOpen(false)}>
                  Cancel
                </Button>
                <Button>Create Campaign</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Analytics Overview */}
      {analytics && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Leads</p>
                  <p className="text-2xl font-bold text-gray-900">{formatNumber(analytics.total_leads)}</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                  <p className="text-2xl font-bold text-gray-900">{analytics.conversion_rate}%</p>
                </div>
                <Target className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">{formatCurrency(analytics.total_revenue)}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Lead Value</p>
                  <p className="text-2xl font-bold text-gray-900">{formatCurrency(analytics.avg_lead_value)}</p>
                </div>
                <DollarSign className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Channel Performance */}
      {analytics && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-gray-900">Channel Performance</CardTitle>
            <CardDescription>Lead generation by marketing channel</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {Object.entries(analytics.channel_performance).map(([channel, percentage]) => (
                <div key={channel} className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{percentage}%</div>
                  <div className="text-sm text-gray-600 capitalize">{channel}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="campaigns" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="campaigns" className="space-y-6 mt-6">
          {/* Campaign Filters */}
          <div className="flex gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search campaigns..."
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
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="paused">Paused</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="social">Social</SelectItem>
                <SelectItem value="content">Content</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="seo">SEO</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Campaigns Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCampaigns.map((campaign) => {
              const TypeIcon = getTypeIcon(campaign.type);
              const progress = (campaign.spent / campaign.budget) * 100;
              return (
                <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <TypeIcon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg text-gray-900">{campaign.name}</CardTitle>
                          <CardDescription className="text-gray-600">
                            {campaign.type.toUpperCase()} • {campaign.target_audience}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className={getStatusColor(campaign.status)}>
                        {campaign.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600 leading-relaxed">{campaign.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">{formatCurrency(campaign.budget)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">{formatDate(campaign.end_date)}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Budget Spent</span>
                        <span className="text-gray-900 font-medium">{formatCurrency(campaign.spent)}</span>
                      </div>
                      <Progress value={progress} className="h-2">
                        <div className="h-full bg-blue-600 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
                      </Progress>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                      <div className="text-center">
                        <p className="text-lg font-semibold text-gray-900">{formatNumber(campaign.metrics.conversions)}</p>
                        <p className="text-xs text-gray-600">Conversions</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-semibold text-gray-900">{campaign.metrics.roas}x</p>
                        <p className="text-xs text-gray-600">ROAS</p>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => setSelectedCampaign(campaign)}
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
        </TabsContent>

        <TabsContent value="leads" className="space-y-6 mt-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">Lead Management</h3>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="mr-2 h-4 w-4" />
              Add Lead
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {leads.map((lead) => (
              <Card key={lead.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg text-gray-900">{lead.name}</CardTitle>
                      <CardDescription className="text-gray-600">{lead.company}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(lead.status)}>
                      {lead.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{lead.email}</span>
                    </div>
                    {lead.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">{lead.phone}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Tag className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{lead.source}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <p className="text-lg font-semibold text-gray-900">{lead.score}</p>
                      <p className="text-xs text-gray-600">Score</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-gray-900">{formatDate(lead.last_contact)}</p>
                      <p className="text-xs text-gray-600">Last Contact</p>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button size="sm" variant="outline" className="flex-1">
                      <MessageSquare className="mr-1 h-3 w-3" />
                      Contact
                    </Button>
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Edit className="mr-1 h-3 w-3" />
                      Edit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="content" className="space-y-6 mt-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">Content Management</h3>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="mr-2 h-4 w-4" />
              Create Content
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {content.map((item) => {
              const ContentIcon = getContentTypeIcon(item.type);
              return (
                <Card key={item.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <ContentIcon className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg text-gray-900">{item.title}</CardTitle>
                          <CardDescription className="text-gray-600">
                            {item.type.replace('-', ' ')} • {item.author}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className={getStatusColor(item.status)}>
                        {item.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <EyeIcon className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">{formatNumber(item.views)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Share2 className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">{formatNumber(item.shares)}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                      <div className="text-center">
                        <p className="text-lg font-semibold text-gray-900">{item.engagement_rate}%</p>
                        <p className="text-xs text-gray-600">Engagement</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-semibold text-gray-900">{item.seo_score}</p>
                        <p className="text-xs text-gray-600">SEO Score</p>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button size="sm" variant="outline" className="flex-1">
                        <ExternalLink className="mr-1 h-3 w-3" />
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
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Campaign Performance</CardTitle>
                <CardDescription>Top performing campaigns this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {campaigns.slice(0, 3).map((campaign) => (
                    <div key={campaign.id} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-900">{campaign.name}</p>
                        <p className="text-sm text-gray-600">{campaign.type.toUpperCase()}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">{formatNumber(campaign.metrics.conversions)}</p>
                        <p className="text-sm text-gray-600">conversions</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Lead Sources</CardTitle>
                <CardDescription>Where our leads are coming from</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(leads.reduce((acc, lead) => {
                    acc[lead.source] = (acc[lead.source] || 0) + 1;
                    return acc;
                  }, {} as Record<string, number>))
                  .sort(([,a], [,b]) => b - a)
                  .slice(0, 5)
                  .map(([source, count]) => (
                    <div key={source} className="flex justify-between items-center">
                      <span className="text-gray-900">{source}</span>
                      <span className="font-medium text-gray-900">{count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Campaign Details Dialog */}
      {selectedCampaign && (
        <Dialog open={!!selectedCampaign} onOpenChange={() => setSelectedCampaign(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  {(() => {
                    const TypeIcon = getTypeIcon(selectedCampaign.type);
                    return <TypeIcon className="h-8 w-8 text-blue-600" />;
                  })()}
                </div>
                <div>
                  <DialogTitle className="text-2xl text-gray-900">{selectedCampaign.name}</DialogTitle>
                  <DialogDescription className="text-gray-600">
                    {selectedCampaign.type.toUpperCase()} • {selectedCampaign.status}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>
            
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="metrics">Metrics</TabsTrigger>
                <TabsTrigger value="goals">Goals</TabsTrigger>
                <TabsTrigger value="leads">Leads</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="grid grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">Campaign Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <Badge className={getStatusColor(selectedCampaign.status)}>
                          {selectedCampaign.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Type:</span>
                        <span className="text-gray-900">{selectedCampaign.type.toUpperCase()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Budget:</span>
                        <span className="text-gray-900 font-semibold">{formatCurrency(selectedCampaign.budget)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Spent:</span>
                        <span className="text-gray-900">{formatCurrency(selectedCampaign.spent)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Start Date:</span>
                        <span className="text-gray-900">{formatDate(selectedCampaign.start_date)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">End Date:</span>
                        <span className="text-gray-900">{formatDate(selectedCampaign.end_date)}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">Target Audience</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{selectedCampaign.target_audience}</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900">Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{selectedCampaign.description}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="metrics" className="space-y-6 mt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-gray-900">{formatNumber(selectedCampaign.metrics.impressions)}</div>
                      <p className="text-sm text-gray-600">Impressions</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-gray-900">{formatNumber(selectedCampaign.metrics.clicks)}</div>
                      <p className="text-sm text-gray-600">Clicks</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-gray-900">{formatNumber(selectedCampaign.metrics.conversions)}</div>
                      <p className="text-sm text-gray-600">Conversions</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-gray-900">{selectedCampaign.metrics.ctr}%</div>
                      <p className="text-sm text-gray-600">CTR</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-gray-900">{formatCurrency(selectedCampaign.metrics.cpc)}</div>
                      <p className="text-sm text-gray-600">CPC</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-gray-900">{selectedCampaign.metrics.roas}x</div>
                      <p className="text-sm text-gray-600">ROAS</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="goals" className="space-y-4 mt-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Campaign Goals</h3>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Goal
                  </Button>
                </div>
                <div className="space-y-3">
                  {selectedCampaign.goals.map((goal, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-blue-600" />
                          <span className="text-gray-900">{goal}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="leads" className="space-y-4 mt-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Campaign Leads</h3>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Lead
                  </Button>
                </div>
                <div className="space-y-3">
                  {leads.filter(lead => lead.source === selectedCampaign.name).map((lead) => (
                    <Card key={lead.id}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-gray-900">{lead.name}</h4>
                            <p className="text-sm text-gray-600">{lead.company}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-gray-300">
                              {lead.status}
                            </Badge>
                            <span className="text-sm text-gray-900">Score: {lead.score}</span>
                          </div>
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

export default MarketingTab; 