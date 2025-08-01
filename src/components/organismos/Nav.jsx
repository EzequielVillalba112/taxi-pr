import styled from "styled-components";
import { IoHome } from "react-icons/io5";
import { SlLogin } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { useState } from "react";
import Logo from "../../assets/logo-taxi.png";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      to: "/",
      label: "Inicio",
      icon: <IoHome size={20} />,
    },
    {
      to: "taxi-pr/login",
      label: "Ingresar",
      icon: <FaUser size={20} />,
    },
    {
      to: "taxi-pr/register",
      label: "Registrarse",
      icon: <FaUserPlus size={20} />,
    },
  ];

  return (
    <NavStyle>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        <span className={`bar-list top ${open ? "open" : ""}`} />
        <span className={`bar-list middle ${open ? "open" : ""}`} />
        <span className={`bar-list bottom ${open ? "open" : ""}`} />
      </div>

      <div className={`menu-container ${open ? "open" : ""}`}>
        {menuItems.map((item, index) => (
          <div className="menu-list" key={index}>
            <Link to={item.to} onClick={() => setOpen(false)}>
              {item.icon}
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </NavStyle>
  );
};

const NavStyle = styled.nav`
  font-weight: 800;
  color: #4b4b4b;
  background-color: #e6e6e6;
  padding: 0 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  height: 90px;
  position: sticky;
  justify-content: space-between;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
  }

  .logo img {
    width: 250px;
    height: 90px;
    object-fit: cover;
  }

  .menu-toggle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    height: 100%;
    cursor: pointer;
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
    background-color: #e6e6e6;
    border-radius: 10px;
    position: absolute;
    width: 100%;
    left: 0;
    top: 120%;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.4s ease;
    z-index: 100;
  }

  .menu-container.open {
    max-height: max-content;
    transition: max-height 0.5s ease;
    z-index: 100;
  }

  .menu-list {
    padding: 8px 10px;
    height: 90px;
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;
    cursor: pointer;
    z-index: 100;

    a {
      width: 100%;
      height: 100%;
      color: #4b4b4b;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  }

  .menu-list:hover {
    background-color: #ffd500;
  }
`;
