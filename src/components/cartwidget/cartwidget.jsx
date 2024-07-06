import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge } from 'antd';

export const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-widget">
      <Link to="/cart">
        <Badge count={totalItems} overflowCount={99} style={{ backgroundColor: '#e68d10', color: 'white' }}>
          <ShoppingCartOutlined style={{ fontSize: '24px', color: '#e68d10' }} />
        </Badge>
      </Link>
    </div>
  );
};
