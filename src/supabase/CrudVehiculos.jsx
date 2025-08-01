import { SUPABASE } from "./SupaBase.config";

export const addVehiculo = async (vehiculoData) => {
    const { data, error } = await SUPABASE.rpc("agregar_vehiculo", vehiculoData);
    
    if (error) {
        console.error("Error adding vehiculo:", error);
        throw error;
    }
    return true;
}