import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uclddfkieqtxcwepxtpq.supabase.co';
const supabaseAnonKey = 'sb_publishable_uEDHXsUq4x_wmipT5XZWZA_viv9uBeu';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Project {
  id: string;
  title: string;
  short_description: string;
  full_description: string;
  thumbnail_url: string;
  technologies: string[];
  key_achievements: string[];
  methodology: string;
  category: string;
  demo_url: string | null;
  github_url: string | null;
  order_index: number;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
}
