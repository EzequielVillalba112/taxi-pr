import { create } from "zustand";
import { addVehiculo, getVehiculoId } from "../supabase/CrudVehiculos";

export const useVehiculosStore = create((set) => ({
  idVehiculo: "",
  dataVehiculo: [],
  clearDataVehiculo: () => set({ dataUser: null }),

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

  getVehiculo: async (id) => {
    try {
      const res = await getVehiculoId(id);
      set({ dataVehiculo: res[0] });
    } catch (error) {
      console.error("Error loading dataVehiculo:", error);
      return null; 
    }
  },
}));
