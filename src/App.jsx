import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from '../src/containers/navbar/navbar';
import { ItemListContainer } from '../src/containers/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../src/containers/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from '../src/Context/CartContext'; 
import { Checkout } from '../src/components/Checkout/Checkout';
import { Cart } from '../src/components/Cart/cart';

const App = () => {
  return (
    <Router>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categorias/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </CartContextProvider>
    </Router>
  );
};

export default App; // Exportación por defecto
