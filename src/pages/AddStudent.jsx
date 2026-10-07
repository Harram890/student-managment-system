import React, { useState } from "react";
import "./AddStudent.scss";

import {
  faUserPlus,
  faUser,
  faEnvelope,
  faPhone,
  faSchool,
  faCalendar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    className: "",
    gender: "",
    dateOfBirth: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.className ||
      !formData.gender ||
      !formData.dateOfBirth ||
      !formData.address
    ) {
      alert("Please fill all fields.");
      return;
    }

    // Get existing students
    const existingStudents =
      JSON.parse(localStorage.getItem("students")) || [];

    // Create new student
    const newStudent = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      className: formData.className,
      gender: formData.gender,
      dateOfBirth: formData.dateOfBirth,
      address: formData.address,
      status: "Active",
    };

    // Add new student
    existingStudents.push(newStudent);

    // Save to localStorage
    localStorage.setItem(
      "students",
      JSON.stringify(existingStudents)
    );

    alert("Student added successfully!");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      className: "",
      gender: "",
      dateOfBirth: "",
      address: "",
    });
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      className: "",
      gender: "",
      dateOfBirth: "",
      address: "",
    });
  };

  return (
    <div className="add-student-page">

      {/* Page Header */}
      <div className="add-student-header">
        <div>
          <h1>Add Student</h1>
          <p>Add a new student to the system</p>
        </div>
      </div>

      {/* Form Card */}
      <div className="student-form-card">

        <div className="form-title">
          <div className="form-icon">
            <FontAwesomeIcon icon={faUserPlus} />
          </div>

          <div>
            <h2>Student Information</h2>
            <p>Enter the student's details below</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            {/* Full Name */}
            <div className="form-group">
              <label>Full Name</label>

              <div className="input-box">
                <FontAwesomeIcon icon={faUser} />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-group">
              <label>Email</label>

              <div className="input-box">
                <FontAwesomeIcon icon={faEnvelope} />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="form-group">
              <label>Phone Number</label>

              <div className="input-box">
                <FontAwesomeIcon icon={faPhone} />

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            {/* Class */}
            <div className="form-group">
              <label>Class</label>

              <div className="input-box">
                <FontAwesomeIcon icon={faSchool} />

                <select
                  name="className"
                  value={formData.className}
                  onChange={handleChange}
                >
                  <option value="">Select Class</option>
                  <option value="8th">8th</option>
                  <option value="9th">9th</option>
                  <option value="10th">10th</option>
                  <option value="11th">11th</option>
                  <option value="12th">12th</option>
                </select>
              </div>
            </div>

            {/* Gender */}
            <div className="form-group">
              <label>Gender</label>

              <div className="input-box">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>

            {/* Date of Birth */}
            <div className="form-group">
              <label>Date of Birth</label>

              <div className="input-box">
                <FontAwesomeIcon icon={faCalendar} />

                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>
            </div>

          </div>

          {/* Address */}
          <div className="form-group full-width">
            <label>Address</label>

            <div className="input-box">
              <FontAwesomeIcon icon={faLocationDot} />

              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter student's address"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="form-buttons">

            <button
              type="button"
              className="cancel-btn"
              onClick={handleCancel}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              <FontAwesomeIcon icon={faUserPlus} />
              Add Student
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddStudent;