import React from 'react';
import { Link } from 'react-router-dom';
import '../../containers/navbar/navbar.css';

export const Item = ({ item }) => {
  return (
    <div className="card">
      <div className="category">{item.category}</div>
      <img src={item.img} alt={item.name} />
      <div className="name">{item.name}</div>
      <div className="price">${item.price}</div>
      <Link to={`/item/${item.id}`}>
        <button className="btn-card">Detalle</button>
      </Link>
    </div>
  );
};
