import React from "react";
import { Item } from '../Item/Item'
import './ItemList.css'

export const ItemList = ({products}) => {
    return (
        <div className="container">
            {products.map((p) =>
            <Item key={p.id}
            id={p.id}
            category={p.category}
            description={p.description}
            img={p.img}
            name={p.name}
            price={p.price}
            />)}
        </div>
    )
}