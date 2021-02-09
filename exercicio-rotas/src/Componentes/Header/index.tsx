import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/contato">Contato</Link>
      <Link to="/portfolio">Portfólio</Link>
    </div>
  );
};

export default Header;
