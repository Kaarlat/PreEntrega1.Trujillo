import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/async-mocks"; // Asegúrate de que esta función esté en tu archivo async-mocks.js
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams(); // Obtén el ID del producto desde la URL

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await getProductById(id); // Obtén el producto por ID
                setProduct(productData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!product) return <div>Producto no encontrado</div>;

    return (
        <ItemDetail
            id={product.id}
            category={product.category}
            description={product.description}
            img={product.img}
            name={product.name}
            price={product.price}
        />
    );
};
