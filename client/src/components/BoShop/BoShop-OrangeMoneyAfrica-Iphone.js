import React from 'react';


function BoShopOrangeMoneyAfricaIphone() {

  const downloadLocation = "Bo Shop";
  const appDownloaded = "Orange Money Africa Iphone";
  const coordinate = "7.966290383215581, -11.739795058541828"
  const timestamp = new Date().toISOString();

  fetch(`https://qrcodes-app-34r8.vercel.app/api/orangeMoneyAfrica-for-boshop/Iphone`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ downloadLocation, appDownloaded, coordinate, timestamp }),
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

export default BoShopOrangeMoneyAfricaIphone;
