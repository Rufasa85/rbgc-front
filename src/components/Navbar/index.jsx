import { Link } from "react-router-dom";
import React from "react";
import "./style.css";

const Navbar = (props) => {
  return (
    <div className="Navbar">
      <Link to="/">Home</Link>
      <Link to="/games">All Games</Link>
      {props.isLoggedIn ? (
        <>
          <Link to={`/user/${props.user.id}`}>Profile</Link>
          <button onClick={props.logout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login/Signup</Link>
      )}
    </div>
  );
};

export default Navbar;
