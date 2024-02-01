import './footer.css';
import logo from './Logo-Nazar-Wht.svg';
import home from './hogar.png';
import login from './usuario.png';
import exit from './salida.png';



function Footer() {
  return (
    <div className="footer">

      <header className="pie">
        <img src={logo} className="cabecera-logo" alt="logo" />
        <p>
          Modulos
        </p>
        <img src={exit} className="cabecera-home" alt="exit" />
        <img src={login} className="cabecera-home" alt="login" />
        <img src={home} className="cabecera-home" alt="home" />

      </header>

    </div>
  );
}

export default Footer;



