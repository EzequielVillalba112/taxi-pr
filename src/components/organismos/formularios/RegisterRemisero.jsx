import { useState } from "react";
import styled from "styled-components";
import { InputText } from "../../atomos/InputText";
import { Btn } from "../../atomos/Btn";
import { Select } from "../../atomos/Select";
import { addUser } from "../../../helpers/AddUser";
import { addVehiculo } from "../../../helpers/AddVehiculo";
import { addRemisero } from "../../../helpers/AddRemisero";

export function RegisterRemisero({ localidades }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    telefono: "",
    email: "",
    foto_url: "sin foto",
    localidad: "",
    password: "",
    patente: "",
    marca: "",
    modelo: "",
    año: "",
    color: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const idUser = addUser({
      email: formData.email,
      password: formData.password,
      name: `${formData.nombre} ${formData.apellido}`,
    });
    const idVehiculo = addVehiculo({
      patente: formData.patente,
      marca: formData.marca,
      modelo: formData.modelo,
      año: formData.año,
      color: formData.color,
    });

    if (idUser && idVehiculo) {
      addRemisero({
        nombre: formData.nombre,
        apellido: formData.apellido,
        dni: formData.dni,
        telefono: formData.telefono,
        email: formData.email,
        foto_url: formData.foto_url,
        id_vehiculo: idVehiculo,
        id_usuario: idUser,
        id_localidad: formData.localidad,
      });
    }
  };

  return (
    <FormContainer>
      <Title>Registrar Remisero</Title>
      <StyledForm onSubmit={handleSubmit}>
        <FormData>
          <InputText>
            <label htmlFor="nombre" className="form__label">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="form__field"
              required
            />
          </InputText>

          <InputText>
            <label htmlFor="apellido" className="form__label">
              Apellido
            </label>
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              className="form__field"
              required
            />
          </InputText>

          <InputText>
            <label htmlFor="email" className="form__label">
              DNI
            </label>
            <input
              type="text"
              name="dni"
              value={formData.dni}
              onChange={handleChange}
              className="form__field"
              required
            />
          </InputText>

          <InputText>
            <label htmlFor="telefono" className="form__label">
              Teléfono
            </label>
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="form__field"
              required
            />
          </InputText>

          <InputText>
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form__field"
              required
            />
          </InputText>

          <Select
            label="Localidad"
            name="localidad"
            value={formData.localidad}
            onChange={handleChange}
            localidades={localidades}
          />

          <InputText>
            <label htmlFor="password" className="form__label">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form__field"
              required
            />
          </InputText>
        </FormData>

        <Title>Datos del Vehículo</Title>

        <FormData>
          <InputText>
            <label htmlFor="patente" className="form__label">
              Patente
            </label>
            <input
              type="text"
              name="patente"
              value={formData.patente}
              onChange={handleChange}
              className="form__field"
              required
            />
          </InputText>
          <InputText>
            <label htmlFor="marca" className="form__label">
              Marca
            </label>
            <input
              type="text"
              name="marca"
              value={formData.marca}
              onChange={handleChange}
              className="form__field"
              required
            />
          </InputText>
          <InputText>
            <label htmlFor="modelo" className="form__label">
              Modelo
            </label>
            <input
              type="text"
              name="modelo"
              value={formData.modelo}
              onChange={handleChange}
              className="form__field"
              required
            />
          </InputText>

          <InputText>
            <label htmlFor="año" className="form__label">
              Año
            </label>
            <input
              type="number"
              name="año"
              value={formData.año}
              onChange={handleChange}
              className="form__field"
              required
            />
          </InputText>

          <InputText>
            <label htmlFor="color" className="form__label">
              Color
            </label>
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="form__field"
              required
            />
          </InputText>
        </FormData>

        <Btn
          text="Registrar Taxi"
          type="submit"
          bgcolor="#ffd500"
          color="#4b4b4b"
        />
      </StyledForm>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 24px;
  background-color: #e6e6e6;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #4b4b4b;

  @media (max-width: 680px) {
    margin: auto;
    width: -webkit-fill-available;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;

  button {
    grid-column: span 2;
    margin-top: 20px;
  }
`;

const FormData = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
