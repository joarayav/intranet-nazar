import React, { useState, useRef } from "react";
import './App.css';
import './header';
import background from './fondo.PNG';


function limpiar() {
  document.getElementById("text-buscador").value = "";
}

function App() {
  const [busqueda, setBusqueda] = useState(true)
  const form = useRef();


  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }} >
      <header className={`App-header ${busqueda ? 'isActive' : ''} `}>
        <form ref={form} className="app-datos">
          <b className="text-buscador">Buscador</b>
          <b className="text-destino">Destino</b>
          <b className="text-conductor">Conductor</b>
          <b className="text-moneda">Moneda</b>
          <b className="text-Fecha-viaje">Fecha viaje</b>
        </form>
        <nav className="app-buscador-viaje">
          <input className="app-buscador" placeholder=" Codigo de viaje...">
          </input>
          <input className="app-Destino" disabled>
          </input>
          <input className="app-Conductor" disabled>
          </input>
          <input className="app-Moneda" disabled>
          </input>
          <input className="app-Fecha" disabled>
          </input>
        </nav>
        <nav className="search">
          <button className="button-search">Buscar</button>
        </nav>
        <nav className="clean">
          <button className="button-clean" onclick="limpiar()">Limpiar</button>
        </nav>
      </header>

      <body className={`tabla ${busqueda ? 'isActive' : ''} `}>
        <div className="app-Gastos">
          <h4>Gastos</h4>
          <b className="text-combustible">Combustible</b>
          <b className="text-peaje">Peaje</b>
          <b className="text-estacionamiento">Estacionamiento</b>
          <b className="text-lavado">Lavado</b>
          <b className="text-viatico">Viatiaco</b>
          <b className="text-alimentacion">Alimentacion</b>
        </div>
        <div className="app-Gasto-Inicial">
          <h4>Presupuesto</h4>
          <input className="presupuesto-combustible" disabled>
          </input>
          <input className="presupuesto-peaje" disabled>
          </input>
          <input className="presupuesto-estacionamiento" disabled>
          </input>
          <input className="presupuesto-lavado" disabled>
          </input>
          <input className="presupuesto-viatico" disabled>
          </input>
          <input className="presupuesto-alimentacion" disabled>
          </input>
        </div>

        <div className="app-Gasto-Real">
          <h4>Real</h4>
          <input className="presupuesto-combustible">
          </input>
          <input className="presupuesto-peaje">
          </input>
          <input className="presupuesto-estacionamiento">
          </input>
          <input className="presupuesto-lavado">
          </input>
          <input className="presupuesto-viatico">
          </input>
          <input className="presupuesto-alimentacion">
          </input>
        </div>
        <div className="save">
          <button className="button-save">Guardar</button>
        </div>
      </body>



    </div>
  );
}

export default App;



