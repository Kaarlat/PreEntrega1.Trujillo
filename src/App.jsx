// Importar con llave si el export está al inicio
import React from 'react'
import {Navbar} from './components/navbar/navbar'
import { ItemListContainer } from './containers/itemListContainer/itemListContainer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting = {'Bienvenidos a TriMaker'}/>
    </div>
  );
};

export default App
