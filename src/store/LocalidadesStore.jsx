import { create } from "zustand";
import { getLocalidadesAll } from "../supabase/CrudLocalidades";

export const useLocalidadesStore = create((set) => ({
  buscador: "",
  setBuscador: (buscador) => set({ buscador }),
  dataLocalidades: [],
  mostrarLocalidades: async () => {
    const res = await getLocalidadesAll();
    if (res.length === 0) {
      console.error("No localidades found");
      return;
    }
    set({ dataLocalidades: res });
    return res;
  },
}));
