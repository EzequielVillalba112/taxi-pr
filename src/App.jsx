import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ListTaxiContextProvider } from "./context/ListTaxiContext";
import { Home } from "./page/Home";
import { Login } from "./page/Login";
import { Register } from "./page/Register";
import { Nav } from "./components/organismos/Nav";

function App() {
  return (
    <>
      <ListTaxiContextProvider>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </ListTaxiContextProvider>
    </>
  );
}

export default App;
