import React, { useState } from "react";
import './ItemDetail.css';
import { Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

export const ItemDetail = ({ id, category, description, img, name, price }) => {
    const [quantity, setQuantity] = useState(1);
    const maxStock = 10;

    const handleIncrement = () => {
        if (quantity < maxStock) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="item-detail-card">
            <div className="item-detail-content">
                <img src={img} alt={name} className="item-detail-img" />
                <div className="item-detail-info">
                    <h2>{name}</h2>
                    <div className="item-detail-category">{category}</div>
                    <p className="item-detail-description">{description}</p>
                    <p className="item-detail-price">{price}</p>
                    <div className="item-detail-quantity">
                        <Button 
                            className="quantity-button"
                            onClick={handleDecrement} 
                            icon={<MinusOutlined />} 
                            disabled={quantity <= 1}
                        />
                        <span>{quantity}</span>
                        <Button 
                            className="quantity-button"
                            onClick={handleIncrement} 
                            icon={<PlusOutlined />} 
                            disabled={quantity >= maxStock}
                        />
                    </div>
                    <Button
                        className="btn-add-to-cart"
                        type="primary"
                        size="large"
                    >
                        Agregar al carrito
                    </Button>
                </div>
            </div>
        </div>
    );
};
