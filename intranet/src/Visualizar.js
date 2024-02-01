import React, { useState, useRef } from "react";
import './Visualizar.css';
import './header';
import background from './fondo.PNG';

function Visualizar() {
  const [visualizar, setVisualizar] = useState(true)
  const form = useRef();

  return (
    <form ref={form} className="App" style={{ backgroundImage: `url(${background})` }} >
      <header className={`App-visualizar ${visualizar ? 'isActive' : ''} `}>
        <nav className="app-datos">
          <b className="text-buscador">Buscador</b>
          <b className="text-destino">Destino</b>
          <b className="text-conductor">Conductor</b>
          <b className="text-moneda">Moneda</b>
          <b className="text-Fecha-viaje">Fecha viaje</b>
        </nav>
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
          <button className="button-clean">Limpiar</button>
        </nav>
      </header>
      <body className={`tabla-revision ${visualizar ? 'isActive' : ''} `}>
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
          <h4>Diferencia</h4>
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
      </body>
    </form>
  );
}

export default Visualizar;



