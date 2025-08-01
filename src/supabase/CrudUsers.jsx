import { SUPABASE } from "./SupaBase.config";

export const createUser = async (userData) => {
  const { data, error } = await SUPABASE.rpc('agregar_usuario',userData)

  if (error) {
    console.error("Error creating user:", error);
    throw error;
  }
  console.log("User created successfully:", data);
  
  return data;
}

export const loginUser = async (email, password) => {
  const { data, error } = await SUPABASE.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
  
  console.log("User logged in successfully:", data);
  
  return data;
}