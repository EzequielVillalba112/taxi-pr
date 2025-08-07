import { useQuery } from "@tanstack/react-query";
import { RemiseroData } from "../components/organismos/RemiseroData";
import { userAuth } from "../context/AuthContext";
import { useUserStore } from "../store/UserStore";
import { useLocalidadesStore } from "../store/LocalidadesStore";
import styled from "styled-components";

export const MyPerfil = () => {
  const { dataUserSelect, dataUserSelectId } = useUserStore();
  const { localidadUser, getLocalidad } = useLocalidadesStore();
  const { user } = userAuth();

  const { isLoading, error } = useQuery({
    queryKey: ["data remisero id"],
    queryFn: () => dataUserSelectId(user?.id),
    enabled: !!user?.id,
  });

  return (
    <Container>
      <RemiseroData data={dataUserSelect} />
      <Ej />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Ej = styled.div`
  background-color: #f0f8ff;
  min-height: 300px;
  border-radius: 16px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 40px;
`;
