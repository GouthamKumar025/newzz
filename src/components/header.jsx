import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>NewsApp</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/business">Business</Link>
          <Link to="/politics">Politics</Link>
          <Link to="/health">Health</Link>
          <Link to="/entertainment">Entertainment</Link>
          <Link to="/sports">Sports</Link>
        </div>
      </nav>
      <div></div>
    </div>
  );
};

export default Header;
