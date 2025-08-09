import styled from "styled-components";
import imgUserLogo from "../../assets/user.png";
import { ImgUser } from "../atomos/ImgUser";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { EstateCardList } from "../moleculas/EstateCardList";
import { FaLocationDot } from "react-icons/fa6";

export const CardList = ({ data }) => {
  const sendWhatsApp = (telefono) => {
    const numero = `+54${telefono}`; // quitamos el espacio para WhatsApp

    const enviarConUbicacion = (mensaje) => {
      const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(
        mensaje
      )}`;
      window.open(url, "_blank");
    };

    const mensajeBase = "Hola, quiero hacer una consulta.";

    if (!navigator.geolocation) {
      // Geolocalización no soportada, enviamos solo mensaje base
      enviarConUbicacion(mensajeBase);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude.toFixed(6);
        const lon = position.coords.longitude.toFixed(6);
        const mensajeConUbicacion = `${mensajeBase} Mi ubicación actual es: https://www.google.com/maps?q=${lat},${lon}`;
        enviarConUbicacion(mensajeConUbicacion);
      },
      (error) => {
        // Si falla obtener ubicación, enviamos solo el mensaje base
        enviarConUbicacion(mensajeBase);
      }
    );
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
          <p>
            <FaLocationDot /> <span>{data.localidad}</span>
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
