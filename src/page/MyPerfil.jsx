import { useQuery } from "@tanstack/react-query";
import { RemiseroData } from "../components/organismos/RemiseroData";
import { userAuth } from "../context/AuthContext";
import { useUserStore } from "../store/UserStore";
import styled from "styled-components";
import { AutomovilData } from "../components/organismos/AutomovilData";
import { useVehiculosStore } from "../store/VehiculoStore";

export const MyPerfil = () => {
  const { dataUserSelect, dataUserSelectId } = useUserStore();
  const { getVehiculo, dataVehiculo } = useVehiculosStore();
  const { user } = userAuth();

  const { isLoading, error } = useQuery({
    queryKey: ["data remisero id"],
    queryFn: () => dataUserSelectId(user?.id),
    enabled: !!user?.id,
  });

  const { isLoading: loadiAuto, error: errorAuto } = useQuery({
    queryKey: ["data auto id"],
    queryFn: async () => {
      if (!dataUserSelect?.id_vehiculo) return null;
      const result = await getVehiculo(dataUserSelect.id_vehiculo);
      return result ?? null;
    },
    enabled: !!dataUserSelect?.id_vehiculo,
  });

  return (
    <Container>
      <RemiseroData data={dataUserSelect} />
      <AutomovilData data={dataVehiculo} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 990px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 980px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
