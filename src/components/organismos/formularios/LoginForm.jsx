import styled from "styled-components";
import { Btn } from "../../atomos/Btn";
import { InputText } from "../../atomos/InputText";
import { useUserStore } from "../../../store/UserStore";
import { useState } from "react";
import { MessageErrorInput } from "../../atomos/MessageErrorInput";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { StartLogin } from "../../../hooks/StartLogin";
import { FaHome } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";

export const LoginForm = () => {
  const { loginUser } = useUserStore();
  const [error, setError] = useState({ estate: false, message: "" });
  const [dataForm, setDataForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await StartLogin(loginUser, dataForm, setError);
    if (res === true) {
      setDataForm({ email: "", password: "" });
      navigate("/taxi-pr/");
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
              placeholder="Ingrese su email:"
              required
            />
          </InputText>

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

      <ContainerItemsNav>
        <ul>
          <li>
            <Link to={"/taxi-pr/"}>
              <FaHome size={30} />
              Inicio
            </Link>
          </li>
          <li>
            <Link to={"/taxi-pr/register"}>
              <TiUserAdd size={30} />
              Registrarse
            </Link>
          </li>
        </ul>
      </ContainerItemsNav>
    </ContainerLogin>
  );
};
const ContainerLogin = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
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

const ContainerItemsNav = styled.div`
  margin-top: 10px;
  width: 400px;
  background: #e6e6e6;
  padding: 20px;
  border-radius: 16px;
  ul {
    justify-content: space-evenly;
    align-items: center;
    display: flex;
    list-style: none;

    li a {
      display: flex;
      text-decoration: none;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #4b4b4b;
      svg {
        color: #4b4b4b;
      }
    }

    li a:hover {
      color: #0c6bb9;
      svg {
        color: #0c6bb9;
      }
    }
  }
`;
