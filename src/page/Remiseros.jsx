import { useQuery } from "@tanstack/react-query";
import { useRemiseroStore } from "../store/RemiseroStore";
import { ListTaxi } from "../components/organismos/ListTaxi";
import { PropagateLoader } from "react-spinners";
import styled from "styled-components";

export const Remiseros = () => {
  const { mostrarRemiseros, dataRemiseros } = useRemiseroStore();

  const { isLoading, isError } = useQuery({
    queryKey: ["remiseros"],
    queryFn: mostrarRemiseros,
  });
  return (
    <ContainerList>
      {isError && <p>Error loading remiseros</p>}
      {isLoading ? (
        <PropagateLoader color="#ffd500" />
      ) : (
        <ListTaxi data={dataRemiseros} />
      )}
    </ContainerList>
  );
};

const ContainerList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 2rem - 150px);
`;
