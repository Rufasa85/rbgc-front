import { Link } from "react-router-dom";
import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/">Home</Link>
      <Link to="/games">All Games</Link>
      {/* TODO: only display if not logged in */}
      <Link to="/login">Login/Signup</Link>
      {/* TODO: only display if logged in */}
      <Link to="/user/1">Profile</Link>
      <button>Logout</button>
    </div>
  );
};

export default Navbar;
