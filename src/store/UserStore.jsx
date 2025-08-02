import { create } from "zustand";
import { createUser } from "../supabase/CrudUsers";
import { SUPABASE } from "../supabase/SupaBase.config";

export const useUserStore = create((set) => ({
  idUser: "",
  dataUser: [],
  clearDataUser: () => set({ dataUser: [] }),
  newUser: async ({ email, password, name, lastName }) => {
    try {
      const user = await createUser(email, password, name, lastName);
      set({ idUser: user });
      return user;
    } catch (error) {
      console.error("Error creating user:", error);
    }
  },
  loginUser: async ( email, password ) => {
    const { data, error } = await SUPABASE.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    set({ dataUser: data });
    return data;
  },
}));
