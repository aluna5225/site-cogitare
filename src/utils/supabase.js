
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cmvsglbgaqangzaxgesp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtdnNnbGJnYXFhbmd6YXhnZXNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzODk5NTgsImV4cCI6MjA2NDk2NTk1OH0.x5XXguwM_-1VLsJ_vw9A8NcsqWOXblMspTFZcOuAF2c';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase
