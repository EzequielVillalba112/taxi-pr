import { create } from "zustand";
import { addVehiculo } from "../supabase/CrudVehiculos";

export const useVehiculosStore = create((set) => ({
  idVehiculo: "",
  newVehiculo: async ({ patente, marca, modelo, anio, color }) => {
    try {
      const vehiculo = await addVehiculo({
        p_patente: patente,
        p_marca: marca,
        p_modelo: modelo,
        p_color: color,
        p_anio: anio,
      });
      set({ idVehiculo: vehiculo });
      return vehiculo; 
    } catch (error) {
      console.error("Error creating vehiculo:", error);
    }
  },
}));
