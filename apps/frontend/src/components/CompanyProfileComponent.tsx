import React from 'react';
import '../stylesheet/CompanyProfileComponent.css';
import NavbarComponent from './NavbarComponent';

// Define the structure of the profile data using TypeScript interfaces
interface Reward {
    rewardName: string;
    statusText: string;
    statusIcon: string;
    lockedClass: string;
}

interface CompanyProfileData {
    companyName: string;
    bannerImgUrl: string;
    userToken: number;
    token_to_reach: number;
    progressWidth: string;
    rewards: Reward[];
}

// React Functional Component
const CompanyProfileComponent: React.FC = () => {
    // Define a sample profile data, this should be replaced with actual data in a real application
    const compProfileData: CompanyProfileData = {
        companyName: "DASANI",
        bannerImgUrl: "https://www.beveragedaily.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/beveragedaily.com/article/2022/07/28/dasani-rolls-out-100-rpet-bottles-in-north-america/15635754-1-eng-GB/Dasani-rolls-out-100-rPET-bottles-in-North-America.jpg",
        userToken: 7,
        token_to_reach: 10,
        get progressWidth() {
            return 70 + "%";
        },
        rewards: [
            {
                rewardName: "10% Discount",
                statusText: "Completed",
                statusIcon: "✅",
                lockedClass: "" // Empty string if not locked
            },
            {
                rewardName: "Free Drink",
                statusText: "1 to go!",
                statusIcon: "🔒",
                lockedClass: "locked"
            },
            {
                rewardName: "Exclusive Deals",
                statusText: "3 to go!",
                statusIcon: "🔒",
                lockedClass: "locked"
            }
        ]
    };

    return (
        <div className="container">
            {/* Company title and banner */}
            <h1 className="company-title">{compProfileData.companyName}</h1>
            <div className="company-banner">
                <img src={compProfileData.bannerImgUrl} alt={`${compProfileData.companyName} banner`} />
            </div>

            <div className="progress-background">
            </div>

            <div className="progress-background2">
                {/* Progress section */}
                <div className="progress-section">
                    <div className="progress-info">
                        <span className="progress-text">
                            {compProfileData.userToken}/{compProfileData.token_to_reach} Tokens
                        </span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: compProfileData.progressWidth }}></div>
                    </div>
                    {/* Unlocked milestone */}
                    <div className="milestone">
                        <div className="milestone-line"></div>
                        <div className="milestone-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                        </div>
                    </div>
                    {/* Locked milestone */}
                    <div className="milestone milestone-2 locked">
                        <div className="milestone-line-locked"></div>
                        <div className="milestone-circle locked">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Rewards Section */}
                {compProfileData.rewards.map((reward, index) => (
                    <div key={index} className={`voucher-card ${reward.lockedClass}`}>
                        <div className="voucher-info">
                            <span className="voucher-title">{reward.rewardName}</span>
                            <div className={`voucher-status ${reward.lockedClass ? 'locked' : ''}`}>
                                <span className="status-text">{reward.statusText}</span>
                            </div>
                        </div>
                        <span className="voucher-icon">{reward.statusIcon}</span>
                    </div>
                ))}
            </div>

            <NavbarComponent currentPath="/company-profile" />
        </div>
    );
};

export default CompanyProfileComponent;
