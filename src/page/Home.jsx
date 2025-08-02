import { use } from "react";
import { BtnTop } from "../components/moleculas/BtnTop";
import { userAuth } from "../context/AuthContext";
import { Remiseros } from "./Remiseros";

export const Home = () => {
  // const {user} = userAuth();
  // console.log(user);
  
  return (
    <>
      <Remiseros/>
      <BtnTop />
    </>
  );
};
