import { SUPABASE } from "./SupaBase.config";

export const getRemiserosAll = async () => {
  const { data, error } = await SUPABASE
    .from("remiseros")
    .select("*");

  if (error) {
    console.error("Error fetching remiseros:", error);
    return [];
  }
  return data;
}