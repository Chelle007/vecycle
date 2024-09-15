import React from 'react';
import '../stylesheet/ProfileComponent.css';
import NavbarComponent from './NavbarComponent';

const ProfileComponent: React.FC = () => {
    return (
        <div className="dashboard">
            <div className="header">
                <div className="profile">
                    <div className="avatar"><img src="https://64.media.tumblr.com/0f1d9be0930e0fd6e1421e0af63b4baa/4b38c49aa49bf456-a5/s640x960/6faa1b99bf7b85088d0ac470ba06d26d74ff6e58.jpg" alt="Profile" /></div>
                    <div className="info">
                        <p className="welcome">Welcome Back,</p>
                        <h2 className="name">Anna Lee</h2>
                        <div className="points-tier">
                            <span className="points">🪙 300</span>
                            <span className="tier">🏆 Gold Tier</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="performance">
                <p className="weekly-performance">WEEKLY PERFORMANCE:</p>
                <h3 className="performance-level">GOOD</h3>
                <p className="earned">🪙 300 earned</p>
                <p className="growth">📈 +30%</p>
            </div>

            <div className="top-contributions">
                <p className="section-title">Top Contributions:</p>
                <div className="contributions-chart"><img src="../assets/img/top3graph.jpeg" alt="Contributions chart" /></div>
            </div>

            <div className="contribution-history">
                <p className="section-title">Contribution History</p>
                <div className="history">
                    <div className="transaction">
                        <p>12/09/22</p><p>Coca Cola</p>
                        <span className="transaction-amount">15 🪙</span>
                    </div>
                    <div className="transaction">
                        <p>01/09/22</p><p>Evian</p>
                        <span className="transaction-amount">39 🪙</span>
                    </div>
                </div>
            </div>

            <NavbarComponent currentPath="/profile" />
        </div>
    );
};

export default ProfileComponent;
