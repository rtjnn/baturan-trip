// utils/supabase/client-pages.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Client untuk Pages Router (getServerSideProps, getStaticProps, dll.)
export const supabasePagesClient = createClient(supabaseUrl, supabaseAnonKey);
