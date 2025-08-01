import { SUPABASE } from "./SupaBase.config";

export const getLocalidadesAll = async () => {
  const { data, error } = await SUPABASE.from('localidades').select('*');

  if (error) {
    console.error("Error fetching localidades:", error);
    return [];
  }
  return data;
}