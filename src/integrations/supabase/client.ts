
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gpwlxdeorevbxrvfmkam.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdwd2x4ZGVvcmV2YnhydmZta2FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MzYxNjAsImV4cCI6MjA2NDExMjE2MH0.AabYV7t_yNSl3LngEBRfFh0EbZaNtGeH4lOLrN5dFCo'

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
})
