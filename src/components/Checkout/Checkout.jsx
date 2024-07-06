import React, { useState, useContext } from 'react';
import { CheckoutForm } from '../CheckoutForm/CheckoutForm';
import { CartContext } from '../../Context/CartContext';
import { collection, Timestamp, writeBatch, addDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import './Checkout.css';

export const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderID, setOrderID] = useState('');

    const { cart, total, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                item: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            };

            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(prod => prod.id);
            const productsRef = collection(db, 'products');
            const querySnapshot = await productsRef.get();

            querySnapshot.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;
                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);
                setOrderID(orderAdded.id);
                clearCart();
                toast.success('¡Felicitaciones! Tu compra ha sido realizada con éxito. 🎉');
            } else {
                console.error('No hay stock en algunos productos');
                toast.error('No hay stock suficiente para algunos productos.');
            }
        } catch (error) {
            console.log(error);
            toast.error('Ocurrió un error al procesar tu orden.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Estamos procesando tu orden...</h1>;
    }

    if (orderID) {
        return <h1>El ID de tu orden es: {orderID}</h1>;
    }

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
};
