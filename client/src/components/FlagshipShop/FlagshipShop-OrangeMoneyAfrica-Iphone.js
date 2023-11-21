import React from 'react';


function FlagshipShopOrangeMoneyAfricaIphone() {

  const downloadLocation = "Flagship Shop";
  const appDownloaded = "Orange Money Africa Iphone";
  const coordinate = "8.489457425115289, -13.232526791954665";
  const createdAt = new Date().toISOString();

  fetch(
    `https://qrcodes-app-runt.vercel.app/api/orangeMoneyAfrica-for-flagshipshop/Iphone`,
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

export default FlagshipShopOrangeMoneyAfricaIphone;
