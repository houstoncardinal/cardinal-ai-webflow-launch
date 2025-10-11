import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FolderOpen, 
  Users, 
  Briefcase, 
  UserCheck, 
  CreditCard, 
  Server, 
  TrendingUp,
  Crown,
  ChevronLeft,
  LogOut,
  Settings,
  Award,
  Sparkles
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const navItems = [
  { title: "Overview", url: "/admin?tab=overview", icon: LayoutDashboard },
  { title: "Projects", url: "/admin?tab=projects", icon: FolderOpen },
  { title: "Clients", url: "/admin?tab=clients", icon: Users },
  { title: "Services", url: "/admin?tab=services", icon: Briefcase },
  { title: "Team", url: "/admin?tab=team", icon: UserCheck },
  { title: "Finance", url: "/admin?tab=finance", icon: CreditCard },
  { title: "Hosting", url: "/admin?tab=hosting", icon: Server },
  { title: "Marketing", url: "/admin?tab=marketing", icon: TrendingUp },
];

interface AdminSidebarProps {
  onSignOut: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function AdminSidebar({ onSignOut, activeTab, onTabChange }: AdminSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const location = useLocation();

  const isActive = (url: string) => {
    const tab = new URLSearchParams(url.split('?')[1]).get('tab') || 'overview';
    return activeTab === tab;
  };

  return (
    <Sidebar
      className={`border-r border-emerald-100/50 bg-gradient-to-b from-white to-emerald-50/30 transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-72'
      }`}
      collapsible="icon"
    >
      {/* Logo Header */}
      <SidebarHeader className="border-b border-emerald-100/50 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl blur-md opacity-50"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg">
                <Crown className="w-7 h-7 text-white" />
              </div>
            </div>
            {!collapsed && (
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent">
                  Cardinal
                </h1>
                <p className="text-xs text-emerald-600 font-semibold tracking-wide">ENTERPRISE</p>
              </div>
            )}
          </div>
          {!collapsed && <SidebarTrigger className="text-emerald-600 hover:text-emerald-700" />}
        </div>
      </SidebarHeader>

      {/* Navigation Content */}
      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          {!collapsed && (
            <SidebarGroupLabel className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-3 px-3">
              Navigation
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navItems.map((item) => {
                const active = isActive(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`
                        group relative rounded-xl transition-all duration-200 h-12
                        ${active 
                          ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40' 
                          : 'text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800'
                        }
                      `}
                    >
                      <button
                        onClick={() => {
                          const tab = new URLSearchParams(item.url.split('?')[1]).get('tab') || 'overview';
                          onTabChange(tab);
                        }}
                      >
                        <div className="flex items-center gap-3 px-3">
                          <item.icon className={`h-5 w-5 ${active ? 'text-white' : 'text-emerald-600'}`} />
                          {!collapsed && (
                            <span className="font-semibold text-sm">{item.title}</span>
                          )}
                          {active && !collapsed && (
                            <Sparkles className="ml-auto h-4 w-4 text-emerald-200" />
                          )}
                        </div>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator className="my-6 bg-emerald-100" />

        {/* System Status */}
        {!collapsed && (
          <div className="px-4 py-4 mx-2 bg-white border border-emerald-100 rounded-xl shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">System Online</span>
            </div>
            <div className="text-xs text-emerald-600 space-y-1">
              <div className="flex justify-between">
                <span>Uptime</span>
                <span className="font-semibold">99.9%</span>
              </div>
              <div className="flex justify-between">
                <span>Performance</span>
                <span className="font-semibold text-emerald-600">Excellent</span>
              </div>
            </div>
          </div>
        )}
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t border-emerald-100/50 bg-white/80 backdrop-blur-sm p-4">
        {!collapsed ? (
          <div className="space-y-3">
            <div className="flex items-center gap-3 px-3 py-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center shadow-md">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-emerald-900">Admin User</p>
                <p className="text-xs text-emerald-600">System Administrator</p>
              </div>
            </div>
            <Separator className="bg-emerald-100" />
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-300"
              >
                <Settings className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={onSignOut}
                className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 hover:border-red-300"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <Button
              variant="outline"
              size="icon"
              className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50"
            >
              <Settings className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={onSignOut}
              className="w-full border-red-200 text-red-600 hover:bg-red-50"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
