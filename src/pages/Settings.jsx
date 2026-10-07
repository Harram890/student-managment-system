import React, { useState } from "react";
import "./Settings.scss";

import {
  faGear,
  faUser,
  faBell,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Settings = () => {
  const [activeSection, setActiveSection] = useState(null);

  const [profile, setProfile] = useState({
    name: "Admin",
    email: "admin@gmail.com",
  });

  const [notifications, setNotifications] = useState({
    email: true,
    student: true,
    system: false,
  });

  const [password, setPassword] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });

  const handleProfileChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleNotificationChange = (e) => {
    setNotifications({
      ...notifications,
      [e.target.name]: e.target.checked,
    });
  };

  const handlePasswordChange = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = () => {
    localStorage.setItem("adminProfile", JSON.stringify(profile));
    alert("Profile updated successfully!");
  };

  const saveNotifications = () => {
    localStorage.setItem(
      "notifications",
      JSON.stringify(notifications)
    );

    alert("Notification settings updated!");
  };

  const changePassword = () => {
    if (
      !password.current ||
      !password.newPassword ||
      !password.confirm
    ) {
      alert("Please fill all password fields.");
      return;
    }

    if (password.newPassword !== password.confirm) {
      alert("New password and confirm password do not match.");
      return;
    }

    localStorage.setItem("adminPassword", password.newPassword);

    alert("Password changed successfully!");

    setPassword({
      current: "",
      newPassword: "",
      confirm: "",
    });
  };

  return (
    <div className="settings-page">

      {/* Header */}
      <div className="settings-header">
        <div>
          <h1>Settings</h1>
          <p>Manage your system settings</p>
        </div>
      </div>

      {/* Settings Card */}
      <div className="settings-card">

        <div className="settings-title">
          <div className="settings-icon">
            <FontAwesomeIcon icon={faGear} />
          </div>

          <div>
            <h2>General Settings</h2>
            <p>
              Update your account and system preferences
            </p>
          </div>
        </div>

        {/* Admin Profile */}
        <div className="setting-item">

          <div className="setting-info">
            <FontAwesomeIcon icon={faUser} />

            <div>
              <h3>Admin Profile</h3>
              <p>Manage your administrator profile</p>
            </div>
          </div>

          <button
            onClick={() =>
              setActiveSection(
                activeSection === "profile"
                  ? null
                  : "profile"
              )
            }
          >
            {activeSection === "profile" ? "Close" : "Edit"}
          </button>

        </div>

        {/* Profile Form */}
        {activeSection === "profile" && (
          <div className="settings-form">

            <label>Admin Name</label>

            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              placeholder="Enter admin name"
            />

            <label>Email</label>

            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              placeholder="Enter email"
            />

            <button
              className="save-settings-btn"
              onClick={saveProfile}
            >
              Save Profile
            </button>

          </div>
        )}

        {/* Notifications */}
        <div className="setting-item">

          <div className="setting-info">
            <FontAwesomeIcon icon={faBell} />

            <div>
              <h3>Notifications</h3>
              <p>Manage notification preferences</p>
            </div>
          </div>

          <button
            onClick={() =>
              setActiveSection(
                activeSection === "notifications"
                  ? null
                  : "notifications"
              )
            }
          >
            {activeSection === "notifications"
              ? "Close"
              : "Manage"}
          </button>

        </div>

        {/* Notification Form */}
        {activeSection === "notifications" && (
          <div className="settings-form notification-form">

            <label>
              <input
                type="checkbox"
                name="email"
                checked={notifications.email}
                onChange={handleNotificationChange}
              />

              Email Notifications
            </label>

            <label>
              <input
                type="checkbox"
                name="student"
                checked={notifications.student}
                onChange={handleNotificationChange}
              />

              New Student Notifications
            </label>

            <label>
              <input
                type="checkbox"
                name="system"
                checked={notifications.system}
                onChange={handleNotificationChange}
              />

              System Notifications
            </label>

            <button
              className="save-settings-btn"
              onClick={saveNotifications}
            >
              Save Notifications
            </button>

          </div>
        )}

        {/* Password & Security */}
        <div className="setting-item">

          <div className="setting-info">
            <FontAwesomeIcon icon={faLock} />

            <div>
              <h3>Password & Security</h3>
              <p>Manage your password and security</p>
            </div>
          </div>

          <button
            onClick={() =>
              setActiveSection(
                activeSection === "password"
                  ? null
                  : "password"
              )
            }
          >
            {activeSection === "password"
              ? "Close"
              : "Change"}
          </button>

        </div>

        {/* Password Form */}
        {activeSection === "password" && (
          <div className="settings-form">

            <label>Current Password</label>

            <input
              type="password"
              name="current"
              value={password.current}
              onChange={handlePasswordChange}
              placeholder="Enter current password"
            />

            <label>New Password</label>

            <input
              type="password"
              name="newPassword"
              value={password.newPassword}
              onChange={handlePasswordChange}
              placeholder="Enter new password"
            />

            <label>Confirm New Password</label>

            <input
              type="password"
              name="confirm"
              value={password.confirm}
              onChange={handlePasswordChange}
              placeholder="Confirm new password"
            />

            <button
              className="save-settings-btn"
              onClick={changePassword}
            >
              Change Password
            </button>

          </div>
        )}

      </div>

    </div>
  );
};

export default Settings;