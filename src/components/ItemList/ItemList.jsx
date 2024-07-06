import React from 'react';
import { Item } from '../Item/Item';
import './ItemList.css';

export const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};
