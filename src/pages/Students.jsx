import React, { useState } from "react";
import "./Students.scss";
import { Link } from "react-router-dom";
import {
  faEye,
  faPen,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Students = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const students = [
    {
      id: 1,
      name: "Ahmed Khan",
      className: "10th",
      gender: "Male",
      email: "ahmed@gmail.com",
      status: "Active",
    },
    {
      id: 2,
      name: "Fatima Ali",
      className: "9th",
      gender: "Female",
      email: "fatima@gmail.com",
      status: "Active",
    },
    {
      id: 3,
      name: "Hamza Ahmed",
      className: "10th",
      gender: "Male",
      email: "hamza@gmail.com",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Ali Raza",
      className: "9th",
      gender: "Male",
      email: "ali@gmail.com",
      status: "Active",
    },
    {
      id: 5,
      name: "Ayesha Khan",
      className: "10th",
      gender: "Female",
      email: "ayesha@gmail.com",
      status: "Active",
    },
    {
      id: 6,
      name: "Usman Ali",
      className: "8th",
      gender: "Male",
      email: "usman@gmail.com",
      status: "Active",
    },
    {
      id: 7,
      name: "Hira Ahmed",
      className: "9th",
      gender: "Female",
      email: "hira@gmail.com",
      status: "Active",
    },
    {
      id: 8,
      name: "Bilal Khan",
      className: "10th",
      gender: "Male",
      email: "bilal@gmail.com",
      status: "Active",
    },
    {
      id: 9,
      name: "Sana Malik",
      className: "8th",
      gender: "Female",
      email: "sana@gmail.com",
      status: "Active",
    },
    {
      id: 10,
      name: "Hassan Raza",
      className: "9th",
      gender: "Male",
      email: "hassan@gmail.com",
      status: "Active",
    },
    {
      id: 11,
      name: "Maryam Ali",
      className: "10th",
      gender: "Female",
      email: "maryam@gmail.com",
      status: "Active",
    },
    {
      id: 12,
      name: "Saad Ahmed",
      className: "8th",
      gender: "Male",
      email: "saad@gmail.com",
      status: "Active",
    },
    {
      id: 13,
      name: "Iqra Khan",
      className: "9th",
      gender: "Female",
      email: "iqra@gmail.com",
      status: "Active",
    },
    {
      id: 14,
      name: "Omer Farooq",
      className: "10th",
      gender: "Male",
      email: "omer@gmail.com",
      status: "Active",
    },
    {
      id: 15,
      name: "Zainab Ahmed",
      className: "8th",
      gender: "Female",
      email: "zainab@gmail.com",
      status: "Active",
    },
    {
      id: 16,
      name: "Talha Khan",
      className: "9th",
      gender: "Male",
      email: "talha@gmail.com",
      status: "Active",
    },
    {
      id: 17,
      name: "Laiba Raza",
      className: "10th",
      gender: "Female",
      email: "laiba@gmail.com",
      status: "Active",
    },
    {
      id: 18,
      name: "Arham Ali",
      className: "8th",
      gender: "Male",
      email: "arham@gmail.com",
      status: "Active",
    },
    {
      id: 19,
      name: "Mahnoor Khan",
      className: "9th",
      gender: "Female",
      email: "mahnoor@gmail.com",
      status: "Active",
    },
    {
      id: 20,
      name: "Shahzaib Ahmed",
      className: "10th",
      gender: "Male",
      email: "shahzaib@gmail.com",
      status: "Active",
    },
    {
      id: 21,
      name: "Amna Malik",
      className: "8th",
      gender: "Female",
      email: "amna@gmail.com",
      status: "Active",
    },
    {
      id: 22,
      name: "Danish Raza",
      className: "9th",
      gender: "Male",
      email: "danish@gmail.com",
      status: "Active",
    },
    {
      id: 23,
      name: "Areeba Khan",
      className: "10th",
      gender: "Female",
      email: "areeba@gmail.com",
      status: "Active",
    },
  ];

  const filteredStudents = students.filter((student) => {
    const search = searchTerm.toLowerCase().trim();

    return (
      student.name.toLowerCase().includes(search) ||
      student.className.toLowerCase().includes(search) ||
      student.email.toLowerCase().includes(search)
    );
  });

  return (
    <div className="students-page">

      {/* Page Header */}

      <div className="students-header">
        <div>
          <h1>Students</h1>
          <p>Manage all registered students</p>
        </div>

       <Link to ="/addstudent">
        <button className="add-student-btn">
          <FontAwesomeIcon icon={faUserPlus} />
          Add Student
        </button>
       </Link>
      </div>

      {/* Search */}

      <div className="students-tools">
        <input
          type="text"
          placeholder="Search by name, class or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Students Table */}

      <div className="students-card">

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.className}</td>
                  <td>{student.gender}</td>
                  <td>{student.email}</td>

                  <td>
                    <span
                      className={`status ${student.status.toLowerCase()}`}
                    >
                      {student.status}
                    </span>
                  </td>

                  <td className="actions">
                    <button>
                      <FontAwesomeIcon icon={faEye} />
                    </button>

                    <button>
                      <FontAwesomeIcon icon={faPen} />
                    </button>

                    <button>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No student found
                </td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default Students;