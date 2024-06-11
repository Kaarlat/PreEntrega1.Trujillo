// css desde navbar.css
import '../../components/navbar/navbar.css';
import react, { useEffect, useState } from 'react';
import { getProducts } from '../../data/async-mocks';
import {ItemList} from '../../components/ItemList/ItemList'


export const ItemListContainer = () => {
    //Lógica del listado de los Items
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(res => setProducts (res))
            .catch(e => console.error(e))
    }, [])

    return (
        <>
            {products ? <ItemList products={products}/> : <div>Cargando..</div>}
        </>
    )
}