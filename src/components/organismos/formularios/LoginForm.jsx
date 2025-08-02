import styled from "styled-components";
import { Btn } from "../../atomos/Btn";
import { InputText } from "../../atomos/InputText";
import { useUserStore } from "../../../store/UserStore";
import { useState } from "react";
import { MessageErrorInput } from "../../atomos/MessageErrorInput";
import { useNavigate } from "react-router-dom";
import { StartLogin } from "../../../hooks/StartLogin";

export const LoginForm = () => {
  const { loginUser } = useUserStore();
  const [error, setError] = useState({ estate: false, message: "" });
  const [dataForm, setDataForm] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await StartLogin(
      loginUser,
      dataForm,
      navigate,
      setError
    );
    if (res === true) {
      setDataForm({ email: "", password: "" });
    } else {
      setError({ estate: true, message: res });
    }
  };
  return (
    <ContainerLogin>
      <div className="img-login"></div>
      <form onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        <div className="input-container">
          <InputText>
            <label htmlFor="email" className="form__label">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              value={dataForm.email}
              onChange={handleChange}
              name="email"
              className="form__field"
              required
            />
          </InputText>
          <InputText>
            <label htmlFor="password" className="form__label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={dataForm.password}
              onChange={handleChange}
              className="form__field"
              required
            />
          </InputText>
          {error.estate && (
            <MessageErrorInput label={error.message} setError={setError} />
          )}
        </div>
        <Btn
          text="Iniciar Sesión"
          type="submit"
          bgcolor="#ffd500"
          color="#4b4b4b"
        />
      </form>
    </ContainerLogin>
  );
};

const ContainerLogin = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
  border-radius: 16px;
  color: #4b4b4b;

  form {
    width: 400px;
    padding: 20px;
    background: #e6e6e6;
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      margin-bottom: 20px;
      color: #4b4b4b;
    }

    .input-container {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;
