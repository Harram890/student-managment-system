
import React, { useEffect, useState } from "react";
import "./Navbar.scss";

import {
  faMagnifyingGlass,
  faBell,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const [adminName, setAdminName] = useState("Admin");

  useEffect(() => {
    const loadProfile = () => {
      const savedProfile = JSON.parse(
        localStorage.getItem("adminProfile")
      );

      if (savedProfile && savedProfile.name) {
        setAdminName(savedProfile.name);
      } else {
        setAdminName("Admin");
      }
    };

    loadProfile();

    window.addEventListener("focus", loadProfile);

    return () => {
      window.removeEventListener("focus", loadProfile);
    };
  }, []);

  return (
    <header className="navbar">

      <div className="navbar-left">
        <h2>Dashboard</h2>
        <p>Welcome back!</p>
      </div>

      <div className="navbar-right">

        <div className="search-box">
          <FontAwesomeIcon icon={faMagnifyingGlass} />

          <input
            type="text"
            placeholder="Search student, class or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button className="notification">
          <FontAwesomeIcon icon={faBell} />
          <span>3</span>
        </button>

        <div className="profile">

          <div className="profile-icon">
            <FontAwesomeIcon icon={faUser} />
          </div>

          <div className="profile-info">
            <h4>{adminName}</h4>
            <p>Administrator</p>
          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;
