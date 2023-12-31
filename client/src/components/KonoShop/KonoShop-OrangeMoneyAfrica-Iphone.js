import React from 'react';


function KonoShopOrangeMoneyAfricaIphone() {

  const downloadLocation = "Kono Shop";
  const appDownloaded = "Orange Money Africa Iphone";
  const coordinate = "8.645165523969375, -10.971248831137022"
  const createdAt = new Date().toISOString();

  fetch(
    `https://qrcodes-app-runt.vercel.app/api/orangeMoneyAfrica-for-konoshop/Iphone`,
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
        "https://apps.apple.com/fr/app/orange-money-afrique/id1313536959";
    })
    .catch((error) => {
      console.error("Error saving visitor location:", error);
    });

  return (
    <div className="App">

    </div>
  );
}

export default KonoShopOrangeMoneyAfricaIphone;
