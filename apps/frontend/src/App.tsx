import React from "react";
import { Routes, Route } from "react-router-dom";
// import HomePage from "./components-backup/HomePage";
// import CompanyDashboardPage from "./components-backup/CompanyDashboardPage";
// import ProfilePage from "./components-backup/ProfilePage";
// import BottomNavBar from "./components-backup/BottomNavBar";
import { Container } from "react-bootstrap";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Container className="flex-grow-1 mt-3">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/dashboard" element={<CompanyDashboardPage />} /> */}
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
        </Routes>
      </Container>
      {/* <BottomNavBar /> */}
    </div>
  );
};

export default App;
