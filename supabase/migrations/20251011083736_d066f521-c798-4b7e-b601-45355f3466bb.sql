-- Create enums
CREATE TYPE public.app_role AS ENUM ('admin', 'client', 'lead');
CREATE TYPE public.budget_range AS ENUM ('under-10k', '10k-25k', '25k-50k', '50k-100k', 'over-100k');
CREATE TYPE public.project_status AS ENUM ('new', 'in-review', 'quoted', 'approved', 'in-progress', 'completed', 'cancelled');
CREATE TYPE public.service_type AS ENUM ('web-development', 'mobile-applications', 'web-applications', 'cloud-solutions', 'seo-insights', 'brand-identity', 'digital-campaigns', 'experience-optimization');

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID NOT NULL PRIMARY KEY,
  company TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  role public.app_role NOT NULL,
  user_id UUID NOT NULL
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT
  USING (auth.uid() = user_id);

-- Create security definer function for role checking
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  author_name TEXT NOT NULL DEFAULT 'Admin',
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  excerpt TEXT,
  is_featured BOOLEAN DEFAULT false,
  meta_description TEXT,
  meta_title TEXT,
  published_at TIMESTAMP WITH TIME ZONE,
  reading_time INTEGER,
  slug TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'draft',
  tags TEXT[],
  thumbnail_url TEXT,
  title TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  views_count INTEGER DEFAULT 0
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Blog posts are viewable by everyone"
  ON public.blog_posts FOR SELECT
  USING (status = 'published' OR auth.uid() IS NOT NULL);

CREATE POLICY "Only admins can insert blog posts"
  ON public.blog_posts FOR INSERT
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update blog posts"
  ON public.blog_posts FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete blog posts"
  ON public.blog_posts FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'));

-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  company TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  email TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  message TEXT NOT NULL,
  notes TEXT,
  status TEXT DEFAULT 'new'
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Only admins can view contact submissions"
  ON public.contact_submissions FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Anyone can insert contact submissions"
  ON public.contact_submissions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Only admins can update contact submissions"
  ON public.contact_submissions FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'));

-- Create newsletter_subscriptions table
CREATE TABLE public.newsletter_subscriptions (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  is_active BOOLEAN DEFAULT true,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Only admins can view newsletter subscriptions"
  ON public.newsletter_subscriptions FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Anyone can subscribe to newsletter"
  ON public.newsletter_subscriptions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Only admins can update subscriptions"
  ON public.newsletter_subscriptions FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'));

-- Create project_evaluations table
CREATE TABLE public.project_evaluations (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  email TEXT NOT NULL,
  estimated_budget public.budget_range,
  name TEXT NOT NULL,
  notes TEXT,
  phone TEXT,
  project_description TEXT,
  service public.service_type NOT NULL,
  status public.project_status DEFAULT 'new',
  timeline TEXT
);

ALTER TABLE public.project_evaluations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Only admins can view project evaluations"
  ON public.project_evaluations FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Anyone can submit project evaluations"
  ON public.project_evaluations FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Only admins can update project evaluations"
  ON public.project_evaluations FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'));

-- Create trigger function for updating updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();