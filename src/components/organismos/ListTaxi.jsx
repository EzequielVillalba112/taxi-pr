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
`;
