import styled from "styled-components";
import imgUserLogo from "../../assets/user.png";
import { ImgUser } from "../atomos/ImgUser";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { EstateCardList } from "../moleculas/EstateCardList";

export const CardList = ({ data }) => {
  const sendWhatsApp = () => {
    const numero = "+54 3743 585057"; // Reemplaza con tu número
    const mensaje = "Hola, quiero hacer una consulta.";
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${mensaje}`;

    window.open(url, "_blank"); // Abre en una nueva pestaña
  };

  return (
    <ContainerCard>
      <ImgUser src={imgUserLogo} />
      <ContainerData>
        <h2>
          {data.nombre} {data.apellido}
        </h2>
        <DataTaxi>
          <p>
            <FaPhoneAlt /> <span>{data.telefono}</span>
          </p>
          <EstateCardList state={data.estado} />
        </DataTaxi>
        <ContainerButton>
          <a href="#">Detalles</a>
          <button onClick={() => sendWhatsApp(data.telefono)}>
            <FaWhatsapp /> Contactar
          </button>
        </ContainerButton>
      </ContainerData>
    </ContainerCard>
  );
};

const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f5f5f5;
  border-radius: 16px;
  padding: 20px;
  gap: 20px;

  @media (max-width: 1010px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContainerData = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
`;

const DataTaxi = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  font-size: 14px;
  margin-left: 10px;
  p {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 4px 0;

    svg {
      color: #ffd500;
    }
  }
  span {
    font-size: 16px;
    font-weight: 400;
  }
`;

const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;

  a {
    padding: 8px 16px;
    color: #ffd500;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.3s ease;
    font-weight: 600;
    letter-spacing: 1px;
  }

  a:hover {
    color: #d3b623dd;
  }

  button {
    padding: 8px 16px;
    background-color: #009dff;
    color: white;
    border: none;
    border-radius: 16px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    transition: all 0.3s ease;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    &:hover {
      background-color: #1272ad;
    }
  }
`;
