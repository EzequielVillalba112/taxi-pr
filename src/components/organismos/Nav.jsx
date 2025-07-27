import styled from "styled-components";
import { IoHome } from "react-icons/io5";
import { SlLogin } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { useState } from "react";

export const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavStyle>
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        <span className={`bar-list top ${open ? "open" : ""}`} />
        <span className={`bar-list middle ${open ? "open" : ""}`} />
        <span className={`bar-list bottom ${open ? "open" : ""}`} />
      </div>
      Menú
      <section className={`menu-container ${open ? "open" : ""}`}>
        <div className="menu-list">
          <IoHome size={20} />
          Inicio
        </div>
        <div className="menu-list">
          <SlLogin size={20} />
          Ingresar
        </div>
        <div className="menu-list">
          <FaUserPlus size={20} />
          Registrarse
        </div>
        <div className="menu-list">
          <FaUser size={20} />
          Perfil
        </div>
      </section>
    </NavStyle>
  );
};

const NavStyle = styled.nav`
  font-weight: 800;
   color: #4b4b4b;
  background-color: #ffd500;
  padding: 0 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  height: 2.5rem;
  position: sticky;
  cursor: pointer;
  justify-content: space-between;

  .menu-toggle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    height: 100%;
  }

  .bar-list {
    width: 20px;
    height: 3px;
    background: #121212;
    border-radius: 50px;
    transition: all 0.4s ease;
    display: flex;
  }

  .top.open {
    transform: rotate(45deg) translate(6px, 5px);
  }

  .middle.open {
    opacity: 0;
  }

  .bottom.open {
    transform: rotate(-45deg) translate(5px, -4px);
  }

  .menu-container {
    background-color: #ffd500;
    color: #4b4b4b;
    border-radius: 10px;
    position: absolute;
    width: 100%;
    left: 0;
    top: 130%;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.4s ease;
  }

  .menu-container.open {
    max-height: 200px;
    transition: max-height 0.5s ease;
  }

  .menu-list {
    padding: 8px 10px;
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;
  }

  .menu-list:hover {
    color: #ffff;
    background-color: rgb(145, 125, 30);
  }
`;
