import { SUPABASE } from "./SupaBase.config";

export const getRemiserosAll = async () => {
  const { data, error } = await SUPABASE.rpc("obtener_remiseros_con_localidad");

  if (error) {
    console.error("Error fetching remiseros:", error);
    return [];
  }
  return data;
};

export const addRemisero = async (remiseroData) => {
  const { data, error } = await SUPABASE.rpc("agregar_remisero", remiseroData);

  if (error) {
    console.error("Error adding remisero:", error);
    throw error;
  }
  return true;
};
