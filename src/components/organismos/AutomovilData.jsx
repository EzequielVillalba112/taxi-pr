import styled from "styled-components";
import { Btn } from "../atomos/Btn";
import { FaEdit } from "react-icons/fa";

export const AutomovilData = ({ data }) => {
  return (
    <Container>
      <h2>Datos del Vehículo</h2>
      <ul>
        <li>
          Marca: <span>{data.marca}</span>
        </li>
        <li>
          Modelo: <span>{data.modelo}</span>
        </li>
        <li>
          Patente: <span>{data.patente}</span>
        </li>
        <li>
          Color: <span>{data.color}</span>
        </li>
        <li>
          Año: <span>{data.año}</span>
        </li>
      </ul>
      <Btn
        bgcolor={"#009dff"}
        text={"Editar Vehículo"}
        color={"#ffff"}
        icon={<FaEdit />}
      />
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f8ff;
  min-height: 300px;
  border-radius: 16px;
  align-items: start;
  padding: 40px;
  color: #242424;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ul {
    margin-left: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 10px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      font-size: 18px;

      span {
        font-weight: 700;
      }
    }
  }

  @media (max-width: 980px) {
    padding: 20px;
    flex-direction: column;
    align-items: center;
    ul {
      margin-left: 0px;
    }
  }
`;
