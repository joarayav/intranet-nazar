import './header.css';
import logo from './Logo-Nazar.svg';
import home from './hogar.png';
import login from './usuario.png';
import exit from './salida.png';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBAr from "./componente";
import App from "./App";
import Visualizar from "./Visualizar";
import Inicio from "./Inicio"



function Header() {

  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <div className="header">

      <header className="cabecera">
        <div>
          <img src={logo} className="cabecera-logo" alt="logo" />

        </div>
        <div>
          <button
            onClick={toggleMenu} className='cabecera-button'>
            Rendiciones
          </button>

        </div>
        <div className="icons">
          <img src={exit} className="cabecera-home" alt="exit" />
          <img src={login} className="cabecera-home" alt="login" />
          <img src={home} className="cabecera-home" alt="home" />
        </div>

      </header>
      <body className='body-formulario'>
        <nav className={`cabecera-nav ${menu ? 'isActive' : ''} `}>
          <ul className='cabecera-ul'>
            <Router>
              <NavBAr />
              <Routes  className='cabecera-links'>
                <Route path="/Inicio" element={<Inicio />} />
                <Route path="/App" element={<App />} />
                <Route path="/Visualizar" element={<Visualizar />} />
              </Routes>
            </Router>
          </ul>
        </nav>
      </body>

    </div>
  );
}

export default Header;



