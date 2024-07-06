import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/client';
import { doc, getDoc } from 'firebase/firestore';
import { ItemDetail } from '../../components/ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const docRef = doc(db, 'products', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setItem({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log('No such document!');
      }
    };
    fetchItem();
  }, [id]);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Loading...</p>}
    </div>
  );
};
