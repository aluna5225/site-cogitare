
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ajmdhxsoqqqjhbromitp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqbWRoeHNvcXFxamhicm9taXRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcyMDM5MTQsImV4cCI6MjA3Mjc3OTkxNH0.wkEtaKq6vRI82O68o60FULkJMUSmJX_e07IVauZlmso';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase
