import styled from "styled-components";
import { InputText } from "../components/atomos/InputText";
import { Btn } from "../components/atomos/Btn";

export const Login = () => {
  return (
    <ContainerLogin>
      <div className="img-login"></div>
      <form>
        <h2>Iniciar Sesión</h2>
        <div className="input-container">
          <InputText>
            <label htmlFor="email" className="form__label">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
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
              className="form__field"
              required
            />
          </InputText>
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
