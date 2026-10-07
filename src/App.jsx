import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Routesfile from "./Routes/Routesfile";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter>
      <Sidebar />

      <div className="main-content">
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <Routesfile searchTerm={searchTerm} />
      </div>
    </BrowserRouter>
  );
};

export default App;