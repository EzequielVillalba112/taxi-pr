import { useState } from "react";
import styled from "styled-components";
import { InputText } from "../../atomos/InputText";
import { Btn } from "../../atomos/Btn";
import { Select } from "../../atomos/Select";
import { useUserStore } from "../../../store/UserStore";
import { useVehiculosStore } from "../../../store/VehiculoStore";
import { useRemiseroStore } from "../../../store/RemiseroStore";
import { validateRegisterForm } from "../../../utils/validation/ValidRegister";
import { capitalizeFirstLetter } from "../../../utils/CapitalizeFirst";
import { MessageErrorInput } from "../../atomos/MessageErrorInput";
import { AddUser } from "../../../hooks/AddUser";
import { useNavigate } from "react-router-dom";

export function RegisterRemisero({ localidades }) {
  const { newUser, idUser } = useUserStore();
  const { newVehiculo, idVehiculo } = useVehiculosStore();
  const { newRemisero } = useRemiseroStore();
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
  const [error, setError] = useState({ estate: false, message: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    let data = "";
    if (e.target.name === "patente") {
      data = e.target.value.toUpperCase();
    } else {
      data = capitalizeFirstLetter(e.target.value);
    }
    setFormData({ ...formData, [e.target.name]: data });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = validateRegisterForm(formData);

    if (res === true) {
      const res = await AddUser(formData, newUser, newVehiculo, newRemisero);
      res === true
        ? setFormData({
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
          })
        : setError({ estate: true, message: res });
    } else {
      setError({ estate: true, message: res });
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
        {error.estate && (
          <MessageErrorInput label={error.message} setError={setError} />
        )}
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
