import { useContext } from "react";
import { ListTaxiContext } from "../context/ListTaxiContext";
import { ListTaxi } from "../components/organismos/ListTaxi";
import { Nav } from "../components/organismos/Nav";
import { BtnTop } from "../components/moleculas/BtnTop";

export const Home = () => {
  const { listTaxiCp } = useContext(ListTaxiContext);
  console.log(listTaxiCp);

  return (
    <>
      
      <ListTaxi listTaxi={listTaxiCp} />
      <BtnTop />
    </>
  );
};
