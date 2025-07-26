import "./App.css";
import { ListTaxiContextProvider } from "./context/ListTaxiContext";
import { Home } from "./page/Home";

function App() {
  return (
    <>
      <ListTaxiContextProvider>
        <Home />
      </ListTaxiContextProvider>
    </>
  );
}

export default App;
