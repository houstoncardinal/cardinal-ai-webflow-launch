export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          author_name: string
          content: string
          created_at: string | null
          excerpt: string | null
          id: string
          is_featured: boolean | null
          meta_description: string | null
          meta_title: string | null
          published_at: string | null
          reading_time: number | null
          slug: string
          status: string
          tags: string[] | null
          thumbnail_url: string | null
          title: string
          updated_at: string | null
          views_count: number | null
        }
        Insert: {
          author_name?: string
          content: string
          created_at?: string | null
          excerpt?: string | null
          id?: string
          is_featured?: boolean | null
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          reading_time?: number | null
          slug: string
          status?: string
          tags?: string[] | null
          thumbnail_url?: string | null
          title: string
          updated_at?: string | null
          views_count?: number | null
        }
        Update: {
          author_name?: string
          content?: string
          created_at?: string | null
          excerpt?: string | null
          id?: string
          is_featured?: boolean | null
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          reading_time?: number | null
          slug?: string
          status?: string
          tags?: string[] | null
          thumbnail_url?: string | null
          title?: string
          updated_at?: string | null
          views_count?: number | null
        }
        Relationships: []
      }
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
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
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
