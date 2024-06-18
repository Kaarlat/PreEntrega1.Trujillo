// Importar con llave si el export está al inicio
import React, { useState } from "react";
import { Navbar } from "./components/navbar/navbar";
import { ItemListContainer } from "./containers/ItemListContainer/itemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [categoria, setCategoria] = useState("/cateogrias");
  // const router = useReactRouter();

  return (
    <>
      <BrowserRouter>

        <Navbar handleCategoria={setCategoria} />
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categorias/:idCategory" element={<ItemListContainer />}/>
        </Routes>

      </BrowserRouter>
    </>
  );
};

export default App;
