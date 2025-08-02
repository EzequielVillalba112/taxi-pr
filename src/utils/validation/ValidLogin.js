export const validateLogin = (email, password ) => {
  // Validar email
  if (!email || email.trim() === "") {
    return "El correo es obligatorio";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "El correo no es válido";
  }

  // Validar contraseña
  if (!password || password.trim() === "") {
    return "La contraseña es obligatoria";
  } else if (password.length < 6) {
    return "La contraseña debe tener al menos 6 caracteres";
  }

  return true;
};
