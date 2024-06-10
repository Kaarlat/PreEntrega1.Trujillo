import React, {useState} from "react";
import { Button } from "antd";

export const ItemCount = () => {
    const [ItemCount, setItemCount] = useState(1);

    const sumar = () => {
        setItemCount (ItemCount + 1);
    };

    const restar = () => {
        if (ItemCount > 1) {
            setItemCount(ItemCount - 1);
        }
    };

    return (
        <><div className="Count">
            <Button onClick={restar} disabled={ItemCount <= 1}>➖</Button>
            <Button onClick={sumar}>➕</Button>
        </div><Button>Agregar al carrito</Button></>
    )
}