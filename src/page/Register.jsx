import { RegisterRemisero } from "../components/organismos/formularios/RegisterRemisero";
import { useLocalidadesStore } from "../store/LocalidadesStore";
import { useQuery } from "@tanstack/react-query";

export function Register() {
  const {mostrarLocalidades, dataLocalidades} = useLocalidadesStore();

  const { isLoading, isError } = useQuery({
    queryKey: ["localidades"],
    queryFn: mostrarLocalidades,
  })
  return (
    <RegisterRemisero localidades={dataLocalidades} />
  );
}
