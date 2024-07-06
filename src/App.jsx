import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from '../src/containers/navbar/navbar'; // Verifica la ruta correcta
import { ItemListContainer } from '../src/containers/ItemListContainer/ItemListContainer'; // Verifica la ruta correcta
import { ItemDetailContainer } from '../src/containers/ItemDetailContainer/ItemDetailContainer'; // Verifica la ruta correcta
import { CartWidget } from '../src/components/CartWidget/CartWidget'; // Verifica la ruta correcta
import { Cart } from '../src/components/Cart/Cart'; // Verifica la ruta correcta
import { CartContextProvider } from '../src/Context/CartContext'; // Verifica la ruta correcta

const App = () => {
  return (
    <Router>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categorias/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <CartWidget />
      </CartContextProvider>
    </Router>
  );
};

export default App; // Exportación por defecto
