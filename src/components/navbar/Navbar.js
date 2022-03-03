import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sidenav">
      <Link to="/">New User</Link>
      <Link to="/categories">New Category</Link>
    </div>
  );
}

export default Navbar;
