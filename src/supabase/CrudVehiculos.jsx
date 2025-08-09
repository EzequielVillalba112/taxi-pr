import { SUPABASE } from "./SupaBase.config";

export const addVehiculo = async (vehiculoData) => {
  const { data, error } = await SUPABASE.rpc("agregar_vehiculo", vehiculoData);

  if (error) {
    console.error("Error adding vehiculo:", error);
    throw error;
  }

  return data;
};

export const getVehiculoId = async (id) => {
  const { data, error } = await SUPABASE.rpc("obtener_auto_por_id", {
    p_id_vehiculo: id,
  });
  if (error) {
    console.error("Error vehiculo:", error);
    throw error;
  }

  return data;
};
