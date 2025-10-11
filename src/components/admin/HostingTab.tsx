import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Server, Globe, Shield, Activity, Cpu, HardDrive, Wifi, Zap, Plus, Search, Eye, Settings, RefreshCw, AlertTriangle, CheckCircle, Clock, TrendingUp, Database, Network, Cloud, Lock, Unlock, Power, PowerOff, Play, Pause, RotateCcw, Download, Upload, BarChart3, PieChart, LineChart, Target, Star, Award, Trophy, Gem, Diamond, Sparkles, Rocket, Brain, Crown, Users, FileText, Calendar, DollarSign, ArrowUpRight, ArrowDownRight, Minus, Plus as PlusIcon, Filter, MoreHorizontal, Edit, Trash2, Copy, ExternalLink, Bell, Mail, Phone, Building, MapPin } from 'lucide-react';

interface HostingServer {
  id: string;
  name: string;
  type: 'vps' | 'dedicated' | 'cloud' | 'managed';
  provider: string;
  location: string;
  status: 'online' | 'offline' | 'maintenance' | 'error';
  ip_address: string;
  domain: string;
  cpu_usage: number;
  memory_usage: number;
  disk_usage: number;
  bandwidth_usage: number;
  uptime: number;
  response_time: number;
  monthly_cost: number;
  client_name: string;
  project_name: string;
  ssl_status: 'active' | 'expired' | 'pending';
  backup_status: 'enabled' | 'disabled' | 'failed';
  last_backup: string;
  security_score: number;
  performance_score: number;
  alerts: ServerAlert[];
  services: HostingService[];
}

interface ServerAlert {
  id: string;
  type: 'warning' | 'error' | 'info';
  message: string;
  timestamp: string;
  resolved: boolean;
}

interface HostingService {
  id: string;
  name: string;
  type: 'web' | 'database' | 'email' | 'cdn' | 'ssl' | 'backup';
  status: 'running' | 'stopped' | 'error';
  port: number;
  version: string;
  uptime: number;
}

interface HostingMetrics {
  total_servers: number;
  online_servers: number;
  total_domains: number;
  active_ssl_certificates: number;
  total_bandwidth_used: number;
  average_uptime: number;
  total_monthly_cost: number;
  security_score: number;
}

