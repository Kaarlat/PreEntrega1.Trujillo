// Se debe importar react y css con librería que se utilizará
import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Menu } from "antd";
import {  CategoriasItemDesplegable} from "./itemDesplegable";
import { CartWidget } from "../cartwidget/cartwidget";
import { useLocation, useNavigate } from "react-router-dom";

// Si exporto desde el inicio se debe importar con llaves {}
export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation()

  const [current, setCurrent] = useState("0");
  const onClick = (e) => {
    switch (e.key) {
      case "1":
        navigate("/categorias/figuras");
        break;
      case "2":
        navigate("/categorias/regalos");
        break;
        case "3":
        navigate("/categorias/biodegradable");
        break;
      default:
        break;
    }
    setCurrent(e.key);
  };

  useEffect(() => {
    if(location.pathname === "/categorias"){
        setCurrent('0')
    }
  },[location.pathname])

  return (
    <header>
      <nav className="navbar">
        <img
          id="home-logo"
          src="../src/assets/logo.png"
          alt="Logo"
          onClick={() => navigate("/categorias")}
        />
        <p>Impresiones 3D</p>
        <div className="buttons">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            multiple
            items={CategoriasItemDesplegable}
          />
        </div>
        <CartWidget />
      </nav>
    </header>
  );
};
