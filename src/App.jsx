// Importar con llave si el export está al inicio
import React, { useState } from "react";
import { Navbar } from "./components/navbar/navbar";
import { ItemListContainer } from "./containers/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [categoria, setCategoria] = useState("todos");
  // const router = useReactRouter();

  return (
    <>
      <BrowserRouter>
        <Navbar handleCategoria={setCategoria} />

        <Routes>
          <Route path="/" element={<div style={{marginTop: "5rem"}}>Página principal</div>}></Route>
          <Route path="/regalos" element={<ItemListContainer />}></Route>
          {/* <Route path="/" element={<ItemListContainer />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
