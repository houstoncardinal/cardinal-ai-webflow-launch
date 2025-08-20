import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Code, Smartphone, Palette, Server, TrendingUp, Settings, Plus, Edit } from 'lucide-react';

const ServicesTab = () => {
  const services = [
    {
      id: 1,
      name: "Web Development",
      icon: Code,
      description: "Custom websites and web applications",
      pricing: "$75-150/hr",
      projects: 12,
      revenue: "$45,000",
      capacity: 85,
      status: "Active",
      packages: ["Basic Website", "E-commerce", "Custom App", "Enterprise"]
    },
    {
      id: 2,
      name: "Mobile App Development",
      icon: Smartphone,
      description: "iOS and Android mobile applications",
      pricing: "$100-200/hr",
      projects: 5,
      revenue: "$65,000",
      capacity: 60,
      status: "Active",
      packages: ["MVP App", "Full Featured", "Enterprise App"]
    },
    {
      id: 3,
      name: "Graphic Design",
      icon: Palette,
      description: "Branding, logos, and visual identity",
      pricing: "$50-100/hr",
      projects: 8,
      revenue: "$15,000",
      capacity: 40,
      status: "Active",
      packages: ["Logo Design", "Brand Package", "Complete Identity"]
    },
    {
      id: 4,
      name: "Hosting Services",
      icon: Server,
      description: "Web hosting and cloud infrastructure",
      pricing: "$25-500/month",
      projects: 25,
      revenue: "$8,500",
      capacity: 70,
      status: "Active",
      packages: ["Shared Hosting", "VPS", "Dedicated", "Cloud"]
    },
    {
      id: 5,
      name: "Digital Marketing",
      icon: TrendingUp,
      description: "SEO, PPC, and social media marketing",
      pricing: "$60-120/hr",
      projects: 10,
      revenue: "$28,000",
      capacity: 75,
      status: "Active",
      packages: ["SEO Basic", "PPC Campaign", "Full Marketing", "Enterprise"]
    }
  ];

  const getCapacityColor = (capacity: number) => {
    if (capacity >= 80) return "text-red-600";
    if (capacity >= 60) return "text-yellow-600";
    return "text-green-600";
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Service Management</h2>
          <p className="text-muted-foreground">Manage service offerings, pricing, and capacity</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Service
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </div>
                </div>
                <Badge variant="secondary">{service.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">{service.projects}</div>
                  <div className="text-xs text-muted-foreground">Active Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{service.revenue}</div>
                  <div className="text-xs text-muted-foreground">Revenue</div>
                </div>
                <div>
                  <div className={`text-2xl font-bold ${getCapacityColor(service.capacity)}`}>
                    {service.capacity}%
                  </div>
                  <div className="text-xs text-muted-foreground">Capacity</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Team Capacity</span>
                  <span className={getCapacityColor(service.capacity)}>
                    {service.capacity}%
                  </span>
                </div>
                <Progress value={service.capacity} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium">Pricing: {service.pricing}</div>
                <div className="space-y-1">
                  <div className="text-sm font-medium">Available Packages:</div>
                  <div className="flex flex-wrap gap-1">
                    {service.packages.map((pkg, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {pkg}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button size="sm" className="flex-1">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Service Performance Metrics</CardTitle>
          <CardDescription>Overview of all services performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">60</div>
              <div className="text-sm text-muted-foreground">Total Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">$161,500</div>
              <div className="text-sm text-muted-foreground">Total Monthly Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">68%</div>
              <div className="text-sm text-muted-foreground">Average Team Capacity</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServicesTab;