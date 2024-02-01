import React from "react";
import { Link } from "react-router-dom";
const links = [
    {
        name: "Inicio",
        href: "/Inicio",
    },
    {
        name: "Crear Rendicion",
        href: "/App",
    },
    {
        name: "Visualizar Rendicion",
        href: "/Visualizar",
    },

];

const NavBAr = () => {
    return (
        <div>
            {links.map((x) =>  (
                <Link to={x.href}>{x.name}</Link>
            ))}
        </div>
    )
}

export default NavBAr;