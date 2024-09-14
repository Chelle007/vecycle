const compProfileData = {
    companyName: "DASANI",
    bannerImgUrl: "https://www.packaging-gateway.com/wp-content/uploads/sites/16/2019/08/DASANI.jpg",
    userToken: 75,
    token_to_reach: 100,
    get progressWidth() {
        return (this.userToken / this.token_to_reach) * 100 + "%";
    },
    rewards: [
        {
            rewardName: "10% Discount",
            statusText: "Unlocked",
            statusIcon: "✅",
            lockedClass: "" // put empty string if not locked
        },
        {
            rewardName: "Free Drink",
            statusText: "10 to go!",
            statusIcon: "🔒",
            lockedClass: "locked"
        },
        {
            rewardName: "Exclusive deals",
            statusText: "30 to go!",
            statusIcon: "🔒",
            lockedClass: "locked"
        }
    ]
};

generateHTMLObject("company-profile-template", compProfileData, "company-profile-container")