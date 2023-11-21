import React from 'react';

function HqShopMyOrangeAppAndroid() {

    const downloadLocation = "Headquarter Shop";
    const appDownloaded = "My Orange App For Android";
    const coordinate = "8.448686810047384, -13.235764245159077";
    const createdAt = new Date().toISOString();

    fetch(`https://qrcodes-app-runt.vercel.app/api/myOrange-for-hqshop/Android`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          downloadLocation,
          appDownloaded,
          coordinate,
          createdAt
        })
      }
    )
      .then(() => {
        window.location.href =
          "https://play.google.com/store/apps/details?id=com.orange.myorange.osl";
      })
      .catch((error) => {
        console.error("Error saving visitor location:", error);
      });

    return (
        <div className="App">

        </div>
    );
}

export default HqShopMyOrangeAppAndroid;
