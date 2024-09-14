const compProfileData = {
    companyName: "DASANI",
    bannerImgUrl: "https://www.beveragedaily.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/beveragedaily.com/article/2022/07/28/dasani-rolls-out-100-rpet-bottles-in-north-america/15635754-1-eng-GB/Dasani-rolls-out-100-rPET-bottles-in-North-America.jpg",
    userToken: 75,
    token_to_reach: 10,
    get progressWidth() {
        return (this.userToken / this.token_to_reach) * 100 + "%";
    },
    rewards: [
        {
            rewardName: "10% Discount",
            statusText: "Completed",
            statusIcon: "✅",
            lockedClass: "" // put empty string if not locked
        },
        {
            rewardName: "Free Drink",
            statusText: "1 to go!",
            statusIcon: "🔒",
            lockedClass: "locked"
        },
        {
            rewardName: "Exclusive deals",
            statusText: "2 to go!",
            statusIcon: "🔒",
            lockedClass: "locked"
        }
    ]
};

generateHTMLObject("company-profile-template", compProfileData, "company-profile-container")