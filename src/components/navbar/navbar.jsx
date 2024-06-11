// Se debe importar react y css con librería que se utilizará
import React, { useState } from "react";
import "./navbar.css";
import { Button, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import {
  CategoriasItemDesplegable,
  EmpresasItemDesplegable,
  ContactoItemDesplegable,
} from "./itemDesplegable";
import { CartWidget } from "../cartwidget/cartwidget";
import { useNavigate } from "react-router-dom";

// Agregar la item a Menu, para no repetir el código
const createMenu = (items) => <Menu items={items} />;

// Si exporto desde el inicio se debe importar con llaves {}
export const Navbar = () => {
  const navigate = useNavigate();

  const [current, setCurrent] = useState("0");
  const onClick = (e) => {
    switch (e.key) {
      case "1":
        navigate("/categorias/figuras");
        break;
      case "2":
        navigate("/categorias/regalos");
        break;
      default:
        break;
    }
    setCurrent(e.key);
  };

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
          {/* <Button className="button">
              Categorías <DownOutlined />
            </Button> */}
          {/* <Dropdown menu={{ items: EmpresasItemDesplegable }}>
            <Button className="button">
              Empresas <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown menu={{ items: ContactoItemDesplegable }}>
            <Button className="button">
              Contacto <DownOutlined />
            </Button>
          </Dropdown> */}
        </div>
        <CartWidget />
      </nav>
    </header>
  );
};
