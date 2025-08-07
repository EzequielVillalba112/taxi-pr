import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./page/Home";
import { Login } from "./page/Login";
import { Register } from "./page/Register";
import { Nav } from "./components/organismos/Nav";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MyPerfil } from "./page/MyPerfil";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="taxi-pr/" element={<Home />} />
        <Route path="taxi-pr/login" element={<Login />} />
        <Route path="taxi-pr/register" element={<Register />} />
        <Route path="taxi-pr/mi-perfil" element={<MyPerfil/>}/>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
