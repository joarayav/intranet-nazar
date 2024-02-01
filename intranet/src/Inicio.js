import React, { useState } from "react";
import './home.css';
import background from './fondo.PNG';

function Inicio() {
    const [busqueda, setBusqueda] = useState(true)
    const [visualizar, setVisualizar] = useState(false)
  
    return (
      <div className="App" style={{ backgroundImage: `url(${background})` }} >
        <header className="App-header">
        </header>
        Bienvenidos al portal de rendiciones.
        <body className="tabla">
        </body>
      </div>
    );
  }
  
  export default Inicio;
  
  
  
  