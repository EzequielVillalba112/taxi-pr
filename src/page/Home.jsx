import { use } from "react";
import { BtnTop } from "../components/moleculas/BtnTop";
import { userAuth } from "../context/AuthContext";
import { Remiseros } from "./Remiseros";

export const Home = () => {
  return (
    <>
      <Remiseros/>
      <BtnTop />
    </>
  );
};
