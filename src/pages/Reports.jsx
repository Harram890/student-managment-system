import React, { useEffect, useState } from "react";
import "./Reports.scss";

import {
  faChartBar,
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
    status: "Inactive",
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

const Reports = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const loadStudents = () => {
      const savedStudents =
        JSON.parse(localStorage.getItem("students")) || [];

      const allStudents = [...defaultStudents, ...savedStudents];

      setStudents(allStudents);
    };

    loadStudents();

    window.addEventListener("focus", loadStudents);

    return () => {
      window.removeEventListener("focus", loadStudents);
    };
  }, []);

  // Student Counting
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

  // Class Counting
  const eighthStudents = students.filter(
    (student) => student.className === "8th"
  ).length;

  const ninthStudents = students.filter(
    (student) => student.className === "9th"
  ).length;

  const tenthStudents = students.filter(
    (student) => student.className === "10th"
  ).length;

  const eleventhStudents = students.filter(
    (student) => student.className === "11th"
  ).length;

  const twelfthStudents = students.filter(
    (student) => student.className === "12th"
  ).length;

  return (
    <div className="reports-page">

      <div className="reports-header">
        <div>
          <h1>Reports</h1>
          <p>View student statistics and reports</p>
        </div>
      </div>

      <div className="report-stats">

        <div className="report-card">
          <div className="report-icon">
            <FontAwesomeIcon icon={faUserGraduate} />
          </div>

          <div>
            <p>Total Students</p>
            <h2>{totalStudents}</h2>
          </div>
        </div>

        <div className="report-card">
          <div className="report-icon">
            <FontAwesomeIcon icon={faMars} />
          </div>

          <div>
            <p>Male Students</p>
            <h2>{maleStudents}</h2>
          </div>
        </div>

        <div className="report-card">
          <div className="report-icon">
            <FontAwesomeIcon icon={faVenus} />
          </div>

          <div>
            <p>Female Students</p>
            <h2>{femaleStudents}</h2>
          </div>
        </div>

        <div className="report-card">
          <div className="report-icon">
            <FontAwesomeIcon icon={faUserCheck} />
          </div>

          <div>
            <p>Active Students</p>
            <h2>{activeStudents}</h2>
          </div>
        </div>

      </div>

      <div className="report-content">

        <div className="report-box">

          <div className="box-title">
            <FontAwesomeIcon icon={faChartBar} />

            <div>
              <h2>Student Overview</h2>
              <p>Student statistics overview</p>
            </div>
          </div>

          <div className="overview">

            <div>
              <span>8th Class</span>
              <strong>{eighthStudents} Students</strong>
            </div>

            <div>
              <span>9th Class</span>
              <strong>{ninthStudents} Students</strong>
            </div>

            <div>
              <span>10th Class</span>
              <strong>{tenthStudents} Students</strong>
            </div>

            <div>
              <span>11th Class</span>
              <strong>{eleventhStudents} Students</strong>
            </div>

            <div>
              <span>12th Class</span>
              <strong>{twelfthStudents} Students</strong>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Reports;