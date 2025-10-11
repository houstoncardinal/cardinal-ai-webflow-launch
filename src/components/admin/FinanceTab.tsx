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
import { Calendar, DollarSign, TrendingUp, TrendingDown, Plus, Search, Eye, Download, Upload, CreditCard, Receipt, Wallet, PiggyBank, BarChart3, PieChart, LineChart, Activity, Target, Award, Trophy, Gem, Diamond, Sparkles, Rocket, Brain, Cpu, Shield, Database, Network, Zap, Crown, Star, CheckCircle, AlertCircle, Briefcase, Users, FileText, Clock, CalendarDays, ArrowUpRight, ArrowDownRight, Minus, Plus as PlusIcon, Filter, MoreHorizontal, Edit, Trash2, Copy, ExternalLink, Lock, Unlock, RefreshCw, Settings, Bell, Mail, Phone, Building, Globe, MapPin } from 'lucide-react';

interface Invoice {
  id: string;
  invoice_number: string;
  client_name: string;
  project_name: string;
  amount: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
  issue_date: string;
  due_date: string;
  paid_date?: string;
  description: string;
  items: InvoiceItem[];
  tax_rate: number;
  subtotal: number;
  tax_amount: number;
  total: number;
  currency: string;
  payment_method?: string;
  notes?: string;
}

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unit_price: number;
  total: number;
}

interface Expense {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
  project_id?: string;
  project_name?: string;
  receipt_url?: string;
  status: 'pending' | 'approved' | 'rejected';
  approved_by?: string;
  approved_date?: string;
  notes?: string;
}

interface Payment {
  id: string;
  invoice_id: string;
  invoice_number: string;
  client_name: string;
  amount: number;
  payment_date: string;
  payment_method: string;
  transaction_id: string;
  status: 'completed' | 'pending' | 'failed';
  notes?: string;
}

interface FinancialMetrics {
  total_revenue: number;
  total_expenses: number;
  net_profit: number;
  profit_margin: number;
  outstanding_invoices: number;
  overdue_amount: number;
  monthly_revenue: number;
  monthly_expenses: number;
  growth_rate: number;
  cash_flow: number;
}

