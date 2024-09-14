import React from 'react';
import '../stylesheet/ProfileComponent.css';
import NavbarComponent from './NavbarComponent';

const ProfileComponent: React.FC = () => {
    return (
        <div className="dashboard">
            <div className="header">
                <div className="profile">
                    <div className="avatar"></div>
                    <div className="info">
                        <p className="welcome">Welcome Back,</p>
                        <h2 className="name">Name</h2>
                        <div className="points-tier">
                            <span className="points">🪙 300</span>
                            <span className="tier">🏆 Gold Tier</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="performance">
                <p className="weekly-performance">WEEKLY PERFORMANCE:</p>
                <h3 className="performance-level">MEDIUM</h3>
                <p className="earned">🪙 300 earned</p>
                <p className="growth">📈 +30%</p>
            </div>

            <div className="top-contributions">
                <p className="section-title">Top Contributions:</p>
                <div className="contributions-chart"></div>
            </div>

            <div className="contribution-history">
                <p className="section-title">Contribution History</p>
                <div className="history">
                    <div className="transaction">
                        <p>Transaction Name</p>
                        <span className="transaction-amount">15 🪙</span>
                    </div>
                    <div className="transaction">
                        <p>Transaction Name</p>
                        <span className="transaction-amount">39 🪙</span>
                    </div>
                </div>
            </div>

            <NavbarComponent currentPath="/profile" />
        </div>
    );
};

export default ProfileComponent;
