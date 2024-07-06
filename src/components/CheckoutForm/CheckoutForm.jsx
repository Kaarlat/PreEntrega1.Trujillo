import React, { useState } from 'react';

export const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name, phone, email
        };

        onConfirm(userData);
    };

    return (
        <div className='checkout-form-container'>
            <form onSubmit={handleConfirm} className='checkout-form'>
                <label className='checkout-form-label'>
                    Nombre
                    <input 
                        className='checkout-form-input'
                        type='text'
                        value={name}
                        onChange={({ target }) => setName(target.value)} 
                        required
                    />
                </label>
                <label className='checkout-form-label'>
                    Teléfono
                    <input 
                        className='checkout-form-input'
                        type='text'
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)} 
                        required
                    />
                </label>
                <label className='checkout-form-label'>
                    Email
                    <input 
                        className='checkout-form-input'
                        type='email'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)} 
                        required
                    />
                </label>
                <div className='checkout-form-button-container'>
                    <button type='submit' className='checkout-form-button'>Confirmar Compra</button>
                </div>
            </form>
        </div>
    );
};
