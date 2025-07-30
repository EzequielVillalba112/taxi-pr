import styled from "styled-components"

export const EstateCardList = ({state}) => {
  return (
    <>
      {state === "Activo" && <Activo>Activo</Activo>}
      {state === "Ocupado" && <Ocupado>Ocupado</Ocupado>}
      {state === "Desconectado" && <Desconectado>Desconectado</Desconectado>}
    </>
  )
}

const Activo = styled.p`
  color: #0e740e;
  font-size: 17px;
  font-weight: bold;
`;

const Ocupado = styled.p`
    color: #8b0c0c;
    font-size: 17px;
    font-weight: bold;
`

const Desconectado = styled.p`
    color: #808080;
    font-size: 17px;
    font-weight: bold;
`