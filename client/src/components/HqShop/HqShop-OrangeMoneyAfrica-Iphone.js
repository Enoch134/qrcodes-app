import React from 'react';


function HqShopOrangeMoneyAfricaIphone() {

  const downloadLocation = "Headquarter Shop";
  const appDownloaded = "Orange Money Africa Iphone";
  const coordinate = "8.448686810047384, -13.235764245159077";
  const createdAt = new Date().toISOString();

  fetch(`https://qrcodes-app-runt.vercel.app/api/orangeMoneyAfrica-for-hqshop/Iphone`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ downloadLocation, appDownloaded, coordinate, createdAt }),
  })
    .then(() => {
      window.location.href = "https://apps.apple.com/fr/app/orange-money-afrique/id1313536959";
    })
    .catch((error) => {
      console.error("Error saving visitor location:", error);
    });

  return (
    <div className="App">

    </div>
  );
}

export default HqShopOrangeMoneyAfricaIphone;
