import React from "react";
import "./Sidebar.scss";

import { useNavigate } from "react-router-dom";

import {
  faHouse,
  faUserGraduate,
  faUserPlus,
  faChartBar,
  faGear,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">

      {/* Logo */}
      <div className="logo">
        <h2>SMS</h2>

        <p>
          <FontAwesomeIcon icon={faGraduationCap} />
          Student Management
        </p>
      </div>

      {/* Sidebar Menu */}
      <nav className="sidebar-menu">

        <button onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faHouse} />
          <span>Dashboard</span>
        </button>

        <button onClick={() => navigate("/students")}>
          <FontAwesomeIcon icon={faUserGraduate} />
          <span>Students</span>
        </button>

        <button onClick={() => navigate("/addstudent")}>
          <FontAwesomeIcon icon={faUserPlus} />
          <span>Add Student</span>
        </button>

        <button onClick={() => navigate("/reports")}>
          <FontAwesomeIcon icon={faChartBar} />
          <span>Reports</span>
        </button>

        <button onClick={() => navigate("/settings")}>
          <FontAwesomeIcon icon={faGear} />
          <span>Settings</span>
        </button>

      </nav>
    </div>
  );
};

export default Sidebar;