const HostingTab = () => {
  const [servers, setServers] = useState<HostingServer[]>([]);
  const [metrics, setMetrics] = useState<HostingMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [selectedServer, setSelectedServer] = useState<HostingServer | null>(null);
  const [isServerDialogOpen, setIsServerDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      
      // Luxury demo data for Cardinal Consulting hosting
      const demoServers: HostingServer[] = [
        {
          id: '1',
          name: 'Quantum-Prod-01',
          type: 'dedicated',
          provider: 'AWS',
          location: 'US East (N. Virginia)',
          status: 'online',
          ip_address: '52.23.45.67',
          domain: 'quantum-ecommerce.com',
          cpu_usage: 78,
          memory_usage: 65,
          disk_usage: 45,
          bandwidth_usage: 82,
          uptime: 99.98,
          response_time: 45,
          monthly_cost: 2500,
          client_name: 'TechCorp Solutions',
          project_name: 'Quantum E-commerce Platform',
          ssl_status: 'active',
          backup_status: 'enabled',
          last_backup: '2024-01-15T02:00:00Z',
          security_score: 95,
          performance_score: 92,
          alerts: [
            { id: '1', type: 'warning', message: 'High CPU usage detected', timestamp: '2024-01-15T10:30:00Z', resolved: false },
            { id: '2', type: 'info', message: 'SSL certificate renewed successfully', timestamp: '2024-01-14T15:20:00Z', resolved: true }
          ],
          services: [
            { id: '1', name: 'Nginx', type: 'web', status: 'running', port: 80, version: '1.24.0', uptime: 99.9 },
            { id: '2', name: 'PostgreSQL', type: 'database', status: 'running', port: 5432, version: '15.4', uptime: 99.8 },
            { id: '3', name: 'Redis', type: 'database', status: 'running', port: 6379, version: '7.2', uptime: 99.7 }
          ]
        },
        {
          id: '2',
          name: 'Neural-Bank-01',
          type: 'cloud',
          provider: 'Azure',
          location: 'East US',
          status: 'online',
          ip_address: '20.45.67.89',
          domain: 'neuralbanking.com',
          cpu_usage: 45,
          memory_usage: 52,
          disk_usage: 38,
          bandwidth_usage: 65,
          uptime: 99.99,
          response_time: 32,
          monthly_cost: 1800,
          client_name: 'FinanceFirst Bank',
          project_name: 'Neural Banking Application',
          ssl_status: 'active',
          backup_status: 'enabled',
          last_backup: '2024-01-15T02:00:00Z',
          security_score: 98,
          performance_score: 96,
          alerts: [
            { id: '3', type: 'info', message: 'Security scan completed - no threats found', timestamp: '2024-01-15T08:00:00Z', resolved: true }
          ],
          services: [
            { id: '4', name: 'Apache', type: 'web', status: 'running', port: 80, version: '2.4.57', uptime: 99.9 },
            { id: '5', name: 'MySQL', type: 'database', status: 'running', port: 3306, version: '8.0.35', uptime: 99.8 },
            { id: '6', name: 'Node.js', type: 'web', status: 'running', port: 3000, version: '18.17.0', uptime: 99.7 }
          ]
        },
        {
          id: '3',
          name: 'Creative-Studio-01',
          type: 'vps',
          provider: 'DigitalOcean',
          location: 'New York',
          status: 'online',
          ip_address: '159.89.123.45',
          domain: 'creativestudio.com',
          cpu_usage: 25,
          memory_usage: 35,
          disk_usage: 28,
          bandwidth_usage: 45,
          uptime: 99.95,
          response_time: 55,
          monthly_cost: 120,
          client_name: 'Creative Studio Inc',
          project_name: 'Quantum Brand Identity Suite',
          ssl_status: 'active',
          backup_status: 'enabled',
          last_backup: '2024-01-15T02:00:00Z',
          security_score: 88,
          performance_score: 85,
          alerts: [],
          services: [
            { id: '7', name: 'Caddy', type: 'web', status: 'running', port: 80, version: '2.7.5', uptime: 99.8 },
            { id: '8', name: 'SQLite', type: 'database', status: 'running', port: 0, version: '3.44.0', uptime: 99.9 }
          ]
        },
        {
          id: '4',
          name: 'Analytics-Platform-01',
          type: 'managed',
          provider: 'Google Cloud',
          location: 'us-central1',
          status: 'maintenance',
          ip_address: '34.123.45.67',
          domain: 'analytics-platform.com',
          cpu_usage: 0,
          memory_usage: 0,
          disk_usage: 0,
          bandwidth_usage: 0,
          uptime: 99.97,
          response_time: 0,
          monthly_cost: 3200,
          client_name: 'Innovation Labs',
          project_name: 'AI-Powered Analytics Platform',
          ssl_status: 'active',
          backup_status: 'enabled',
          last_backup: '2024-01-15T02:00:00Z',
          security_score: 92,
          performance_score: 89,
          alerts: [
            { id: '4', type: 'info', message: 'Scheduled maintenance in progress', timestamp: '2024-01-15T12:00:00Z', resolved: false }
          ],
          services: [
            { id: '9', name: 'Kubernetes', type: 'web', status: 'stopped', port: 6443, version: '1.28.0', uptime: 0 },
            { id: '10', name: 'MongoDB', type: 'database', status: 'stopped', port: 27017, version: '7.0.4', uptime: 0 }
          ]
        }
      ];

      const demoMetrics: HostingMetrics = {
        total_servers: 4,
        online_servers: 3,
        total_domains: 4,
        active_ssl_certificates: 4,
        total_bandwidth_used: 192,
        average_uptime: 99.97,
        total_monthly_cost: 7620,
        security_score: 93
      };

      setServers(demoServers);
      setMetrics(demoMetrics);
    } catch (error) {
      console.error('Error loading data:', error);
      toast({
        title: "Error",
        description: "Failed to load hosting data",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'offline': return 'bg-red-500';
      case 'maintenance': return 'bg-yellow-500';
      case 'error': return 'bg-red-600';
      default: return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'vps': return Server;
      case 'dedicated': return Cpu;
      case 'cloud': return Cloud;
      case 'managed': return Shield;
      default: return Server;
    }
  };

  const getUsageColor = (usage: number) => {
    if (usage >= 90) return 'text-red-400';
    if (usage >= 75) return 'text-yellow-400';
    return 'text-green-400';
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

  const filteredServers = servers.filter(server => {
    const matchesSearch = server.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         server.client_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         server.domain.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || server.status === statusFilter;
    const matchesType = typeFilter === 'all' || server.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <div className="text-gray-600">Loading hosting infrastructure...</div>
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
            Hosting Infrastructure
          </h2>
          <p className="text-gray-600 mt-2">Advanced server management for Cardinal Consulting</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            <BarChart3 className="mr-2 h-4 w-4" />
            Analytics
          </Button>
          <Dialog open={isServerDialogOpen} onOpenChange={setIsServerDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="mr-2 h-4 w-4" />
                Add Server
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Deploy New Server</DialogTitle>
                <DialogDescription>
                  Provision a new hosting server for Cardinal Consulting
                </DialogDescription>
              </DialogHeader>
              {/* Form content would go here */}
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsServerDialogOpen(false)}>
                  Cancel
                </Button>
                <Button>Deploy Server</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Hosting Metrics */}
      {metrics && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="group relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent cursor-pointer hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <CardContent className="p-6 relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">Total Servers</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">{metrics.total_servers}</p>
                  <p className="text-sm text-emerald-600 mt-1 font-medium">{metrics.online_servers} online</p>
                </div>
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Server className="h-5 w-5 text-white" />
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
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">Average Uptime</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">{metrics.average_uptime}%</p>
                  <p className="text-sm text-green-600 mt-1 font-medium">Excellent</p>
                </div>
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Activity className="h-5 w-5 text-white" />
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
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">Security Score</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">{metrics.security_score}/100</p>
                  <p className="text-sm text-blue-600 mt-1 font-medium">Protected</p>
                </div>
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Shield className="h-5 w-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="group relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent cursor-pointer hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <CardContent className="p-6 relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">Monthly Cost</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">{formatCurrency(metrics.total_monthly_cost)}</p>
                  <p className="text-sm text-orange-600 mt-1 font-medium">Total infrastructure</p>
                </div>
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <DollarSign className="h-5 w-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Filters */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search servers..."
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
            <SelectItem value="online">Online</SelectItem>
            <SelectItem value="offline">Offline</SelectItem>
            <SelectItem value="maintenance">Maintenance</SelectItem>
            <SelectItem value="error">Error</SelectItem>
          </SelectContent>
        </Select>
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="vps">VPS</SelectItem>
            <SelectItem value="dedicated">Dedicated</SelectItem>
            <SelectItem value="cloud">Cloud</SelectItem>
            <SelectItem value="managed">Managed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Servers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredServers.map((server) => {
          const TypeIcon = getTypeIcon(server.type);
          return (
            <Card key={server.id} className="hover:shadow-xl transition-all duration-300 border-gray-100 group cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg text-white group-hover:text-purple-300 transition-colors">
                      {server.name}
                    </CardTitle>
                    <CardDescription className="text-purple-300 mt-1">
                      {server.client_name} • {server.project_name}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                      <TypeIcon className="h-4 w-4 text-purple-400" />
                      <Badge className="bg-purple-900/50 text-purple-300 border-purple-700/50">
                        {server.type.toUpperCase()}
                      </Badge>
                    </div>
                    <Badge className={getStatusColor(server.status)}>
                      {server.status.toUpperCase()}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="h-4 w-4 text-purple-400" />
                  <span className="text-purple-300">{server.domain}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-purple-400" />
                    <span className={`${getUsageColor(server.cpu_usage)}`}>CPU: {server.cpu_usage}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HardDrive className="h-4 w-4 text-purple-400" />
                    <span className={`${getUsageColor(server.memory_usage)}`}>RAM: {server.memory_usage}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-purple-400" />
                    <span className={`${getUsageColor(server.disk_usage)}`}>Disk: {server.disk_usage}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="h-4 w-4 text-purple-400" />
                    <span className={`${getUsageColor(server.bandwidth_usage)}`}>BW: {server.bandwidth_usage}%</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-300">Uptime</span>
                    <span className="text-white">{server.uptime}%</span>
                  </div>
                  <Progress value={server.uptime} className="h-2 bg-purple-900/50">
                    <div className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-300" style={{ width: `${server.uptime}%` }}></div>
                  </Progress>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-purple-400" />
                    <span className="text-purple-300">{server.response_time}ms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-purple-400" />
                    <span className="text-purple-300">{formatCurrency(server.monthly_cost)}/mo</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-white"
                    onClick={() => setSelectedServer(server)}
                  >
                    <Eye className="mr-1 h-3 w-3" />
                    View
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    <Settings className="mr-1 h-3 w-3" />
                    Manage
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Server Details Dialog */}
      {selectedServer && (
        <Dialog open={!!selectedServer} onOpenChange={() => setSelectedServer(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-black/95 backdrop-blur-xl border border-purple-800/50">
            <DialogHeader>
              <DialogTitle className="text-2xl text-white">{selectedServer.name}</DialogTitle>
              <DialogDescription className="text-purple-300">
                {selectedServer.client_name} • {selectedServer.project_name}
              </DialogDescription>
            </DialogHeader>
            
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-black/40 backdrop-blur-xl border border-purple-800/50">
                <TabsTrigger value="overview" className="text-purple-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white">Overview</TabsTrigger>
                <TabsTrigger value="services" className="text-purple-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white">Services</TabsTrigger>
                <TabsTrigger value="alerts" className="text-purple-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white">Alerts</TabsTrigger>
                <TabsTrigger value="performance" className="text-purple-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white">Performance</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="grid grid-cols-2 gap-6">
                  <Card className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-white">Server Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-purple-300">Provider:</span>
                        <span className="text-white">{selectedServer.provider}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-300">Location:</span>
                        <span className="text-white">{selectedServer.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-300">IP Address:</span>
                        <span className="text-white">{selectedServer.ip_address}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-300">Domain:</span>
                        <span className="text-white">{selectedServer.domain}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-300">SSL Status:</span>
                        <Badge className={selectedServer.ssl_status === 'active' ? 'bg-green-500' : 'bg-red-500'}>
                          {selectedServer.ssl_status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-white">Performance Metrics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-purple-300">Security Score:</span>
                        <span className="text-white">{selectedServer.security_score}/100</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-300">Performance Score:</span>
                        <span className="text-white">{selectedServer.performance_score}/100</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-300">Uptime:</span>
                        <span className="text-white">{selectedServer.uptime}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-300">Response Time:</span>
                        <span className="text-white">{selectedServer.response_time}ms</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-300">Monthly Cost:</span>
                        <span className="text-white">{formatCurrency(selectedServer.monthly_cost)}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Resource Usage</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-purple-300">CPU Usage</span>
                        <span className={`${getUsageColor(selectedServer.cpu_usage)}`}>{selectedServer.cpu_usage}%</span>
                      </div>
                      <Progress value={selectedServer.cpu_usage} className="h-2 bg-purple-900/50">
                        <div className={`h-full rounded-full transition-all duration-300 ${selectedServer.cpu_usage >= 90 ? 'bg-red-500' : selectedServer.cpu_usage >= 75 ? 'bg-yellow-500' : 'bg-green-500'}`} style={{ width: `${selectedServer.cpu_usage}%` }}></div>
                      </Progress>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-purple-300">Memory Usage</span>
                        <span className={`${getUsageColor(selectedServer.memory_usage)}`}>{selectedServer.memory_usage}%</span>
                      </div>
                      <Progress value={selectedServer.memory_usage} className="h-2 bg-purple-900/50">
                        <div className={`h-full rounded-full transition-all duration-300 ${selectedServer.memory_usage >= 90 ? 'bg-red-500' : selectedServer.memory_usage >= 75 ? 'bg-yellow-500' : 'bg-green-500'}`} style={{ width: `${selectedServer.memory_usage}%` }}></div>
                      </Progress>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-purple-300">Disk Usage</span>
                        <span className={`${getUsageColor(selectedServer.disk_usage)}`}>{selectedServer.disk_usage}%</span>
                      </div>
                      <Progress value={selectedServer.disk_usage} className="h-2 bg-purple-900/50">
                        <div className={`h-full rounded-full transition-all duration-300 ${selectedServer.disk_usage >= 90 ? 'bg-red-500' : selectedServer.disk_usage >= 75 ? 'bg-yellow-500' : 'bg-green-500'}`} style={{ width: `${selectedServer.disk_usage}%` }}></div>
                      </Progress>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="services" className="space-y-4 mt-6">
                <div className="space-y-3">
                  {selectedServer.services.map((service) => (
                    <Card key={service.id} className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-white">{service.name}</h4>
                            <p className="text-sm text-purple-300">{service.type} • Port {service.port}</p>
                            <p className="text-xs text-purple-400">v{service.version}</p>
                          </div>
                          <div className="text-right">
                            <Badge className={service.status === 'running' ? 'bg-green-500' : service.status === 'stopped' ? 'bg-red-500' : 'bg-yellow-500'}>
                              {service.status}
                            </Badge>
                            <p className="text-sm text-purple-300 mt-1">{service.uptime}% uptime</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="alerts" className="space-y-4 mt-6">
                <div className="space-y-3">
                  {selectedServer.alerts.map((alert) => (
                    <Card key={alert.id} className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg ${alert.type === 'error' ? 'bg-red-900/50' : alert.type === 'warning' ? 'bg-yellow-900/50' : 'bg-blue-900/50'}`}>
                            {alert.type === 'error' ? (
                              <AlertTriangle className="h-4 w-4 text-red-400" />
                            ) : alert.type === 'warning' ? (
                              <AlertTriangle className="h-4 w-4 text-yellow-400" />
                            ) : (
                              <Bell className="h-4 w-4 text-blue-400" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-white">{alert.message}</p>
                            <p className="text-xs text-purple-400 mt-1">{formatDate(alert.timestamp)}</p>
                          </div>
                          <Badge variant="outline" className={alert.resolved ? 'border-green-600 text-green-400' : 'border-yellow-600 text-yellow-400'}>
                            {alert.resolved ? 'Resolved' : 'Active'}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="performance" className="space-y-6 mt-6">
                <div className="grid grid-cols-2 gap-6">
                  <Card className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-white">Security Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-400 mb-2">{selectedServer.security_score}/100</div>
                        <div className="text-sm text-purple-300">Security Score</div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-white">Performance Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-2">{selectedServer.performance_score}/100</div>
                        <div className="text-sm text-purple-300">Performance Score</div>
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

export default HostingTab;