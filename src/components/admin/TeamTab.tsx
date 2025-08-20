import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Mail, Phone, Calendar, Clock, Code, Palette, TrendingUp, Plus, UserPlus } from 'lucide-react';

const TeamTab = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Developer",
      role: "Senior Full Stack Developer",
      department: "Development",
      email: "john@company.com",
      phone: "+1 (555) 123-4567",
      workload: 85,
      currentProjects: 3,
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      status: "Active",
      joinDate: "2022-03-15",
      performance: 95
    },
    {
      id: 2,
      name: "Sarah Designer",
      role: "Lead UI/UX Designer",
      department: "Design",
      email: "sarah@company.com",
      phone: "+1 (555) 987-6543",
      workload: 70,
      currentProjects: 2,
      skills: ["Figma", "Adobe CC", "Prototyping", "User Research"],
      status: "Active",
      joinDate: "2021-08-20",
      performance: 92
    },
    {
      id: 3,
      name: "Mike Marketing",
      role: "Digital Marketing Specialist",
      department: "Marketing",
      email: "mike@company.com",
      phone: "+1 (555) 456-7890",
      workload: 60,
      currentProjects: 4,
      skills: ["SEO", "Google Ads", "Analytics", "Content Strategy"],
      status: "Active",
      joinDate: "2023-01-10",
      performance: 88
    },
    {
      id: 4,
      name: "Alex Mobile",
      role: "Mobile App Developer",
      department: "Development",
      email: "alex@company.com",
      phone: "+1 (555) 321-0987",
      workload: 90,
      currentProjects: 2,
      skills: ["React Native", "Swift", "Kotlin", "Firebase"],
      status: "Active",
      joinDate: "2022-11-05",
      performance: 96
    },
    {
      id: 5,
      name: "Emma Support",
      role: "Project Manager",
      department: "Operations",
      email: "emma@company.com",
      phone: "+1 (555) 789-0123",
      workload: 75,
      currentProjects: 6,
      skills: ["Agile", "Scrum", "Jira", "Team Leadership"],
      status: "Active",
      joinDate: "2021-05-12",
      performance: 94
    }
  ];

  const getDepartmentIcon = (department: string) => {
    switch (department) {
      case 'Development': return Code;
      case 'Design': return Palette;
      case 'Marketing': return TrendingUp;
      default: return Clock;
    }
  };

  const getWorkloadColor = (workload: number) => {
    if (workload >= 85) return "text-red-600";
    if (workload >= 70) return "text-yellow-600";
    return "text-green-600";
  };

  const getPerformanceColor = (performance: number) => {
    if (performance >= 90) return "text-green-600";
    if (performance >= 80) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Team Management</h2>
          <p className="text-muted-foreground">Manage team members, workload, and performance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <UserPlus className="mr-2 h-4 w-4" />
            Invite Member
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Member
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map((member) => {
          const DepartmentIcon = getDepartmentIcon(member.department);
          return (
            <Card key={member.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary">{member.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <DepartmentIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{member.department}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{member.joinDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{member.currentProjects} projects</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Current Workload</span>
                    <span className={getWorkloadColor(member.workload)}>
                      {member.workload}%
                    </span>
                  </div>
                  <Progress value={member.workload} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Performance Score</span>
                    <span className={getPerformanceColor(member.performance)}>
                      {member.performance}%
                    </span>
                  </div>
                  <Progress value={member.performance} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">Skills</div>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    View Profile
                  </Button>
                  <Button size="sm" className="flex-1">
                    Assign Task
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Team Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Total Members</span>
                <span className="font-bold">5</span>
              </div>
              <div className="flex justify-between">
                <span>Active Projects</span>
                <span className="font-bold">17</span>
              </div>
              <div className="flex justify-between">
                <span>Avg Performance</span>
                <span className="font-bold text-green-600">93%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Department Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Development</span>
                <span className="font-bold">2</span>
              </div>
              <div className="flex justify-between">
                <span>Design</span>
                <span className="font-bold">1</span>
              </div>
              <div className="flex justify-between">
                <span>Marketing</span>
                <span className="font-bold">1</span>
              </div>
              <div className="flex justify-between">
                <span>Operations</span>
                <span className="font-bold">1</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Workload Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-red-600">High (80%+)</span>
                <span className="font-bold">2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-yellow-600">Medium (60-79%)</span>
                <span className="font-bold">2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-600">Low (0-59%)</span>
                <span className="font-bold">1</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeamTab;