import React from 'react';


function WaterlooShopOrangeMoneyAfricaIphone() {

  const downloadLocation = "Waterloo Shop";
  const appDownloaded = "Orange Money Africa Iphone";
  const coordinate = "8.330571, -13.067267"
  const timestamp = new Date().toISOString();

  fetch(`${process.env.REACT_APP_URL}/api/orangeMoneyAfrica-for-waterlooshop/Iphone`, {
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

export default WaterlooShopOrangeMoneyAfricaIphone;
