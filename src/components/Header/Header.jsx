import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="navbar">
        <Link to="/" id="title">
          Event<span>era</span>
        </Link>
        <ul className="nav_links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
