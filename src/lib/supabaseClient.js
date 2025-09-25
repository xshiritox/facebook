import { createClient } from '@supabase/supabase-js'

// Configuración directa sin variables de entorno
const supabaseUrl = 'https://nbaujlouhlihofuotcvf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5iYXVqbG91aGxpaG9mdW90Y3ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4MzU1NDcsImV4cCI6MjA3NDQxMTU0N30.Io6nlpI8gY0rOgV8-BO3TZA7BodocOJrjK2YlHFFGB8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
