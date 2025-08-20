import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Mail, Phone, Building, Calendar, DollarSign, User, Plus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const ClientsTab = () => {
  const clients = [
    {
      id: 1,
      name: "TechCorp Solutions",
      contact: "John Smith",
      email: "john@techcorp.com",
      phone: "+1 (555) 123-4567",
      industry: "Technology",
      projectsCount: 3,
      totalValue: "$75,000",
      lastContact: "2024-01-15",
      status: "Active",
      tier: "Premium"
    },
    {
      id: 2,
      name: "FinanceFirst Bank",
      contact: "Sarah Johnson",
      email: "sarah@financefirst.com",
      phone: "+1 (555) 987-6543",
      industry: "Finance",
      projectsCount: 2,
      totalValue: "$125,000",
      lastContact: "2024-01-12",
      status: "Active",
      tier: "Enterprise"
    },
    {
      id: 3,
      name: "Creative Studio LLC",
      contact: "Mike Rodriguez",
      email: "mike@creativestudio.com",
      phone: "+1 (555) 456-7890",
      industry: "Design",
      projectsCount: 1,
      totalValue: "$15,000",
      lastContact: "2024-01-10",
      status: "Active",
      tier: "Standard"
    },
    {
      id: 4,
      name: "Local Business Co",
      contact: "Emma Davis",
      email: "emma@localbiz.com",
      phone: "+1 (555) 321-0987",
      industry: "Retail",
      projectsCount: 1,
      totalValue: "$8,500",
      lastContact: "2024-01-08",
      status: "Prospect",
      tier: "Standard"
    },
    {
      id: 5,
      name: "Enterprise Corp",
      contact: "David Wilson",
      email: "david@enterprise.com",
      phone: "+1 (555) 789-0123",
      industry: "Manufacturing",
      projectsCount: 4,
      totalValue: "$200,000",
      lastContact: "2024-01-14",
      status: "Active",
      tier: "Enterprise"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-500';
      case 'Prospect': return 'bg-blue-500';
      case 'Inactive': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Enterprise': return 'bg-purple-500';
      case 'Premium': return 'bg-yellow-500';
      case 'Standard': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Client Management</h2>
          <p className="text-muted-foreground">Manage client relationships and information</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search clients..." className="pl-10 w-64" />
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Client
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {clients.map((client) => (
          <Card key={client.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{client.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{client.name}</CardTitle>
                    <CardDescription>{client.contact}</CardDescription>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <Badge className={getStatusColor(client.status)}>
                    {client.status}
                  </Badge>
                  <Badge className={getTierColor(client.tier)} variant="secondary">
                    {client.tier}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="truncate">{client.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{client.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span>{client.industry}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{client.lastContact}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 p-3 bg-muted rounded-lg">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                    <User className="h-4 w-4" />
                    <span className="text-xs">Projects</span>
                  </div>
                  <div className="font-bold">{client.projectsCount}</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                    <DollarSign className="h-4 w-4" />
                    <span className="text-xs">Total Value</span>
                  </div>
                  <div className="font-bold">{client.totalValue}</div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  View Profile
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  Contact
                </Button>
                <Button size="sm" className="flex-1">
                  New Project
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ClientsTab;