-- Project Management System for Cardinal Consulting
-- This migration adds comprehensive project management capabilities

-- Create enum types for project management
CREATE TYPE public.project_priority AS ENUM (
  'low',
  'medium', 
  'high',
  'critical'
);

CREATE TYPE public.milestone_status AS ENUM (
  'not-started',
  'in-progress',
  'completed',
  'delayed',
  'cancelled'
);

CREATE TYPE public.task_status AS ENUM (
  'todo',
  'in-progress',
  'review',
  'completed',
  'blocked'
);

CREATE TYPE public.document_type AS ENUM (
  'contract',
  'proposal',
  'design',
  'technical',
  'invoice',
  'report',
  'other'
);

-- Create clients table
CREATE TABLE public.clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  website TEXT,
  industry TEXT,
  address TEXT,
  notes TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create projects table
CREATE TABLE public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  client_id UUID REFERENCES public.clients(id) ON DELETE SET NULL,
  service_type service_type NOT NULL,
  status project_status DEFAULT 'new',
  priority project_priority DEFAULT 'medium',
  start_date DATE,
  end_date DATE,
  deadline DATE,
  budget DECIMAL(12,2),
  actual_cost DECIMAL(12,2) DEFAULT 0,
  progress INTEGER DEFAULT 0,
  team_lead UUID REFERENCES auth.users(id),
  assigned_team TEXT[], -- Array of user IDs
  tags TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create milestones table
CREATE TABLE public.milestones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  status milestone_status DEFAULT 'not-started',
  start_date DATE,
  end_date DATE,
  deadline DATE,
  progress INTEGER DEFAULT 0,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create tasks table
CREATE TABLE public.tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
  milestone_id UUID REFERENCES public.milestones(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  description TEXT,
  status task_status DEFAULT 'todo',
  priority project_priority DEFAULT 'medium',
  assigned_to UUID REFERENCES auth.users(id),
  estimated_hours DECIMAL(5,2),
  actual_hours DECIMAL(5,2) DEFAULT 0,
  due_date DATE,
  completed_at TIMESTAMP WITH TIME ZONE,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create project documents table
CREATE TABLE public.project_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  file_type document_type NOT NULL,
  file_url TEXT,
  file_size INTEGER,
  uploaded_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create project notes table
CREATE TABLE public.project_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author_id UUID REFERENCES auth.users(id),
  is_private BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create project time entries table
CREATE TABLE public.time_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
  task_id UUID REFERENCES public.tasks(id) ON DELETE SET NULL,
  user_id UUID REFERENCES auth.users(id),
  description TEXT NOT NULL,
  hours DECIMAL(4,2) NOT NULL,
  date DATE NOT NULL,
  billable BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create project expenses table
CREATE TABLE public.project_expenses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
  description TEXT NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  category TEXT,
  date DATE NOT NULL,
  receipt_url TEXT,
  approved_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.milestones ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.time_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_expenses ENABLE ROW LEVEL SECURITY;

-- Admin policies for all project management tables
CREATE POLICY "Admins can manage clients" ON public.clients
  FOR ALL TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() AND role = 'admin'
  ));

CREATE POLICY "Admins can manage projects" ON public.projects
  FOR ALL TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() AND role = 'admin'
  ));

CREATE POLICY "Admins can manage milestones" ON public.milestones
  FOR ALL TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() AND role = 'admin'
  ));

CREATE POLICY "Admins can manage tasks" ON public.tasks
  FOR ALL TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() AND role = 'admin'
  ));

CREATE POLICY "Admins can manage documents" ON public.project_documents
  FOR ALL TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() AND role = 'admin'
  ));

CREATE POLICY "Admins can manage notes" ON public.project_notes
  FOR ALL TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() AND role = 'admin'
  ));

CREATE POLICY "Admins can manage time entries" ON public.time_entries
  FOR ALL TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() AND role = 'admin'
  ));

CREATE POLICY "Admins can manage expenses" ON public.project_expenses
  FOR ALL TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() AND role = 'admin'
  ));

-- Add indexes for better performance
CREATE INDEX idx_projects_client_id ON public.projects(client_id);
CREATE INDEX idx_projects_status ON public.projects(status);
CREATE INDEX idx_projects_priority ON public.projects(priority);
CREATE INDEX idx_milestones_project_id ON public.milestones(project_id);
CREATE INDEX idx_tasks_project_id ON public.tasks(project_id);
CREATE INDEX idx_tasks_milestone_id ON public.tasks(milestone_id);
CREATE INDEX idx_tasks_assigned_to ON public.tasks(assigned_to);
CREATE INDEX idx_documents_project_id ON public.project_documents(project_id);
CREATE INDEX idx_notes_project_id ON public.project_notes(project_id);
CREATE INDEX idx_time_entries_project_id ON public.time_entries(project_id);
CREATE INDEX idx_time_entries_user_id ON public.time_entries(user_id);
CREATE INDEX idx_expenses_project_id ON public.project_expenses(project_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_clients_updated_at BEFORE UPDATE ON public.clients
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON public.projects
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_milestones_updated_at BEFORE UPDATE ON public.milestones
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_tasks_updated_at BEFORE UPDATE ON public.tasks
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_notes_updated_at BEFORE UPDATE ON public.project_notes
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data for testing
INSERT INTO public.clients (name, email, company, industry, status) VALUES
('TechCorp Solutions', 'contact@techcorp.com', 'TechCorp Solutions', 'Technology', 'active'),
('FinanceFirst Bank', 'projects@financefirst.com', 'FinanceFirst Bank', 'Finance', 'active'),
('Creative Studio Inc', 'hello@creativestudio.com', 'Creative Studio Inc', 'Creative', 'active'),
('Local Business Co', 'info@localbusiness.com', 'Local Business Co', 'Retail', 'active'),
('Enterprise Corp', 'enterprise@corp.com', 'Enterprise Corp', 'Enterprise', 'active');

-- Insert sample projects
INSERT INTO public.projects (name, description, client_id, service_type, status, priority, start_date, end_date, deadline, budget, progress) 
SELECT 
  'E-commerce Platform',
  'Modern e-commerce platform with advanced features',
  c.id,
  'web-development',
  'in-progress',
  'high',
  '2024-01-15',
  '2024-03-15',
  '2024-03-15',
  25000.00,
  65
FROM public.clients c WHERE c.name = 'TechCorp Solutions';

INSERT INTO public.projects (name, description, client_id, service_type, status, priority, start_date, end_date, deadline, budget, progress)
SELECT 
  'Mobile Banking App',
  'Secure mobile banking application for iOS and Android',
  c.id,
  'mobile-applications',
  'in-progress',
  'critical',
  '2024-01-01',
  '2024-02-28',
  '2024-02-28',
  45000.00,
  85
FROM public.clients c WHERE c.name = 'FinanceFirst Bank';

INSERT INTO public.projects (name, description, client_id, service_type, status, priority, start_date, end_date, deadline, budget, progress)
SELECT 
  'Brand Identity Package',
  'Complete brand identity including logo, colors, and guidelines',
  c.id,
  'brand-identity',
  'in-progress',
  'medium',
  '2024-01-20',
  '2024-02-20',
  '2024-02-20',
  8500.00,
  90
FROM public.clients c WHERE c.name = 'Creative Studio Inc'; 