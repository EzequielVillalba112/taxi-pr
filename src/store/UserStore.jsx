import { create } from "zustand";
import { createUser } from "../supabase/CrudUsers";

export const useUserStore = create((set) => ({
  idUser: "",
  newUser: async ({ email, password, name }) => {
    try {
      const user = await createUser({
        p_email: email,
        p_password: password,
        p_name: name,
      });
      set({ idUser: user });
      return user;
    } catch (error) {
      console.error("Error creating user:", error);
    }
  },
}));
