import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { DollarSign, TrendingUp, TrendingDown, CreditCard, FileText, Calendar, Plus, Download } from 'lucide-react';

const FinanceTab = () => {
  const financialStats = [
    { title: "Monthly Revenue", value: "$45,200", change: "+23%", trend: "up" },
    { title: "Monthly Expenses", value: "$18,750", change: "-5%", trend: "down" },
    { title: "Net Profit", value: "$26,450", change: "+35%", trend: "up" },
    { title: "Outstanding Invoices", value: "$12,300", change: "+8%", trend: "up" },
  ];

  const recentInvoices = [
    {
      id: "INV-001",
      client: "TechCorp Solutions",
      amount: "$8,500",
      status: "Paid",
      dueDate: "2024-01-15",
      project: "E-commerce Platform"
    },
    {
      id: "INV-002",
      client: "FinanceFirst Bank",
      amount: "$15,000",
      status: "Pending",
      dueDate: "2024-01-20",
      project: "Mobile Banking App"
    },
    {
      id: "INV-003",
      client: "Creative Studio LLC",
      amount: "$3,200",
      status: "Overdue",
      dueDate: "2024-01-10",
      project: "Brand Identity"
    },
    {
      id: "INV-004",
      client: "Local Business Co",
      amount: "$2,100",
      status: "Draft",
      dueDate: "2024-01-25",
      project: "SEO Campaign"
    }
  ];

  const expenses = [
    { category: "Salaries", amount: "$12,000", percentage: 64 },
    { category: "Software & Tools", amount: "$2,500", percentage: 13 },
    { category: "Office Rent", amount: "$1,800", percentage: 10 },
    { category: "Marketing", amount: "$1,200", percentage: 6 },
    { category: "Utilities", amount: "$800", percentage: 4 },
    { category: "Other", amount: "$450", percentage: 3 },
  ];

  const revenueByService = [
    { service: "Web Development", amount: "$18,500", percentage: 41 },
    { service: "Mobile Apps", amount: "$12,000", percentage: 27 },
    { service: "Digital Marketing", amount: "$8,700", percentage: 19 },
    { service: "Hosting", amount: "$3,200", percentage: 7 },
    { service: "Design", amount: "$2,800", percentage: 6 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid': return 'bg-green-500';
      case 'Pending': return 'bg-yellow-500';
      case 'Overdue': return 'bg-red-500';
      case 'Draft': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Financial Management</h2>
          <p className="text-muted-foreground">Track revenue, expenses, and financial performance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Invoice
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {financialStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              {stat.trend === 'up' ? (
                <TrendingUp className="h-4 w-4 text-green-600" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-600" />
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Invoices</CardTitle>
            <CardDescription>Latest invoice activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentInvoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{invoice.id}</span>
                      <Badge className={getStatusColor(invoice.status)} variant="secondary">
                        {invoice.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {invoice.client} - {invoice.project}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                      <Calendar className="h-3 w-3" />
                      Due: {invoice.dueDate}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{invoice.amount}</div>
                    <Button size="sm" variant="outline" className="mt-1">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue by Service</CardTitle>
            <CardDescription>Revenue breakdown by service type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {revenueByService.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{item.service}</span>
                    <span className="font-bold">{item.amount}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={item.percentage} className="flex-1 h-2" />
                    <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Expenses</CardTitle>
            <CardDescription>Expense breakdown by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {expenses.map((expense, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{expense.category}</span>
                    <span className="font-bold">{expense.amount}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={expense.percentage} className="flex-1 h-2" />
                    <span className="text-sm text-muted-foreground">{expense.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Financial Summary</CardTitle>
            <CardDescription>Key financial metrics and targets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
                    <DollarSign className="h-4 w-4" />
                    <span className="text-sm">Profit Margin</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600">58.5%</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
                    <CreditCard className="h-4 w-4" />
                    <span className="text-sm">Cash Flow</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">$33,150</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monthly Target</span>
                  <span className="font-bold">$50,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Current Progress</span>
                  <span className="font-bold text-green-600">90.4%</span>
                </div>
                <Progress value={90.4} className="h-2" />
              </div>

              <div className="pt-4 border-t">
                <div className="text-sm text-muted-foreground mb-2">Quick Actions</div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    Send Invoice
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Record Expense
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FinanceTab;