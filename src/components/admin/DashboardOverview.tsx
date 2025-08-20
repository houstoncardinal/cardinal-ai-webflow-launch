import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, DollarSign, Clock, Server, Smartphone } from 'lucide-react';

const DashboardOverview = () => {
  const stats = [
    { title: "Active Projects", value: "24", change: "+12%", icon: Clock, color: "text-blue-600" },
    { title: "Total Clients", value: "156", change: "+8%", icon: Users, color: "text-green-600" },
    { title: "Monthly Revenue", value: "$45,200", change: "+23%", icon: DollarSign, color: "text-emerald-600" },
    { title: "Server Uptime", value: "99.8%", change: "+0.2%", icon: Server, color: "text-purple-600" },
    { title: "Mobile Apps", value: "12", change: "+3", icon: Smartphone, color: "text-orange-600" },
    { title: "Growth Rate", value: "18%", change: "+5%", icon: TrendingUp, color: "text-pink-600" },
  ];

  const recentActivity = [
    { type: "Project", title: "E-commerce Website", client: "TechCorp", status: "In Progress", time: "2 hours ago" },
    { type: "Hosting", title: "Server Migration", client: "StartupXYZ", status: "Completed", time: "5 hours ago" },
    { type: "Design", title: "Brand Identity", client: "Creative Agency", status: "Review", time: "1 day ago" },
    { type: "Mobile", title: "iOS App Update", client: "FitLife", status: "Testing", time: "2 days ago" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates across all departments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{activity.type}</Badge>
                      <span className="font-medium">{activity.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Client: {activity.client}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge variant={activity.status === 'Completed' ? 'default' : 'secondary'}>
                      {activity.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Service Performance</CardTitle>
            <CardDescription>Performance metrics by service type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { service: "Web Development", projects: 8, revenue: "$18,500", satisfaction: "98%" },
                { service: "Mobile Apps", projects: 3, revenue: "$12,000", satisfaction: "95%" },
                { service: "Digital Marketing", projects: 6, revenue: "$8,700", satisfaction: "92%" },
                { service: "Hosting Services", projects: 15, revenue: "$3,200", satisfaction: "99%" },
                { service: "Graphic Design", projects: 4, revenue: "$2,800", satisfaction: "97%" },
              ].map((service, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{service.service}</span>
                    <span className="text-sm text-muted-foreground">{service.satisfaction} satisfaction</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{service.projects} active projects</span>
                    <span className="font-medium text-foreground">{service.revenue}</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: service.satisfaction }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;