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
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AlertSuccess } from "../../atomos/AlertSuccess";

export function RegisterRemisero({ localidades }) {
  const { newUser, idUser } = useUserStore();
  const { newVehiculo, idVehiculo } = useVehiculosStore();
  const { newRemisero } = useRemiseroStore();
  const [dataForm, setDataForm] = useState({
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
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    let data = "";
    if (e.target.name === "patente") {
      data = e.target.value.toUpperCase();
    } else {
      data = capitalizeFirstLetter(e.target.value);
    }
    setDataForm({ ...dataForm, [e.target.name]: data });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = validateRegisterForm(dataForm);

    if (res === true) {
      const resAddUser = await AddUser(
        dataForm,
        newUser,
        newVehiculo,
        newRemisero
      );
      if (resAddUser === true) {
        setDataForm({
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
        AlertSuccess("Usuario creado con exito");
        navigate("/taxi-pr/login");
        if (res === true) {
        } else {
          setError({ estate: true, message: res });
        }
      } else {
        setError({ estate: true, message: resAddUser });
      }
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
              value={dataForm.nombre}
              onChange={handleChange}
              className="form__field"
              placeholder="Ingrese su nombre:"
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
              value={dataForm.apellido}
              onChange={handleChange}
              placeholder="Ingrese su apellido:"
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
              value={dataForm.dni}
              onChange={handleChange}
              className="form__field"
              placeholder="Ingrese su D.N.I:"
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
              value={dataForm.telefono}
              onChange={handleChange}
              className="form__field"
              placeholder="Ingrese su telefono:"
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
              value={dataForm.email}
              onChange={handleChange}
              placeholder="Ingrese su email:"
              className="form__field"
              required
            />
          </InputText>

          <Select
            label="Localidad"
            name="localidad"
            value={dataForm.localidad}
            onChange={handleChange}
            localidades={localidades}
          />

          <InputText>
            <label htmlFor="password" className="form__label">
              Contraseña
            </label>

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={dataForm.password}
                onChange={handleChange}
                className="form__field"
                placeholder="Ingrese su contraseña:"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
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
              value={dataForm.patente}
              onChange={handleChange}
              placeholder="Ingrese su patente:"
              className="form__field"
              required
            />
            <label style={{fontSize:"14px", marginTop:"5px"}}>
              Formato válido: <b>ABC 123</b> o <b>AB 123 CD</b>
            </label>
          </InputText>
          <InputText>
            <label htmlFor="marca" className="form__label">
              Marca
            </label>
            <input
              type="text"
              name="marca"
              value={dataForm.marca}
              onChange={handleChange}
              placeholder="Ingrese la marca:"
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
              value={dataForm.modelo}
              onChange={handleChange}
              placeholder="Ingrese el modelo:"
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
              value={dataForm.año}
              onChange={handleChange}
              placeholder="Ingrese el año:"
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
              value={dataForm.color}
              onChange={handleChange}
              placeholder="Ingrese el color:"
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
  min-width: 250px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
