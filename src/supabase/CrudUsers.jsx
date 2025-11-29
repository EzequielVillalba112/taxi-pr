import { SUPABASE } from "./SupaBase.config";

export const createUser = async (email, password, name, lastName) => {
  const { data, error } = await SUPABASE.auth.signUp({
    email,
    password,
    options: {
      data: {
        nombre: name,
        apellido: lastName,
      },
    },
  });

  if (error) {
    console.error("Error registrando usuario:", error.message);
    return null;
  }
  const userId = data.user.id;

  return userId;
};

export const loginUser = async (email, password) => {
  const { data, error } = await SUPABASE.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Error logging in user:", error);
    throw error;
  }

  console.log("User logged in successfully:", data);

  return data;
};

export const dataUserId = async (p_id_user) => {
  const { data, error } = await SUPABASE.rpc("obtener_remisero_por_user", {
    p_id_user,
  });

  if (error) {
    console.error("Error return data user:", error);
    throw error;
  }

  return data;
};
