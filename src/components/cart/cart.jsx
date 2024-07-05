import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Button } from 'antd';
import './cart.css';

export const cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const handleClearCart = () => {
    setCart([]);
  };

  const handleCheckout = () => {
  };

  return (
    <div className="item-count-container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-quantity">Cantidad: {item.quantity}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-actions">
            <Button className="clear-cart-btn" onClick={handleClearCart}>Vaciar Carrito</Button>
            <Button className="checkout-btn" type="primary" onClick={handleCheckout}>Comprar</Button>
          </div>
        </>
      )}
    </div>
  );
};
