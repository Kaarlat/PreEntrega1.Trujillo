// Importar con llave si el export está al inicio
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../src/containers/navbar/navbar";
import { ItemListContainer } from "./containers/ItemListContainer/itemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  const [categoria, setCategoria] = useState("/categorias");

  return (
    <BrowserRouter>
      <Navbar handleCategoria={setCategoria} />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categorias/:idCategory" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;