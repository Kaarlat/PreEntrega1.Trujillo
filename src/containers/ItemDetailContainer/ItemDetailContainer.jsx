import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { db } from '../../firebase/client';
import { doc, getDoc } from 'firebase/firestore';
import '../../components/ItemDetail/ItemDetail.css';

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const { addItemToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchItem = async () => {
      const itemDoc = doc(db, 'products', id);
      const docSnap = await getDoc(itemDoc);
      if (docSnap.exists()) {
        setItem(docSnap.data());
      } else {
        console.log('No hay productos!');
      }
    };

    fetchItem();
  }, [id]);

  const handleAddToCart = () => {
    addItemToCart(item, quantity);
  };

  if (!item) return <p>Loading...</p>;

  return (
    <div className="item-detail-container">
      <div className="item-detail">
        <img className="item-detail-image" src={item.img} alt={item.name} />
        <div className="item-detail-info">
          <h2>{item.name}</h2>
          <p className="category">{item.category}</p>
          <p>{item.description}</p>
          <p className="price">Price: ${item.price}</p>
          <div className="item-detail-actions">
            <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} disabled={quantity >= item.stock}>+</button>
            <button className="add-to-cart-button" onClick={handleAddToCart}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};
