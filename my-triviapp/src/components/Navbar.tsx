import React from "react";
import { NavLink } from "react-router-dom";
// import "./NavBar.css";

const getActiveClass = ({ isActive }: { isActive: boolean }): string =>
  isActive ? "nav-active" : "";

const NavBar: React.FC = () => {
  return (
    <nav>
      <NavLink to="/" className={getActiveClass}>
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink to="/about" className={getActiveClass}>
        About
      </NavLink>
    </nav>
  );
};

export default NavBar;
