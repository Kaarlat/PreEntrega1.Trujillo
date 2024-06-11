// css desde navbar.css
import "../../components/navbar/navbar.css";
import react, { useEffect, useState } from "react";
import { getProducts } from "../../data/async-mocks";
import { ItemList } from "../../components/ItemList/ItemList";
import { useLocation } from "react-router-dom";

export const ItemListContainer = () => {
  //Lógica del listado de los Items
  const [products, setProducts] = useState([]);
  const location = useLocation();
  console.log(location.pathname)

  useEffect(() => {
    console.log(location.pathname)

    getProducts()
      .then((res) => {
        setProducts(res)

        if(location.pathname === "/categorias/figuras"){
            setProducts(res.filter(p => p.category === "Figuras personalizadas"))
        }else if(location.pathname === "/categorias/regalos"){
            setProducts(res.filter(p => p.category === "Regalos"))

        }

      })
      .catch((e) => console.error(e));
  }, [location.pathname] );

  return (
    <>{products ? <ItemList products={products} /> : <div>Cargando..</div>}</>
  );
};
