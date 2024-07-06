import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './containers/navbar/navbar';
import { ItemListContainer } from '../src/containers/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../src/containers/ItemDetailContainer/ItemDetailContainer';
// import { Cart } from '../src/components/cart/cart';
import { CartProvider } from './Context/CartContext';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categorias/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
