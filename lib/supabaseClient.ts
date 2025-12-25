
import { createClient } from '@supabase/supabase-js';

// Support both process.env and import.meta.env patterns
const env = (window as any).process?.env || (import.meta as any).env || {};

const supabaseUrl = env.VITE_SUPABASE_URL || 'https://tu-proyecto.supabase.co';
const supabaseKey = env.VITE_SUPABASE_ANON_KEY || 'tu-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);
