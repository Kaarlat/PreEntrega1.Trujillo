import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

export const Item = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <div className="category">{item.category}</div>
      <img src={item.img} alt={item.name} />
      <div className="name">{item.name}</div>
      <div className="price">${item.price}</div>
      <button className="btn-card" onClick={() => addToCart(item)}>Detalle</button>
    </div>
  );
};
