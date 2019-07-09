import React, { useState } from "react";

import Cookie from "js-cookie";
import { A } from "hookrouter";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(Cookie.get("username"));

  const handleLogout = () => {
    Cookie.remove("username");
    Cookie.remove("password");
    setLoggedIn(false);
  };

  return (
    <div className="navbar">
      <a href="https://bottega.tech" target="_blank">
        <img src="/assets/bottega-descriptive-logo.png" />
      </a>
      <A href="/" className="home-button">
        Home
      </A>

      {loggedIn ? (
        <div className="admin-nav-buttons">
          <A href="/student-form">Form</A>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
