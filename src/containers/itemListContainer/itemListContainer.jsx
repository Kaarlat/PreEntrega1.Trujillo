// css desde navbar.css
import "../../components/navbar/navbar.css";
import React, { useEffect, useState } from "react";
import { getProducts } from "../../data/async-mocks";
import { ItemList } from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  //Lógica del listado de los Items
  const [products, setProducts] = useState([]);

  const {idCategory} = useParams()

  useEffect(() => {
    getProducts(idCategory)
        .then(res => setProducts(res))
        .catch(err => console.error(err))
      }, [idCategory])

  return (
    <>{products ? <ItemList products={products} /> : <div>Cargando..</div>}</>
  );
};
