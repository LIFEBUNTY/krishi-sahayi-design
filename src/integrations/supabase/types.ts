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
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      crop_diseases: {
        Row: {
          created_at: string
          crop: string
          disease_name: string
          id: string
          image_url: string | null
          region: string | null
          season: string | null
          solution: string | null
          symptoms: string | null
        }
        Insert: {
          created_at?: string
          crop: string
          disease_name: string
          id?: string
          image_url?: string | null
          region?: string | null
          season?: string | null
          solution?: string | null
          symptoms?: string | null
        }
        Update: {
          created_at?: string
          crop?: string
          disease_name?: string
          id?: string
          image_url?: string | null
          region?: string | null
          season?: string | null
          solution?: string | null
          symptoms?: string | null
        }
        Relationships: []
      }
      escalations: {
        Row: {
          escalated_at: string
          id: string
          notes: string | null
          officer_id: string | null
          query_id: string
          resolved_at: string | null
          status: string | null
        }
        Insert: {
          escalated_at?: string
          id?: string
          notes?: string | null
          officer_id?: string | null
          query_id: string
          resolved_at?: string | null
          status?: string | null
        }
        Update: {
          escalated_at?: string
          id?: string
          notes?: string | null
          officer_id?: string | null
          query_id?: string
          resolved_at?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "escalations_query_id_fkey"
            columns: ["query_id"]
            isOneToOne: false
            referencedRelation: "queries"
            referencedColumns: ["id"]
          },
        ]
      }
      feedback: {
        Row: {
          comment: string | null
          id: string
          is_helpful: boolean | null
          query_id: string
          submitted_at: string
        }
        Insert: {
          comment?: string | null
          id?: string
          is_helpful?: boolean | null
          query_id: string
          submitted_at?: string
        }
        Update: {
          comment?: string | null
          id?: string
          is_helpful?: boolean | null
          query_id?: string
          submitted_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "feedback_query_id_fkey"
            columns: ["query_id"]
            isOneToOne: false
            referencedRelation: "queries"
            referencedColumns: ["id"]
          },
        ]
      }
      government_schemes: {
        Row: {
          benefit: string | null
          created_at: string
          crop: string | null
          description: string | null
          eligibility: string | null
          id: string
          official_link: string | null
          region: string | null
          scheme_name: string
        }
        Insert: {
          benefit?: string | null
          created_at?: string
          crop?: string | null
          description?: string | null
          eligibility?: string | null
          id?: string
          official_link?: string | null
          region?: string | null
          scheme_name: string
        }
        Update: {
          benefit?: string | null
          created_at?: string
          crop?: string | null
          description?: string | null
          eligibility?: string | null
          id?: string
          official_link?: string | null
          region?: string | null
          scheme_name?: string
        }
        Relationships: []
      }
      queries: {
        Row: {
          crop: string | null
          district: string | null
          id: string
          image_url: string | null
          issue_type: string | null
          original_language: string | null
          query_text: string
          submitted_at: string
          taluk: string | null
          user_id: string
        }
        Insert: {
          crop?: string | null
          district?: string | null
          id?: string
          image_url?: string | null
          issue_type?: string | null
          original_language?: string | null
          query_text: string
          submitted_at?: string
          taluk?: string | null
          user_id: string
        }
        Update: {
          crop?: string | null
          district?: string | null
          id?: string
          image_url?: string | null
          issue_type?: string | null
          original_language?: string | null
          query_text?: string
          submitted_at?: string
          taluk?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "queries_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      responses: {
        Row: {
          answer_english: string | null
          answer_malayalam: string | null
          created_at: string
          id: string
          query_id: string
          tts_audio_url: string | null
        }
        Insert: {
          answer_english?: string | null
          answer_malayalam?: string | null
          created_at?: string
          id?: string
          query_id: string
          tts_audio_url?: string | null
        }
        Update: {
          answer_english?: string | null
          answer_malayalam?: string | null
          created_at?: string
          id?: string
          query_id?: string
          tts_audio_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "responses_query_id_fkey"
            columns: ["query_id"]
            isOneToOne: false
            referencedRelation: "queries"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          auth_id: string | null
          created_at: string
          district: string | null
          id: string
          language: string | null
          name: string
          phone_number: string | null
          taluk: string | null
          updated_at: string
        }
        Insert: {
          auth_id?: string | null
          created_at?: string
          district?: string | null
          id?: string
          language?: string | null
          name: string
          phone_number?: string | null
          taluk?: string | null
          updated_at?: string
        }
        Update: {
          auth_id?: string | null
          created_at?: string
          district?: string | null
          id?: string
          language?: string | null
          name?: string
          phone_number?: string | null
          taluk?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      weather_forecast: {
        Row: {
          created_at: string
          date: string
          district: string
          id: string
          rainfall_mm: number | null
          temperature: number | null
          weather: string | null
        }
        Insert: {
          created_at?: string
          date: string
          district: string
          id?: string
          rainfall_mm?: number | null
          temperature?: number | null
          weather?: string | null
        }
        Update: {
          created_at?: string
          date?: string
          district?: string
          id?: string
          rainfall_mm?: number | null
          temperature?: number | null
          weather?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
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
    Enums: {},
  },
} as const
