import { create } from "zustand";
import { addRemisero, getRemiserosAll } from "../supabase/CrudRemiseros";

export const useRemiseroStore = create((set) => ({
  buscador: "",
  setBuscador: (buscador) => set({ buscador }),
  dataRemiseros: [],
  mostrarRemiseros: async () => {
    const res = await getRemiserosAll();
    if (res.length === 0) {
      console.error("No remiseros found");
      return;
    }
    set({ dataRemiseros: res });
    return res;
  },
  newRemisero: async ({
    nombre,
    apellido,
    dni,
    telefono,
    email,
    foto_url,
    id_vehiculo,
    id_usuario,
    id_localidad,
  }) => {
    const res = await addRemisero({
      p_nombre: nombre,
      p_apellido: apellido,
      p_dni: dni,
      p_telefono: telefono,
      p_email: email,
      p_foto_url: foto_url,
      p_id_vehiculo: id_vehiculo,
      p_id_usuario: id_usuario,
      p_id_localidad: id_localidad,
    });
    if (!res) {
      console.error("Error adding remisero");
      return;
    }
    set((state) => ({
      dataRemiseros: [...state.dataRemiseros, res],
    }));
  },
}));
