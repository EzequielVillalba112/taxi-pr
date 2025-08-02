export const AddUser = async (formData, newUser, newVehiculo, newRemisero) => {
  try {
    // Primero agregamos el usuario
    const user = await newUser({
      email: formData.email,
      password: formData.password,
      name: formData.nombre,
      lastName: formData.apellido,
    });

    // Luego agregamos el vehículo
    const vehiculo = await newVehiculo({
      patente: formData.patente,
      marca: formData.marca,
      modelo: formData.modelo,
      anio: formData.año,
      color: formData.color,
    });
    // Si ambos se crearon correctamente, agregamos el remisero
    if (user && vehiculo) {
      await newRemisero({
        nombre: formData.nombre,
        apellido: formData.apellido,
        dni: formData.dni,
        telefono: formData.telefono,
        email: formData.email,
        foto_url: formData.foto_url,
        id_vehiculo: vehiculo,
        id_usuario: user,
        id_localidad: formData.localidad,
      });
    }
  } catch (error) {
    return (error.message)
  }
  return true;
};
