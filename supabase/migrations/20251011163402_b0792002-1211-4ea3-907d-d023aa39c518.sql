-- Add missing fields to contact_submissions table for better lead tracking
ALTER TABLE public.contact_submissions
ADD COLUMN IF NOT EXISTS phone text,
ADD COLUMN IF NOT EXISTS project_type text,
ADD COLUMN IF NOT EXISTS timeline text,
ADD COLUMN IF NOT EXISTS budget text,
ADD COLUMN IF NOT EXISTS source text DEFAULT 'contact_form',
ADD COLUMN IF NOT EXISTS language text DEFAULT 'en';

-- Add index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON public.contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_source ON public.contact_submissions(source);