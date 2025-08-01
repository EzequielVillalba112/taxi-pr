import { useVehiculosStore } from "../store/VehiculoStore";

export const addVehiculo = async ({ patente, marca, modelo, año, color }) => {
  const { newVehiculo, idVehiculo } = useVehiculosStore();

  try {
    await newVehiculo({ patente, marca, modelo, año, color });
    return idVehiculo;
  } catch (error) {
    console.error("Error adding vehiculo:", error);
  }
};
