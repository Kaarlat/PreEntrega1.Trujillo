// Se debe importar react y css con librería que se utilizará
import React from 'react';
import './navbar.css';
import { Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { CategoriasItemDesplegable, EmpresasItemDesplegable, ContactoItemDesplegable } from './itemDesplegable';
import {CartWidget} from '../cartwidget/cartwidget'

// Agregar la item a Menu, para no repetir el código
const createMenu = (items) => <Menu items={items} />;

// Si exporto desde el inicio se debe importar con llaves {}
export const Navbar = () => {
    return (
        <header>
            <nav className='navbar'>
                <img src="../src/assets/logo.png" alt="Logo" />
                <p>Impresiones 3D</p>
                <div className='buttons'>
                    <Dropdown menu={{ items: CategoriasItemDesplegable }}>
                        <Button className="button">
                            Categorías <DownOutlined />
                        </Button>
                    </Dropdown>
                    <Dropdown menu={{ items: EmpresasItemDesplegable }}>
                        <Button className="button">
                            Empresas <DownOutlined />
                        </Button>
                    </Dropdown>
                    <Dropdown menu={{ items: ContactoItemDesplegable }}>
                        <Button className="button">
                            Contacto <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
                <CartWidget />
            </nav>
        </header>
    );
};
