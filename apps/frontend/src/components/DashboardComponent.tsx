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
                            Dasani
                        </p>

                        <p className="progress-text">4,000 / 10,000</p>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '40%' }}></div>
                        </div>
                    </div>
                    <div className="company-logo">
                        <img src="../src/assets/img/dasani-Logo.png" alt="dasani logo" className="logo-image" />
                    </div>
                </div>
            </Link>

            <hr />

            <Link to="/company-profile" className="company-link">
                <div className="company-card">
                    <div className="company-info">
                        <p className="company-name">
                            Coca Cola
                        </p>
                        <p className="progress-text">20,000 / 80,000</p>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '25%' }}></div>
                        </div>
                    </div>
                    <div className="company-logo">
                        <img src="../src/assets/img/cocacola.png" alt="Coca Cola logo" className="logo-image" />
                    </div>
                </div>
            </Link>

            <Link to="/company-profile" className="company-link">
                <div className="company-card">
                    <div className="company-info">
                        <p className="company-name">
                            <Link to="/company-profile" className="company-link">
                                Evian
                            </Link>
                        </p>
                        <p className="progress-text">2,000 / 40,000</p>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '5%' }}></div>
                        </div>
                    </div>
                    <div className="company-logo">
                        <img src="../src/assets/img/evian.jpeg" alt="evian logo" className="logo-image evian" />
                    </div>
                </div>
            </Link>

            {/* <div className="main-logo"> */}
                <img src="../src/assets/img/logotype.png" alt="VeCycle logo" className="logo-type-vecycle" />
                {/* <img src="../" alt="VeCycle logo" className="logo-image" /> */}
            {/* </div> */}

            <NavbarComponent currentPath="/" />
        </div>

    );
};

export default DashboardComponent;
