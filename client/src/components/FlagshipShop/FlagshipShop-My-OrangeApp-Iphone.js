import React from 'react';


function FlagshipShopMyOrangeAppIphone() {

    const appDownloaded = "My Orange App For Iphone";
    const downloadLocation = "Flagship Shop";
    const coordinate = "8.489457425115289, -13.232526791954665";
    const createdAt = new Date().toISOString();

    fetch(`https://qrcodes-app-runt.vercel.app//api/myOrange-for-flagshipshop/Iphone`,
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

export default FlagshipShopMyOrangeAppIphone;
