import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/home" className="nav-logo" onClick={closeMenu}>
        Linkd Cufs
      </Link>
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item">
          <Link to="/home" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/schedule" className="nav-link" onClick={closeMenu}>
            Schedule
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/prices" className="nav-link" onClick={closeMenu}>
            Prices
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
