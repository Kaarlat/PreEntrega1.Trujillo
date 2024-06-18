import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/async-mocks";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    getProductById(idItem)
      .then(res => setProduct(res))
      .catch(e => console.error(e));
  }, [idItem]);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
        </div>
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );
};
