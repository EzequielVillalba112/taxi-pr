import { validateLogin } from "../utils/validation/ValidLogin";

export const StartLogin = async (loginUser, dataForm, setError) => {
  try {
    const res = validateLogin(dataForm.email, dataForm.password);

    if (res === true) {
      const res = await loginUser(dataForm.email, dataForm.password);
    
      if (res.error) {
        return res.message;
      } else {
        if (res.user) {
          return true;
        }
      }
    } else {
      setError({ estate: true, message: res });
    }
  } catch (error) {
    setError({ estate: true, message: error.message });
  }

  return true;
};
