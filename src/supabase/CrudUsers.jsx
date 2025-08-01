import { SUPABASE } from "./SupaBase.config";

export const createUser = async (userData) => {
  const { data, error } = await SUPABASE.rpc('agregar_usuario',userData)

  if (error) {
    console.error("Error creating user:", error);
    throw error;
  }
  return data;
}