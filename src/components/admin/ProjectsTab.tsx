import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Calendar, User, DollarSign, Clock, Plus, Filter } from 'lucide-react';

const ProjectsTab = () => {
  const projects = [
    {
      id: 1,
      name: "E-commerce Platform",
      client: "TechCorp Solutions",
      type: "Web Development",
      status: "In Progress",
      progress: 65,
      deadline: "2024-03-15",
      budget: "$25,000",
      team: ["John D.", "Sarah M.", "Mike R."],
      priority: "High"
    },
    {
      id: 2,
      name: "Mobile Banking App",
      client: "FinanceFirst",
      type: "Mobile Development",
      status: "Testing",
      progress: 85,
      deadline: "2024-02-28",
      budget: "$45,000",
      team: ["Alex K.", "Emma L."],
      priority: "Critical"
    },
    {
      id: 3,
      name: "Brand Identity Package",
      client: "Creative Studio",
      type: "Graphic Design",
      status: "Review",
      progress: 90,
      deadline: "2024-02-20",
      budget: "$8,500",
      team: ["Lisa P.", "Tom W."],
      priority: "Medium"
    },
    {
      id: 4,
      name: "SEO Campaign",
      client: "Local Business",
      type: "Digital Marketing",
      status: "Active",
      progress: 40,
      deadline: "2024-04-30",
      budget: "$12,000",
      team: ["Rachel B.", "David H."],
      priority: "Medium"
    },
    {
      id: 5,
      name: "Cloud Migration",
      client: "Enterprise Corp",
      type: "Hosting",
      status: "Planning",
      progress: 15,
      deadline: "2024-05-15",
      budget: "$35,000",
      team: ["Kevin S.", "Julia F."],
      priority: "High"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
      case 'In Progress': return 'bg-blue-500';
      case 'Testing': return 'bg-yellow-500';
      case 'Review': return 'bg-purple-500';
      case 'Planning': return 'bg-gray-500';
      case 'Completed': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'bg-red-500';
      case 'High': return 'bg-orange-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Project Management</h2>
          <p className="text-muted-foreground">Track and manage all ongoing projects</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription>{project.client}</CardDescription>
                </div>
                <div className="flex flex-col gap-1">
                  <Badge className={getPriorityColor(project.priority)}>
                    {project.priority}
                  </Badge>
                  <Badge className={getStatusColor(project.status)} variant="secondary">
                    {project.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Badge variant="outline">{project.type}</Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{project.deadline}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span>{project.budget}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>Team ({project.team.length})</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.team.map((member, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {member}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1">
                  View Details
                </Button>
                <Button size="sm" className="flex-1">
                  Update
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsTab;