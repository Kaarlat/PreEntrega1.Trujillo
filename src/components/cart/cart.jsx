import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './Cart.css';

export const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="cart">
      <h2>Tus compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-name">{item.name}</div>
              <div className="item-price">${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total:</h3>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <button onClick={handleClearCart}>Vaciar Carrito</button>
        </div>
      )}
    </div>
  );
};
