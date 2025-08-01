import { useUserStore } from "../store/UserStore";

export const addUser = async ({ email, password, name }) => {
  const { newUser, idUser } = useUserStore();

  try {
    await newUser({ email, password, name });
    return idUser;
  } catch (error) {
    console.error("Error adding user:", error);
  }
};
