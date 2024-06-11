// css desde navbar.css
import "../../components/navbar/navbar.css";
import { useEffect, useState } from "react";
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
        switch (location.pathname) {
            case "/categorias/figuras":
                setProducts(res.filter(p => p.category === "Figuras personalizadas"))
            break;
            case "/categorias/regalos":
                setProducts(res.filter(p => p.category === "Regalos"))
            break;
            case "/categorias/biodegradable":
                setProducts(res.filter(p => p.category === "Biodegradable"))
            break;
        
            default:setProducts(res)
                break;
        }
     })
      .catch((e) => console.error(e));
  }, [location.pathname] );

  return (
    <>{products ? <ItemList style={{width: "25%"}} products={products} /> : <div>Cargando..</div>}</>
  );
};
