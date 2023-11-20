import React from 'react';


function WellingtonShopOrangeMoneyAfricaIphone() {

  const downloadLocation = "Wellington Shop";
  const appDownloaded = "Orange Money Africa Iphone";
  const coordinate = "8.444351, -13.163071"
  const timestamp = new Date().toISOString();

  fetch(`/api/orangeMoneyAfrica-for-wellingtonshop/Iphone`, {
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

export default WellingtonShopOrangeMoneyAfricaIphone;
