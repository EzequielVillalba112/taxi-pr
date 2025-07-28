import React, { useState } from "react";
import styled from "styled-components";
import { InputText } from "../components/atomos/InputText";
import { Btn } from "../components/atomos/Btn";

export function Register() {
  const [formData, setFormData] = useState({
    nombre: "",
    dni: "",
    telefono: "",
    patente: "",
    modelo: "",
    año: "",
    color: "",
    licencia: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del taxi:", formData);
    // Aquí podés enviar los datos a Supabase, Firebase, etc.
  };

  return (
    <FormContainer>
      <Title>Registrar Taxi</Title>
      <StyledForm onSubmit={handleSubmit}>
        <InputText>
          <label htmlFor="nombre" className="form__label">
            Nombre del Chofer
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
          <label htmlFor="modelo" className="form__label">
            Modelo del Auto
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

        <InputText>
          <label htmlFor="licencia" className="form__label">
            Número de Licencia
          </label>
          <input
            type="text"
            name="licencia"
            value={formData.licencia}
            onChange={handleChange}
            className="form__field"
            required
          />
        </InputText>
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
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  button {
    grid-column: span 2;
    margin-top: 20px;
  }
`;
