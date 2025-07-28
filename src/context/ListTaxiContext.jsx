import { createContext, useContext, useEffect, useState } from "react";

export const ListTaxiContext = createContext();

export function ListTaxiContextProvider({ children }){
  const [listTaxiCp, setListTaxiCp] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const res = await fetch("./DataPr.json");
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();

        setListTaxiCp(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchList();
  }, []);

  return (
    <ListTaxiContext.Provider value={{listTaxiCp}}>
      {children}
    </ListTaxiContext.Provider>
  );
};
