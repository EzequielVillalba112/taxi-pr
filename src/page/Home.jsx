import { useContext } from "react";
import { ListTaxiContext } from "../context/ListTaxiContext";
import { ListTaxi } from "../components/organismos/ListTaxi";

export const Home = () => {
  const { listTaxiCp } = useContext(ListTaxiContext);
  console.log(listTaxiCp);

  return (
    <>
      <h1>home</h1>
      <ListTaxi listTaxi={listTaxiCp} />
    </>
  );
};
