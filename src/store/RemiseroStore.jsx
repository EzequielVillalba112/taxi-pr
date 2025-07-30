import { create } from "zustand";
import { getRemiserosAll } from "../supabase/CrudRemiseros";

export const useRemiseroStore = create((set) => ({
    buscador: "",
    setBuscador: (buscador) => set({ buscador }),
    dataRemiseros: [],
    mostrarRemiseros: async ()=>{
        const res = await getRemiserosAll();
        if (res.length === 0) {
            console.error("No remiseros found");
            return;
        }
        set({ dataRemiseros: res });
        return res;
    }
}));