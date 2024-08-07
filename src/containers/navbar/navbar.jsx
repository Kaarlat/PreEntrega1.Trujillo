import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Menu } from "antd";
import { CategoriasItemDesplegable } from "./itemDesplegable";
import { CartWidget } from '../../components/CartWidget/CartWidget';
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [current, setCurrent] = useState("0");

  const onClick = (e) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    if (location.pathname === "/categorias") {
      setCurrent("0");
    }
  }, [location.pathname]);

  return (
    <header>
      <nav className="navbar">
        <Link to="/">
          <img id="home-logo" src="../src/assets/logo.png" alt="Logo" />
        </Link>
        <p>Impresiones 3D</p>
        <div className="buttons">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            multiple
            items={CategoriasItemDesplegable.map((item) => ({
              key: item.label,
              label: (
                <Link
                  to={`/categorias/${item.label}`}
                  onClick={() => setCurrent(item.label)}
                >
                  {item.label}
                </Link>
              ),
            }))}
          />
        </div>
        <CartWidget />
      </nav>
    </header>
  );
};
