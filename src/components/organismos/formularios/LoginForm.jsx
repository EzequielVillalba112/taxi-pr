import styled from "styled-components";
import { Btn } from "../../atomos/Btn";
import { InputText } from "../../atomos/InputText";
import { useUserStore } from "../../../store/UserStore";

export const LoginForm = () => {
  const { loginUser } = useUserStore();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const user = await loginUser({ email, password });
      if (user) {
        console.log(user);
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
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
