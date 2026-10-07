import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Students from "../pages/Students";
import AddStudent from "../pages/AddStudent";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";

const Routesfile = ({ searchTerm }) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Dashboard searchTerm={searchTerm} />}
        />

        <Route path="/students" element={<Students />} />

        <Route path="/addstudent" element={<AddStudent />} />

        <Route path="/reports" element={<Reports />} />

        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default Routesfile;