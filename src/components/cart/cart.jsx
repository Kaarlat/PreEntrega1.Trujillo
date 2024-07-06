import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import './Cart.css';

export const Cart = () => {
  const { cart, clearCart, removeItem } = useContext(CartContext);
  const navigate = useNavigate();

  const totalAmount = cart.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 0), 0);

  const handleClearCart = () => {
    clearCart();
  };

  const handlePay = () => {
    if (cart.length === 0) {
      toast.error('Tu carrito está vacío.');
      return;
    }

    navigate('/checkout');
  };

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  return (
    <div className="cart">
      <h2>Tus compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-card">
              {item.img ? (
                <img src={item.img} alt={item.name} className="cart-card-image" />
              ) : (
                <p>No hay imagen disponible</p>
              )}
              <div className="cart-card-info">
                <h3 className="cart-card-title">{item.name}</h3>
                <p className="cart-card-text">Cantidad: {item.quantity}</p>
                <p className="cart-card-text">Precio unitario: ${item.price.toFixed(2)}</p>
                <p className="cart-card-text">Precio total: ${(item.price * item.quantity).toFixed(2)}</p>
                <button className="cart-card-remove-button" onClick={() => handleRemoveItem(item.id)}>Eliminar Producto</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total:</h3>
            <span>${totalAmount.toFixed(2)}</span>
            <button onClick={handlePay} className="cart-pay-button">Pagar</button>
            <div className="cart-actions">
              <button onClick={handleClearCart} className="cart-clear-button">Vaciar Carrito</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
