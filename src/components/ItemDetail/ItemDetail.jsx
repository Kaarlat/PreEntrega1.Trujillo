import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import './ItemDetail.css';

export const ItemDetail = ({ item }) => {
  const { addItemToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItemToCart(item, quantity);
  };

  return (
    <div className="item-detail">
      <img className="item-detail-image" src={item.img} alt={item.name} />
      <div className="item-detail-info">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>Price: ${item.price}</p>
        <div className="item-detail-actions">
          <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)} disabled={quantity >= item.stock}>+</button>
          <button className="add-to-cart-button" onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};
