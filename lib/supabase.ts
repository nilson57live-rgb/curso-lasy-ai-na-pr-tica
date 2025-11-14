import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types para o banco de dados
export type User = {
  id: string
  email: string
  name: string
  created_at: string
}

export type Module = {
  id: number
  title: string
  description: string
  video_url?: string
  content: string
  order: number
}

export type UserProgress = {
  id: string
  user_id: string
  module_id: number
  completed: boolean
  completed_at?: string
  progress_percentage: number
}

export type Lead = {
  id: string
  name: string
  email: string
  created_at: string
  ebook_sent: boolean
}
