import React from "react";
import Logo from "./Logo/Logo.jsx";
import Categorias from "./Categorias/Categorias.jsx";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu.jsx";
import CartWidget from "../CartWidget/CartWidget.jsx";

const Navbar = () => {
  return (
    <nav className="h-10 sticky flex flex-row justify-between mx-auto top-0 z-10 bg-blue-200 dark:bg-blue-950 border-b-2 border-white">
      <Logo />
      <div className="flex flex-row">
        <Categorias />
        <HamburgerMenu />
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
