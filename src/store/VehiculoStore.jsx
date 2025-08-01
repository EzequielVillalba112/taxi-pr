import { create } from "zustand";
import { addVehiculo } from "../supabase/CrudVehiculos";

export const useVehiculosStore = create((set) => ({
  idVehiculo: null,
  newVehiculo: async ({ patente, marca, modelo, año, color }) => {
    try {
      const vehiculo = await addVehiculo({
        p_patente: patente,
        p_marca: marca,
        p_modelo: modelo,
        p_color: color,
        p_anio: año,
      });
      set({ idVehiculo: vehiculo });
    } catch (error) {
      console.error("Error creating vehiculo:", error);
    }
  },
}));
