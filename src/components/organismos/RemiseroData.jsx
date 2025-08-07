import styled from "styled-components";
import { ImgUser } from "../atomos/ImgUser";
import user from "../../assets/user.png";
import { EstateCardList } from "../moleculas/EstateCardList";

export const RemiseroData = ({ data }) => {
  console.log(data);

  return (
    <DataRemisero>
      <ImgUser src={user} alt={"pr"} />
      <DataUser>
        <h2>
          {data.nombre} {data.apellido}
        </h2>
        <ul>
          <li>
            D.N.I: <span>{data.dni}</span>
          </li>
          <li>
            Telefono: <span>{data.telefono}</span>
          </li>
          <li>
            Email: <span>{data.email}</span>
          </li>
          <li>
            Localidad: <span>{data.localidad}</span>
          </li>
          <li>
            Estado: <EstateCardList state={data.estado} />
          </li>
        </ul>
      </DataUser>
    </DataRemisero>
  );
};

const DataRemisero = styled.div`
  background-color: #f0f8ff;
  min-height: 300px;
  border-radius: 16px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 40px;
`;

const DataUser = styled.div`
  color: #242424;

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
`;
