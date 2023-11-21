import React from 'react';


function WellingtonShopMyOrangeAppIphone() {

    const appDownloaded = "My Orange App For Iphone";
    const downloadLocation = "Wellington Shop";
    const coordinate = "8.444351, -13.163071"
    const createdAt = new Date().toISOString();

    fetch(
      `https://qrcodes-app-runt.vercel.app/api/myOrange-for-wellingtonshop/Iphone`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          appDownloaded,
          downloadLocation,
          coordinate,
          createdAt
        })
      }
    )
      .then(() => {
        window.location.href = "https://itunes.apple.com/fr/app/id6443607903";
      })
      .catch((error) => {
        console.error("Error saving visitor location:", error);
      });

    return (
        <div className="App">

        </div>
    );
}

export default WellingtonShopMyOrangeAppIphone;
