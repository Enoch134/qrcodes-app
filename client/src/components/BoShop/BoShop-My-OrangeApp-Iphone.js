import React from 'react';


function BoShopMyOrangeAppIphone() {

    const appDownloaded = "My Orange App For Iphone";
    const downloadLocation = "Bo Shop";
    const coordinate = "7.966290383215581, -11.739795058541828"
    const createdAt = new Date().toISOString();

    fetch(`https://qrcodes-app-runt.vercel.app/api/myOrange-for-boshop/Iphone`,
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

export default BoShopMyOrangeAppIphone;
