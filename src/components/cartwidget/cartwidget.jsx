import React from "react";
import '../navbar/navbar.css';
import {ShoppingCartOutlined} from '@ant-design/icons';
import { Badge, Space } from 'antd';

export const CartWidget = () => {
    return (
        <Badge className= "cartWidget" count={1} color="#faad14">
            <ShoppingCartOutlined className="cart" />
        </Badge>
    )
}