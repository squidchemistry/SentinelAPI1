import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Logs from "./pages/Logs";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import React from "react";
import MyChart from "./components/MyChart";
import APIMetrics from "./components/APIMetrics";


function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <Router>
      <div className="flex">
        <Sidebar setPage={setPage} />
        <div className="flex-1">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
      <div>
      <h1>My Chart</h1>
      <MyChart />
    </div>
    <div>
      <h1>Dashboard</h1>
      <APIMetrics />
    </div>
    </Router>
  );
}
export default App;
