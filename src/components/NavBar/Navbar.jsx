import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css"
const Navbar = () => {
return (
    <div className="menu">
        <p>My E-commerce</p>
        <p>Enlace 1</p>
        <p>Enlace 2</p>
        <p>Enlace 3</p>
        <p>Enlace 4</p>
        <CartWidget/>
    </div>
)
}

export default Navbar;
