import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheet/DashboardComponent.css';

const DashboardComponent: React.FC = () => {
    return (
        <div style={{ width: '400px' }}>
            <div className="container">
                <h1>Explore</h1>

                <div className="company-card">
                    <div className="company-info">
                        {/* <p className="company-name">COMPANY NAME</p> */}
                        <p className="company-name">
                            <Link to="/company-profile" className="company-link">
                                Company Name
                            </Link>
                        </p>

                        <p className="progress-text">4,000 / 10,000</p>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '40%' }}></div>
                        </div>
                    </div>
                    <div className="company-logo">
                        <p>Company's logomark</p>
                    </div>
                </div>

                <hr />

                <div className="company-card">
                    <div className="company-info">
                        <p className="company-name">
                            <Link to="/company-profile" className="company-link">
                                Company Name
                            </Link>
                        </p>
                        <p className="progress-text">0 / 80,000</p>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                    <div className="company-logo">
                        <p>Company's logomark</p>
                    </div>
                </div>

                <div className="company-card">
                    <div className="company-info">
                        <p className="company-name">
                            <Link to="/company-profile" className="company-link">
                                Company Name
                            </Link>
                        </p>
                        <p className="progress-text">0 / 80,000</p>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                    <div className="company-logo">
                        <p>Company's logomark</p>
                    </div>
                </div>

                <div className="main-logo">
                    <p>VeCycle logomark</p>
                </div>

                <div className="bottom-nav">
                    <div className="nav-item">
                        <p>Explore</p>
                    </div>
                    <div className="nav-item">
                        <p>Post</p>
                    </div>
                    <div className="nav-item">
                        <p>Profile</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardComponent;
