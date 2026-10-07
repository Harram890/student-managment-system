import React, { useEffect, useState } from "react";
import "./Dashboard.scss";

import {
  faUserGraduate,
  faMars,
  faVenus,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const defaultStudents = [
  {
    id: 1,
    name: "Ahmed Khan",
    className: "10th",
    gender: "Male",
    status: "Active",
  },
  {
    id: 2,
    name: "Fatima Ali",
    className: "9th",
    gender: "Female",
    status: "Active",
  },
  {
    id: 3,
    name: "Hamza Ahmed",
    className: "10th",
    gender: "Male",
    status: "Active",
  },
  {
    id: 4,
    name: "Ali Raza",
    className: "9th",
    gender: "Male",
    status: "Active",
  },
  {
    id: 5,
    name: "Ayesha Khan",
    className: "10th",
    gender: "Female",
    status: "Active",
  },
  {
    id: 6,
    name: "Usman Ali",
    className: "8th",
    gender: "Male",
    status: "Active",
  },
  {
    id: 7,
    name: "Hira Ahmed",
    className: "9th",
    gender: "Female",
    status: "Active",
  },
  {
    id: 8,
    name: "Bilal Khan",
    className: "10th",
    gender: "Male",
    status: "Active",
  },
  {
    id: 9,
    name: "Sana Malik",
    className: "8th",
    gender: "Female",
    status: "Active",
  },
  {
    id: 10,
    name: "Hassan Raza",
    className: "9th",
    gender: "Male",
    status: "Active",
  },
  {
    id: 11,
    name: "Maryam Ali",
    className: "10th",
    gender: "Female",
    status: "Active",
  },
  {
    id: 12,
    name: "Saad Ahmed",
    className: "8th",
    gender: "Male",
    status: "Active",
  },
  {
    id: 13,
    name: "Iqra Khan",
    className: "9th",
    gender: "Female",
    status: "Active",
  },
  {
    id: 14,
    name: "Omer Farooq",
    className: "10th",
    gender: "Male",
    status: "Active",
  },
  {
    id: 15,
    name: "Zainab Ahmed",
    className: "8th",
    gender: "Female",
    status: "Active",
  },
  {
    id: 16,
    name: "Talha Khan",
    className: "9th",
    gender: "Male",
    status: "Active",
  },
  {
    id: 17,
    name: "Laiba Raza",
    className: "10th",
    gender: "Female",
    status: "Active",
  },
  {
    id: 18,
    name: "Arham Ali",
    className: "8th",
    gender: "Male",
    status: "Active",
  },
  {
    id: 19,
    name: "Mahnoor Khan",
    className: "9th",
    gender: "Female",
    status: "Active",
  },
  {
    id: 20,
    name: "Shahzaib Ahmed",
    className: "10th",
    gender: "Male",
    status: "Active",
  },
  {
    id: 21,
    name: "Amna Malik",
    className: "8th",
    gender: "Female",
    status: "Active",
  },
  {
    id: 22,
    name: "Danish Raza",
    className: "9th",
    gender: "Male",
    status: "Active",
  },
  {
    id: 23,
    name: "Areeba Khan",
    className: "10th",
    gender: "Female",
    status: "Active",
  },
];

const Dashboard = ({ searchTerm }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const savedStudents =
      JSON.parse(localStorage.getItem("students")) || [];

    const allStudents = [...defaultStudents, ...savedStudents];

    setStudents(allStudents);
  }, []);

  useEffect(() => {
    const handleFocus = () => {
      const savedStudents =
        JSON.parse(localStorage.getItem("students")) || [];

      const allStudents = [...defaultStudents, ...savedStudents];

      setStudents(allStudents);
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  const totalStudents = students.length;

  const maleStudents = students.filter(
    (student) => student.gender === "Male"
  ).length;

  const femaleStudents = students.filter(
    (student) => student.gender === "Female"
  ).length;

  const activeStudents = students.filter(
    (student) => student.status === "Active"
  ).length;

  // Search students by name, class or email
  const search = (searchTerm || "").trim().toLowerCase();

  const filteredStudents = students.filter((student) => {
    if (!search) {
      return true;
    }

    return (
      String(student.name || "").toLowerCase().includes(search) ||
      String(student.className || "").toLowerCase().includes(search) ||
      String(student.email || "").toLowerCase().includes(search)
    );
  });

  return (
    <div className="dashboard">

      {/* Welcome Section */}
      <div className="welcome-section">
        <div>
          <h1>Welcome Back, Admin!</h1>
          <p>
            Here's what's happening with your students today.
          </p>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="stats-container">

        <div className="stat-card">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faUserGraduate} />
          </div>

          <div>
            <p>Total Students</p>
            <h2>{totalStudents}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faMars} />
          </div>

          <div>
            <p>Male Students</p>
            <h2>{maleStudents}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faVenus} />
          </div>

          <div>
            <p>Female Students</p>
            <h2>{femaleStudents}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faUserCheck} />
          </div>

          <div>
            <p>Active Students</p>
            <h2>{activeStudents}</h2>
          </div>
        </div>

      </div>

      {/* Recent Students */}
      <div className="recent-students">

        <div className="section-header">
          <div>
            <h2>Recent Students</h2>
            <p>Recently added students</p>
          </div>

          <button>View All</button>
        </div>

        <div className="students-table">

          <div className="table-header">
            <span>Name</span>
            <span>Class</span>
            <span>Gender</span>
            <span>Status</span>
          </div>

          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <div className="table-row" key={student.id}>
                <span>{student.name}</span>
                <span>{student.className}</span>
                <span>{student.gender}</span>
                <span className="active">
                  {student.status}
                </span>
              </div>
            ))
          ) : (
            <div className="table-row">
              <span>No student found</span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default Dashboard;