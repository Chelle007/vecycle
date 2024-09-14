import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheet/DashboardComponent.css';
import NavbarComponent from './NavbarComponent';

const DashboardComponent: React.FC = () => {
    return (
        <div className="container">
            <h1>Explore</h1>

            <Link to="/company-profile" className="company-link">
                <div className="company-card">
                    <div className="company-info">
                        {/* <p className="company-name">COMPANY NAME</p> */}
                        <p className="company-name">
                            Company Name
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
            </Link>

            <hr />

            <Link to="/company-profile" className="company-link">
                <div className="company-card">
                    <div className="company-info">
                        <p className="company-name">
                            Company Name
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
            </Link>

            <Link to="/company-profile" className="company-link">
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
            </Link>

            <div className="main-logo">
                <img src="../assets/img/long-icon.png" alt="VeCycle logo" className="logo-image" />
            </div>

            <NavbarComponent currentPath="/" />
        </div>

    );
};

export default DashboardComponent;
