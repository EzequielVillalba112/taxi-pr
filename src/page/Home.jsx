import { BtnTop } from "../components/moleculas/BtnTop";
import { useUserStore } from "../store/UserStore";
import { Remiseros } from "./Remiseros";

export const Home = () => {
  const { idUser } = useUserStore();
  console.log("idUser", idUser);
  
  return (
    <>
      <Remiseros/>
      <BtnTop />
    </>
  );
};
