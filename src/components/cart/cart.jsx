import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './Cart.css';

export const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

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
              <img src={item.img} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
          <button onClick={handleClearCart}>Vaciar Carrito</button>
        </div>
      )}
    </div>
  );
};
