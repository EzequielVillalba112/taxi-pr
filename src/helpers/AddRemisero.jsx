import { useRemiseroStore } from "../store/RemiseroStore";

export const addRemisero = async ({
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
  const { newRemisero } = useRemiseroStore();

  try {
    await newRemisero({
      nombre,
      apellido,
      dni,
      telefono,
      email,
      foto_url,
      id_vehiculo,
      id_usuario,
      id_localidad,
    });
    return true;
  } catch (error) {
    console.error("Error adding vehiculo:", error);
  }
};
