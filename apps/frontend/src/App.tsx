import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardComponent from './components/DashboardComponent';
import CompanyProfileComponent from './components/CompanyProfileComponent';
import ProfileComponent from './components/ProfileComponent';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardComponent />} />
        {/* <Route path="/post" element={<PostComponent />} /> */}
        <Route path="/profile" element={<ProfileComponent />} />
        <Route path="/company-profile" element={<CompanyProfileComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
