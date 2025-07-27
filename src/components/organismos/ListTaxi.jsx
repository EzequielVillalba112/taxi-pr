import styled from "styled-components";
import { CardList } from "./CardList";

export const ListTaxi = ({ listTaxi }) => {
  return (
    <>
      <ContainerList>
        {listTaxi?.map((taxi, index) => (
          <CardList key={index} data={taxi} />
        ))}
      </ContainerList>
    </>
  );
};

const ContainerList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 60px;

  @media (max-width: 1010px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
   @media (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