const FinanceTab = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [metrics, setMetrics] = useState<FinancialMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [dateFilter, setDateFilter] = useState<string>('all');
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [isInvoiceDialogOpen, setIsInvoiceDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      
      // Luxury demo data for Cardinal Consulting finances
      const demoInvoices: Invoice[] = [
        {
          id: '1',
          invoice_number: 'INV-2024-001',
          client_name: 'TechCorp Solutions',
          project_name: 'Quantum E-commerce Platform',
          amount: 125000,
          status: 'paid',
          issue_date: '2024-01-01',
          due_date: '2024-01-31',
          paid_date: '2024-01-25',
          description: 'Phase 1: AI Engine Development and Blockchain Integration',
          items: [
            { id: '1', description: 'AI Recommendation Engine Development', quantity: 80, unit_price: 250, total: 20000 },
            { id: '2', description: 'Blockchain Payment System Integration', quantity: 120, unit_price: 200, total: 24000 },
            { id: '3', description: 'AR Shopping Experience Development', quantity: 100, unit_price: 180, total: 18000 },
            { id: '4', description: 'System Architecture & Design', quantity: 40, unit_price: 300, total: 12000 },
            { id: '5', description: 'Project Management & Coordination', quantity: 60, unit_price: 150, total: 9000 }
          ],
          tax_rate: 8.5,
          subtotal: 83000,
          tax_amount: 7055,
          total: 90055,
          currency: 'USD',
          payment_method: 'Bank Transfer',
          notes: 'Early payment received - excellent client relationship'
        },
        {
          id: '2',
          invoice_number: 'INV-2024-002',
          client_name: 'FinanceFirst Bank',
          project_name: 'Neural Banking Application',
          amount: 280000,
          status: 'paid',
          issue_date: '2024-01-05',
          due_date: '2024-02-05',
          paid_date: '2024-02-01',
          description: 'Advanced neural network security and biometric authentication system',
          items: [
            { id: '6', description: 'Neural Security Framework Development', quantity: 160, unit_price: 250, total: 40000 },
            { id: '7', description: 'Biometric Authentication System', quantity: 120, unit_price: 200, total: 24000 },
            { id: '8', description: 'Predictive Analytics Engine', quantity: 200, unit_price: 180, total: 36000 },
            { id: '9', description: 'Compliance & Security Auditing', quantity: 80, unit_price: 300, total: 24000 },
            { id: '10', description: 'Mobile App Development', quantity: 160, unit_price: 200, total: 32000 }
          ],
          tax_rate: 8.5,
          subtotal: 156000,
          tax_amount: 13260,
          total: 169260,
          currency: 'USD',
          payment_method: 'Wire Transfer',
          notes: 'Milestone payment for completed security framework'
        },
        {
          id: '3',
          invoice_number: 'INV-2024-003',
          client_name: 'Creative Studio Inc',
          project_name: 'Quantum Brand Identity Suite',
          amount: 52000,
          status: 'sent',
          issue_date: '2024-01-15',
          due_date: '2024-02-15',
          description: 'Comprehensive brand identity system with quantum-inspired design',
          items: [
            { id: '11', description: 'Quantum Design System Development', quantity: 60, unit_price: 160, total: 9600 },
            { id: '12', description: 'Dynamic Logo Creation', quantity: 40, unit_price: 140, total: 5600 },
            { id: '13', description: 'Brand Experience Platform', quantity: 80, unit_price: 160, total: 12800 },
            { id: '14', description: 'Brand Guidelines & Documentation', quantity: 30, unit_price: 200, total: 6000 },
            { id: '15', description: 'Creative Direction & Strategy', quantity: 50, unit_price: 180, total: 9000 }
          ],
          tax_rate: 8.5,
          subtotal: 43000,
          tax_amount: 3655,
          total: 46655,
          currency: 'USD',
          notes: 'Design phase completed, awaiting client approval'
        },
        {
          id: '4',
          invoice_number: 'INV-2024-004',
          client_name: 'Innovation Labs',
          project_name: 'AI-Powered Analytics Platform',
          amount: 180000,
          status: 'overdue',
          issue_date: '2023-12-15',
          due_date: '2024-01-15',
          description: 'Advanced analytics platform with machine learning capabilities',
          items: [
            { id: '16', description: 'ML Model Development', quantity: 200, unit_price: 180, total: 36000 },
            { id: '17', description: 'Data Pipeline Architecture', quantity: 120, unit_price: 200, total: 24000 },
            { id: '18', description: 'Dashboard Development', quantity: 100, unit_price: 160, total: 16000 },
            { id: '19', description: 'API Development & Integration', quantity: 80, unit_price: 200, total: 16000 },
            { id: '20', description: 'Testing & Quality Assurance', quantity: 60, unit_price: 150, total: 9000 }
          ],
          tax_rate: 8.5,
          subtotal: 101000,
          tax_amount: 8585,
          total: 109585,
          currency: 'USD',
          notes: 'Payment reminder sent - client experiencing budget constraints'
        }
      ];

      const demoExpenses: Expense[] = [
        {
          id: '1',
          description: 'AI Computing Resources - AWS',
          amount: 15000,
          category: 'Infrastructure',
          date: '2024-01-15',
          project_name: 'Quantum E-commerce Platform',
          status: 'approved',
          approved_by: 'Dr. Sarah Chen',
          approved_date: '2024-01-16',
          notes: 'High-performance computing for AI model training'
        },
        {
          id: '2',
          description: 'Security Infrastructure - Azure',
          amount: 25000,
          category: 'Security',
          date: '2024-01-10',
          project_name: 'Neural Banking Application',
          status: 'approved',
          approved_by: 'Dr. Sarah Chen',
          approved_date: '2024-01-11',
          notes: 'Enterprise-grade security infrastructure for banking application'
        },
        {
          id: '3',
          description: 'Design Software Licenses',
          amount: 5000,
          category: 'Software',
          date: '2024-01-20',
          project_name: 'Quantum Brand Identity Suite',
          status: 'approved',
          approved_by: 'Lisa Park',
          approved_date: '2024-01-21',
          notes: 'Adobe Creative Suite and 3D design software licenses'
        },
        {
          id: '4',
          description: 'Team Training - Advanced AI',
          amount: 12000,
          category: 'Training',
          date: '2024-01-25',
          status: 'pending',
          notes: 'Advanced AI/ML training for development team'
        }
      ];

      const demoPayments: Payment[] = [
        {
          id: '1',
          invoice_id: '1',
          invoice_number: 'INV-2024-001',
          client_name: 'TechCorp Solutions',
          amount: 90055,
          payment_date: '2024-01-25',
          payment_method: 'Bank Transfer',
          transaction_id: 'TXN-001-2024',
          status: 'completed',
          notes: 'Early payment - excellent client relationship'
        },
        {
          id: '2',
          invoice_id: '2',
          invoice_number: 'INV-2024-002',
          client_name: 'FinanceFirst Bank',
          amount: 169260,
          payment_date: '2024-02-01',
          payment_method: 'Wire Transfer',
          transaction_id: 'TXN-002-2024',
          status: 'completed',
          notes: 'Milestone payment received on time'
        }
      ];

      const demoMetrics: FinancialMetrics = {
        total_revenue: 415320,
        total_expenses: 57000,
        net_profit: 358320,
        profit_margin: 86.3,
        outstanding_invoices: 156240,
        overdue_amount: 109585,
        monthly_revenue: 259320,
        monthly_expenses: 57000,
        growth_rate: 23.5,
        cash_flow: 202320
      };

      setInvoices(demoInvoices);
      setExpenses(demoExpenses);
      setPayments(demoPayments);
      setMetrics(demoMetrics);
    } catch (error) {
      console.error('Error loading data:', error);
      toast({
        title: "Error",
        description: "Failed to load financial data",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-500';
      case 'sent': return 'bg-blue-500';
      case 'overdue': return 'bg-red-500';
      case 'draft': return 'bg-gray-500';
      case 'cancelled': return 'bg-gray-400';
      default: return 'bg-gray-500';
    }
  };

  const getExpenseStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'rejected': return 'bg-red-500';
      default: return 'bg-gray-500';
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

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.invoice_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.client_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.project_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <div className="text-gray-600">Loading financial systems...</div>
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
            Financial Command Center
          </h2>
          <p className="text-gray-600 mt-2">Advanced financial management for Cardinal Consulting</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            <Download className="mr-2 h-4 w-4" />
            Export Reports
          </Button>
          <Dialog open={isInvoiceDialogOpen} onOpenChange={setIsInvoiceDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="mr-2 h-4 w-4" />
                New Invoice
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create Professional Invoice</DialogTitle>
                <DialogDescription>
                  Generate a new invoice for Cardinal Consulting services
                </DialogDescription>
              </DialogHeader>
              {/* Form content would go here */}
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsInvoiceDialogOpen(false)}>
                  Cancel
                </Button>
                <Button>Create Invoice</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Financial Metrics */}
      {metrics && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="group relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent cursor-pointer hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <CardContent className="p-6 relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">Total Revenue</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">{formatCurrency(metrics.total_revenue)}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-green-600 font-medium">+{metrics.growth_rate}%</span>
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <DollarSign className="h-5 w-5 text-white" />
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
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">Net Profit</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">{formatCurrency(metrics.net_profit)}</p>
                  <p className="text-sm text-blue-600 mt-1 font-medium">{metrics.profit_margin}% margin</p>
                </div>
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="group relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent cursor-pointer hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-rose-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-rose-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <CardContent className="p-6 relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">Outstanding</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">{formatCurrency(metrics.outstanding_invoices)}</p>
                  <p className="text-sm text-red-600 mt-1 font-medium">{formatCurrency(metrics.overdue_amount)} overdue</p>
                </div>
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <AlertCircle className="h-5 w-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="group relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent cursor-pointer hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <CardContent className="p-6 relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">Cash Flow</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">{formatCurrency(metrics.cash_flow)}</p>
                  <p className="text-sm text-green-600 mt-1 font-medium">Positive</p>
                </div>
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Activity className="h-5 w-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main Content Tabs */}
      <Tabs defaultValue="invoices" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="invoices" className="text-purple-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white">Invoices</TabsTrigger>
          <TabsTrigger value="expenses" className="text-purple-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white">Expenses</TabsTrigger>
          <TabsTrigger value="payments" className="text-purple-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white">Payments</TabsTrigger>
          <TabsTrigger value="analytics" className="text-purple-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="invoices" className="space-y-6 mt-6">
          {/* Invoice Filters */}
          <div className="flex gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-4 w-4" />
              <Input
                placeholder="Search invoices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-black/40 backdrop-blur-xl border-purple-800/50 text-white placeholder:text-purple-300"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-32 bg-black/40 backdrop-blur-xl border-purple-800/50 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-black/90 border-purple-800/50">
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="sent">Sent</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Invoices Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredInvoices.map((invoice) => (
              <Card key={invoice.id} className="bg-black/40 backdrop-blur-xl border border-purple-800/50 hover:border-purple-600/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg text-white group-hover:text-purple-300 transition-colors">
                        {invoice.invoice_number}
                      </CardTitle>
                      <CardDescription className="text-purple-300 mt-1">
                        {invoice.client_name}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge className={getStatusColor(invoice.status)}>
                        {invoice.status.toUpperCase()}
                      </Badge>
                      <div className="text-right">
                        <p className="text-lg font-bold text-white">{formatCurrency(invoice.amount)}</p>
                        <p className="text-xs text-purple-300">{invoice.currency}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-white mb-2">{invoice.project_name}</h4>
                    <p className="text-sm text-purple-300 line-clamp-2">{invoice.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-purple-400" />
                      <span className="text-purple-300">Issued: {formatDate(invoice.issue_date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-purple-400" />
                      <span className="text-purple-300">Due: {formatDate(invoice.due_date)}</span>
                    </div>
                    {invoice.paid_date && (
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-green-400">Paid: {formatDate(invoice.paid_date)}</span>
                      </div>
                    )}
                    {invoice.payment_method && (
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4 text-purple-400" />
                        <span className="text-purple-300">{invoice.payment_method}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-white"
                      onClick={() => setSelectedInvoice(invoice)}
                    >
                      <Eye className="mr-1 h-3 w-3" />
                      View
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      <Download className="mr-1 h-3 w-3" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="expenses" className="space-y-6 mt-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-white">Expense Management</h3>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Plus className="mr-2 h-4 w-4" />
              Add Expense
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {expenses.map((expense) => (
              <Card key={expense.id} className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-medium text-white mb-2">{expense.description}</h4>
                      <p className="text-sm text-purple-300 mb-3">{expense.category}</p>
                      {expense.project_name && (
                        <p className="text-sm text-purple-300 mb-2">Project: {expense.project_name}</p>
                      )}
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-purple-300">{formatDate(expense.date)}</span>
                        {expense.approved_by && (
                          <span className="text-green-400">Approved by {expense.approved_by}</span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-white">{formatCurrency(expense.amount)}</p>
                      <Badge className={getExpenseStatusColor(expense.status)}>
                        {expense.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="payments" className="space-y-6 mt-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-white">Payment History</h3>
            <Button variant="outline" className="border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-white">
              <Download className="mr-2 h-4 w-4" />
              Export Payments
            </Button>
          </div>
          
          <div className="space-y-4">
            {payments.map((payment) => (
              <Card key={payment.id} className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-900/50 rounded-lg">
                        <DollarSign className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{payment.invoice_number}</h4>
                        <p className="text-sm text-purple-300">{payment.client_name}</p>
                        <p className="text-xs text-purple-400">{formatDate(payment.payment_date)}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-white">{formatCurrency(payment.amount)}</p>
                      <p className="text-sm text-purple-300">{payment.payment_method}</p>
                      <Badge className="bg-green-500 text-white text-xs">
                        {payment.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
              <CardHeader>
                <CardTitle className="text-white">Revenue Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BarChart3 className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                  <p className="text-purple-300">Advanced revenue analytics coming soon</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
              <CardHeader>
                <CardTitle className="text-white">Profit Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <PieChart className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                  <p className="text-purple-300">Profit margin analysis coming soon</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Invoice Details Dialog */}
      {selectedInvoice && (
        <Dialog open={!!selectedInvoice} onOpenChange={() => setSelectedInvoice(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-black/95 backdrop-blur-xl border border-purple-800/50">
            <DialogHeader>
              <DialogTitle className="text-2xl text-white">{selectedInvoice.invoice_number}</DialogTitle>
              <DialogDescription className="text-purple-300">
                {selectedInvoice.client_name} • {selectedInvoice.project_name}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Invoice Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-purple-300">Status:</span>
                      <Badge className={getStatusColor(selectedInvoice.status)}>
                        {selectedInvoice.status.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-300">Issue Date:</span>
                      <span className="text-white">{formatDate(selectedInvoice.issue_date)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-300">Due Date:</span>
                      <span className="text-white">{formatDate(selectedInvoice.due_date)}</span>
                    </div>
                    {selectedInvoice.paid_date && (
                      <div className="flex justify-between">
                        <span className="text-purple-300">Paid Date:</span>
                        <span className="text-white">{formatDate(selectedInvoice.paid_date)}</span>
                      </div>
                    )}
                    {selectedInvoice.payment_method && (
                      <div className="flex justify-between">
                        <span className="text-purple-300">Payment Method:</span>
                        <span className="text-white">{selectedInvoice.payment_method}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Financial Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-purple-300">Subtotal:</span>
                      <span className="text-white">{formatCurrency(selectedInvoice.subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-300">Tax ({selectedInvoice.tax_rate}%):</span>
                      <span className="text-white">{formatCurrency(selectedInvoice.tax_amount)}</span>
                    </div>
                    <div className="flex justify-between border-t border-purple-800 pt-2">
                      <span className="text-purple-300 font-medium">Total:</span>
                      <span className="text-white font-bold text-lg">{formatCurrency(selectedInvoice.total)}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Invoice Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {selectedInvoice.items.map((item) => (
                      <div key={item.id} className="flex justify-between items-center p-3 bg-purple-900/20 rounded-lg">
                        <div className="flex-1">
                          <p className="font-medium text-white">{item.description}</p>
                          <p className="text-sm text-purple-300">
                            {item.quantity} × {formatCurrency(item.unit_price)}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-white">{formatCurrency(item.total)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {selectedInvoice.notes && (
                <Card className="bg-black/40 backdrop-blur-xl border border-purple-800/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Notes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-300">{selectedInvoice.notes}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default FinanceTab;