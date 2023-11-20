import React from 'react';


function MakeniShopOrangeMoneyAfricaIphone() {

  const downloadLocation = "Makeni Shop";
  const appDownloaded = "Orange Money Africa Iphone";
  const coordinate = "8.888295930920464, -12.044081938598103";
  const timestamp = new Date().toISOString();

  fetch(`/api/orangeMoneyAfrica-for-makenishop/Iphone`, {
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

export default MakeniShopOrangeMoneyAfricaIphone;
