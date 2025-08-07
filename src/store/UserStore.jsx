import { create } from "zustand";
import { createUser, dataUserId } from "../supabase/CrudUsers";
import { SUPABASE } from "../supabase/SupaBase.config";

export const useUserStore = create((set) => ({
  dataUser: null,
  dataUserSelect: [],
  clearDataUser: () => set({ dataUser: null }),

  newUser: async ({ email, password, name, lastName }) => {
    try {
      const user = await createUser(email, password, name, lastName);
      set({ idUser: user.id, dataUser: user });
      return user;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },

  loginUser: async (email, password) => {
    const { data, error } = await SUPABASE.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    const user = data.user;
    set({ dataUser: user });
    return user;
  },
  dataUserSelectId: async (id) => {
    try {
      const res = await dataUserId(id);
      if (!res || res.length === 0) {
        console.error("No remisero found");
        return null; 
      }
      set({ dataUserSelect: res[0] });
      return res[0]; 
    } catch (error) {
      console.error("Error loading dataUserSelect:", error);
      return null; 
    }
  },
}));
