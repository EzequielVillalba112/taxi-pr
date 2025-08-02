export const validateRegisterForm = (data) => {
  // Campos personales
  if (!data.nombre?.trim()) return "El nombre es obligatorio";
  if (!data.apellido?.trim()) return "El apellido es obligatorio";

  if (!data.dni?.trim()) {
    return "El DNI es obligatorio";
  } else if (!/^\d{7,8}$/.test(data.dni)) {
    return "DNI inválido";
  }

  if (!data.telefono?.trim()) {
    return "El teléfono es obligatorio";
  } else if (!/^\d{6,15}$/.test(data.telefono)) {
    return "Teléfono inválido";
  }

  if (!data.email?.trim()) {
    return "El correo es obligatorio";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return "Correo inválido";
  }

  if (!data.localidad?.trim() || data.localidad === "Seleccionar localidad") {
    return "Selecciona una localidad";
  }

  if (!data.password?.trim()) {
    return "La contraseña es obligatoria";
  } else if (data.password.length < 6) {
    return "Contraseña mínimo 6 caracteres";
  }

  // Datos del vehículo
  if (!data.patente?.trim()) {
    return "La patente es obligatoria";
  } else if (
    !/^[A-Z]{2,3}\d{3}$|^[A-Z]{3}\d{3}$|^[A-Z]{2}\d{3}[A-Z]{2}$/.test(
      data.patente
    )
  ) {
    return "Formato inválido de patente";
  }

  if (!data.marca?.trim()) return "Marca obligatoria";
  if (!data.modelo?.trim()) return "Modelo obligatorio";

  if (!/^\d{4}$/.test(data.año)) {
    return "Año inválido";
  }

  if (!data.color?.trim()) return "Color obligatorio";

  return true;
};
