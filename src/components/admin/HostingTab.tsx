import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Server, Globe, Shield, Activity, HardDrive, Cpu, Plus, Settings } from 'lucide-react';

const HostingTab = () => {
  const servers = [
    {
      id: 1,
      name: "Web Server 01",
      type: "VPS",
      status: "Online",
      uptime: "99.8%",
      cpuUsage: 45,
      memoryUsage: 62,
      diskUsage: 78,
      bandwidth: "2.1TB / 5TB",
      clients: 8,
      ip: "192.168.1.100"
    },
    {
      id: 2,
      name: "App Server 02",
      type: "Dedicated",
      status: "Online",
      uptime: "99.9%",
      cpuUsage: 32,
      memoryUsage: 48,
      diskUsage: 45,
      bandwidth: "1.8TB / 10TB",
      clients: 12,
      ip: "192.168.1.101"
    },
    {
      id: 3,
      name: "Database Server",
      type: "Cloud",
      status: "Online",
      uptime: "100%",
      cpuUsage: 28,
      memoryUsage: 55,
      diskUsage: 35,
      bandwidth: "850GB / 3TB",
      clients: 15,
      ip: "192.168.1.102"
    },
    {
      id: 4,
      name: "Backup Server",
      type: "Storage",
      status: "Maintenance",
      uptime: "98.5%",
      cpuUsage: 15,
      memoryUsage: 25,
      diskUsage: 90,
      bandwidth: "450GB / 2TB",
      clients: 5,
      ip: "192.168.1.103"
    }
  ];

  const domains = [
    {
      domain: "techcorp.com",
      client: "TechCorp Solutions",
      status: "Active",
      expiry: "2024-12-15",
      ssl: "Valid",
      server: "Web Server 01"
    },
    {
      domain: "financefirst.com",
      client: "FinanceFirst Bank",
      status: "Active",
      expiry: "2024-08-22",
      ssl: "Valid",
      server: "App Server 02"
    },
    {
      domain: "creativestudio.com",
      client: "Creative Studio LLC",
      status: "Active",
      expiry: "2024-06-10",
      ssl: "Expiring Soon",
      server: "Web Server 01"
    },
    {
      domain: "localbiz.com",
      client: "Local Business Co",
      status: "Pending",
      expiry: "2024-11-05",
      ssl: "Pending",
      server: "Web Server 01"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Online':
      case 'Active': return 'bg-green-500';
      case 'Maintenance':
      case 'Pending': return 'bg-yellow-500';
      case 'Offline': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getSSLColor = (ssl: string) => {
    switch (ssl) {
      case 'Valid': return 'bg-green-500';
      case 'Expiring Soon': return 'bg-yellow-500';
      case 'Expired':
      case 'Pending': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getUsageColor = (usage: number) => {
    if (usage >= 80) return "text-red-600";
    if (usage >= 60) return "text-yellow-600";
    return "text-green-600";
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Hosting Management</h2>
          <p className="text-muted-foreground">Monitor servers, domains, and hosting infrastructure</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Server
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {servers.map((server) => (
          <Card key={server.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{server.name}</CardTitle>
                    <CardDescription>{server.type} - {server.ip}</CardDescription>
                  </div>
                </div>
                <Badge className={getStatusColor(server.status)}>
                  {server.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-muted-foreground" />
                  <span>Uptime: {server.uptime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span>{server.clients} clients</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-muted-foreground" />
                      CPU Usage
                    </span>
                    <span className={getUsageColor(server.cpuUsage)}>
                      {server.cpuUsage}%
                    </span>
                  </div>
                  <Progress value={server.cpuUsage} className="h-2" />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-muted-foreground" />
                      Memory
                    </span>
                    <span className={getUsageColor(server.memoryUsage)}>
                      {server.memoryUsage}%
                    </span>
                  </div>
                  <Progress value={server.memoryUsage} className="h-2" />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <HardDrive className="h-4 w-4 text-muted-foreground" />
                      Disk Usage
                    </span>
                    <span className={getUsageColor(server.diskUsage)}>
                      {server.diskUsage}%
                    </span>
                  </div>
                  <Progress value={server.diskUsage} className="h-2" />
                </div>
              </div>

              <div className="flex justify-between text-sm p-2 bg-muted rounded">
                <span>Bandwidth</span>
                <span className="font-medium">{server.bandwidth}</span>
              </div>

              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1">
                  Monitor
                </Button>
                <Button size="sm" className="flex-1">
                  Manage
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Domain Management</CardTitle>
          <CardDescription>Manage client domains and SSL certificates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {domains.map((domain, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{domain.domain}</span>
                    <Badge className={getStatusColor(domain.status)} variant="secondary">
                      {domain.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Client: {domain.client}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Server: {domain.server}
                  </p>
                </div>
                <div className="text-center mx-4">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    <Badge className={getSSLColor(domain.ssl)} variant="secondary">
                      SSL: {domain.ssl}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Expires: {domain.expiry}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    DNS
                  </Button>
                  <Button size="sm">
                    Manage
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Infrastructure Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Total Servers</span>
                <span className="font-bold">4</span>
              </div>
              <div className="flex justify-between">
                <span>Active Domains</span>
                <span className="font-bold">3</span>
              </div>
              <div className="flex justify-between">
                <span>Total Clients</span>
                <span className="font-bold">40</span>
              </div>
              <div className="flex justify-between">
                <span>Avg Uptime</span>
                <span className="font-bold text-green-600">99.5%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>SSL Certificates</span>
                <span className="font-bold text-green-600">Valid</span>
              </div>
              <div className="flex justify-between">
                <span>Firewall</span>
                <span className="font-bold text-green-600">Active</span>
              </div>
              <div className="flex justify-between">
                <span>Backups</span>
                <span className="font-bold text-green-600">Current</span>
              </div>
              <div className="flex justify-between">
                <span>Monitoring</span>
                <span className="font-bold text-blue-600">24/7</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resource Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>CPU Average</span>
                <span className="font-bold text-green-600">30%</span>
              </div>
              <div className="flex justify-between">
                <span>Memory Average</span>
                <span className="font-bold text-yellow-600">48%</span>
              </div>
              <div className="flex justify-between">
                <span>Storage Used</span>
                <span className="font-bold text-yellow-600">62%</span>
              </div>
              <div className="flex justify-between">
                <span>Bandwidth</span>
                <span className="font-bold text-green-600">5.2TB</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HostingTab;