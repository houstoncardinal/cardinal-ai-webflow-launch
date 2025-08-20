export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          company: string
          created_at: string | null
          email: string
          first_name: string
          id: string
          last_name: string
          message: string
          notes: string | null
          status: string | null
        }
        Insert: {
          company: string
          created_at?: string | null
          email: string
          first_name: string
          id?: string
          last_name: string
          message: string
          notes?: string | null
          status?: string | null
        }
        Update: {
          company?: string
          created_at?: string | null
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          message?: string
          notes?: string | null
          status?: string | null
        }
        Relationships: []
      }
      newsletter_subscriptions: {
        Row: {
          email: string
          id: string
          is_active: boolean | null
          subscribed_at: string | null
        }
        Insert: {
          email: string
          id?: string
          is_active?: boolean | null
          subscribed_at?: string | null
        }
        Update: {
          email?: string
          id?: string
          is_active?: boolean | null
          subscribed_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          company: string | null
          created_at: string | null
          first_name: string | null
          id: string
          last_name: string | null
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      project_evaluations: {
        Row: {
          created_at: string | null
          email: string
          estimated_budget: Database["public"]["Enums"]["budget_range"] | null
          id: string
          name: string
          notes: string | null
          phone: string | null
          project_description: string | null
          service: Database["public"]["Enums"]["service_type"]
          status: Database["public"]["Enums"]["project_status"] | null
          timeline: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          estimated_budget?: Database["public"]["Enums"]["budget_range"] | null
          id?: string
          name: string
          notes?: string | null
          phone?: string | null
          project_description?: string | null
          service: Database["public"]["Enums"]["service_type"]
          status?: Database["public"]["Enums"]["project_status"] | null
          timeline?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          estimated_budget?: Database["public"]["Enums"]["budget_range"] | null
          id?: string
          name?: string
          notes?: string | null
          phone?: string | null
          project_description?: string | null
          service?: Database["public"]["Enums"]["service_type"]
          status?: Database["public"]["Enums"]["project_status"] | null
          timeline?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      clients: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          company: string | null
          website: string | null
          industry: string | null
          address: string | null
          notes: string | null
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          company?: string | null
          website?: string | null
          industry?: string | null
          address?: string | null
          notes?: string | null
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          company?: string | null
          website?: string | null
          industry?: string | null
          address?: string | null
          notes?: string | null
          status?: string
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          id: string
          name: string
          description: string | null
          client_id: string | null
          service_type: Database["public"]["Enums"]["service_type"]
          status: Database["public"]["Enums"]["project_status"]
          priority: Database["public"]["Enums"]["project_priority"]
          start_date: string | null
          end_date: string | null
          deadline: string | null
          budget: number | null
          actual_cost: number
          progress: number
          team_lead: string | null
          assigned_team: string[] | null
          tags: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          client_id?: string | null
          service_type: Database["public"]["Enums"]["service_type"]
          status?: Database["public"]["Enums"]["project_status"]
          priority?: Database["public"]["Enums"]["project_priority"]
          start_date?: string | null
          end_date?: string | null
          deadline?: string | null
          budget?: number | null
          actual_cost?: number
          progress?: number
          team_lead?: string | null
          assigned_team?: string[] | null
          tags?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          client_id?: string | null
          service_type?: Database["public"]["Enums"]["service_type"]
          status?: Database["public"]["Enums"]["project_status"]
          priority?: Database["public"]["Enums"]["project_priority"]
          start_date?: string | null
          end_date?: string | null
          deadline?: string | null
          budget?: number | null
          actual_cost?: number
          progress?: number
          team_lead?: string | null
          assigned_team?: string[] | null
          tags?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      milestones: {
        Row: {
          id: string
          project_id: string
          name: string
          description: string | null
          status: Database["public"]["Enums"]["milestone_status"]
          start_date: string | null
          end_date: string | null
          deadline: string | null
          progress: number
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          project_id: string
          name: string
          description?: string | null
          status?: Database["public"]["Enums"]["milestone_status"]
          start_date?: string | null
          end_date?: string | null
          deadline?: string | null
          progress?: number
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          name?: string
          description?: string | null
          status?: Database["public"]["Enums"]["milestone_status"]
          start_date?: string | null
          end_date?: string | null
          deadline?: string | null
          progress?: number
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      tasks: {
        Row: {
          id: string
          project_id: string
          milestone_id: string | null
          title: string
          description: string | null
          status: Database["public"]["Enums"]["task_status"]
          priority: Database["public"]["Enums"]["project_priority"]
          assigned_to: string | null
          estimated_hours: number | null
          actual_hours: number
          due_date: string | null
          completed_at: string | null
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          project_id: string
          milestone_id?: string | null
          title: string
          description?: string | null
          status?: Database["public"]["Enums"]["task_status"]
          priority?: Database["public"]["Enums"]["project_priority"]
          assigned_to?: string | null
          estimated_hours?: number | null
          actual_hours?: number
          due_date?: string | null
          completed_at?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          milestone_id?: string | null
          title?: string
          description?: string | null
          status?: Database["public"]["Enums"]["task_status"]
          priority?: Database["public"]["Enums"]["project_priority"]
          assigned_to?: string | null
          estimated_hours?: number | null
          actual_hours?: number
          due_date?: string | null
          completed_at?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      project_documents: {
        Row: {
          id: string
          project_id: string
          name: string
          description: string | null
          file_type: Database["public"]["Enums"]["document_type"]
          file_url: string | null
          file_size: number | null
          uploaded_by: string | null
          created_at: string
        }
        Insert: {
          id?: string
          project_id: string
          name: string
          description?: string | null
          file_type: Database["public"]["Enums"]["document_type"]
          file_url?: string | null
          file_size?: number | null
          uploaded_by?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          name?: string
          description?: string | null
          file_type?: Database["public"]["Enums"]["document_type"]
          file_url?: string | null
          file_size?: number | null
          uploaded_by?: string | null
          created_at?: string
        }
        Relationships: []
      }
      project_notes: {
        Row: {
          id: string
          project_id: string
          title: string
          content: string
          author_id: string | null
          is_private: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          project_id: string
          title: string
          content: string
          author_id?: string | null
          is_private?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          title?: string
          content?: string
          author_id?: string | null
          is_private?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      time_entries: {
        Row: {
          id: string
          project_id: string
          task_id: string | null
          user_id: string | null
          description: string
          hours: number
          date: string
          billable: boolean
          created_at: string
        }
        Insert: {
          id?: string
          project_id: string
          task_id?: string | null
          user_id?: string | null
          description: string
          hours: number
          date: string
          billable?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          task_id?: string | null
          user_id?: string | null
          description?: string
          hours?: number
          date?: string
          billable?: boolean
          created_at?: string
        }
        Relationships: []
      }
      project_expenses: {
        Row: {
          id: string
          project_id: string
          description: string
          amount: number
          category: string | null
          date: string
          receipt_url: string | null
          approved_by: string | null
          created_at: string
        }
        Insert: {
          id?: string
          project_id: string
          description: string
          amount: number
          category?: string | null
          date: string
          receipt_url?: string | null
          approved_by?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          description?: string
          amount?: number
          category?: string | null
          date?: string
          receipt_url?: string | null
          approved_by?: string | null
          created_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _user_id: string
          _role: Database["public"]["Enums"]["app_role"]
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "client" | "lead"
      budget_range:
        | "under-10k"
        | "10k-25k"
        | "25k-50k"
        | "50k-100k"
        | "over-100k"
      project_status:
        | "new"
        | "in-review"
        | "quoted"
        | "approved"
        | "in-progress"
        | "completed"
        | "cancelled"
      service_type:
        | "web-development"
        | "mobile-applications"
        | "web-applications"
        | "cloud-solutions"
        | "seo-insights"
        | "brand-identity"
        | "digital-campaigns"
        | "experience-optimization"
      project_priority: "low" | "medium" | "high" | "critical"
      milestone_status: "not-started" | "in-progress" | "completed" | "delayed" | "cancelled"
      task_status: "todo" | "in-progress" | "review" | "completed" | "blocked"
      document_type: "contract" | "proposal" | "design" | "technical" | "invoice" | "report" | "other"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "client", "lead"],
      budget_range: [
        "under-10k",
        "10k-25k",
        "25k-50k",
        "50k-100k",
        "over-100k",
      ],
      project_status: [
        "new",
        "in-review",
        "quoted",
        "approved",
        "in-progress",
        "completed",
        "cancelled",
      ],
      service_type: [
        "web-development",
        "mobile-applications",
        "web-applications",
        "cloud-solutions",
        "seo-insights",
        "brand-identity",
        "digital-campaigns",
        "experience-optimization",
      ],
    },
  },
} as const

// Project Management Type Aliases for convenience
export type Client = Database['public']['Tables']['clients']['Row'];
export type Project = Database['public']['Tables']['projects']['Row'];
export type Milestone = Database['public']['Tables']['milestones']['Row'];
export type Task = Database['public']['Tables']['tasks']['Row'];
export type ProjectDocument = Database['public']['Tables']['project_documents']['Row'];
export type ProjectNote = Database['public']['Tables']['project_notes']['Row'];
export type TimeEntry = Database['public']['Tables']['time_entries']['Row'];
export type ProjectExpense = Database['public']['Tables']['project_expenses']['Row'];

// Insert types
export type ClientInsert = Database['public']['Tables']['clients']['Insert'];
export type ProjectInsert = Database['public']['Tables']['projects']['Insert'];
export type MilestoneInsert = Database['public']['Tables']['milestones']['Insert'];
export type TaskInsert = Database['public']['Tables']['tasks']['Insert'];
export type ProjectDocumentInsert = Database['public']['Tables']['project_documents']['Insert'];
export type ProjectNoteInsert = Database['public']['Tables']['project_notes']['Insert'];
export type TimeEntryInsert = Database['public']['Tables']['time_entries']['Insert'];
export type ProjectExpenseInsert = Database['public']['Tables']['project_expenses']['Insert'];

// Update types
export type ClientUpdate = Database['public']['Tables']['clients']['Update'];
export type ProjectUpdate = Database['public']['Tables']['projects']['Update'];
export type MilestoneUpdate = Database['public']['Tables']['milestones']['Update'];
export type TaskUpdate = Database['public']['Tables']['tasks']['Update'];
export type ProjectDocumentUpdate = Database['public']['Tables']['project_documents']['Update'];
export type ProjectNoteUpdate = Database['public']['Tables']['project_notes']['Update'];
export type TimeEntryUpdate = Database['public']['Tables']['time_entries']['Update'];
export type ProjectExpenseUpdate = Database['public']['Tables']['project_expenses']['Update'];

// Enum type aliases
export type ProjectPriority = Database['public']['Enums']['project_priority'];
export type MilestoneStatus = Database['public']['Enums']['milestone_status'];
export type TaskStatus = Database['public']['Enums']['task_status'];
export type DocumentType = Database['public']['Enums']['document_type'];
