import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/client';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { ItemList } from '../../components/ItemList/ItemList';

export const ItemListContainer = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      let q;
      if (category) {
        q = query(collection(db, 'products'), where('category', '==', category));
      } else {
        q = collection(db, 'products');
      }
      const querySnapshot = await getDocs(q);
      setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchItems();
  }, [category]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};
