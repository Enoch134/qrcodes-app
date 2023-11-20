import React from 'react';

function HqShopOrangeMoneyAfricaAndroid() {

  const downloadLocation = "Headquarter Shop";
  const appDownloaded = "Orange Money Africa Android";
  const coordinate = "8.448686810047384, -13.235764245159077";
  const timestamp = new Date().toISOString();

  fetch(`https://41.191.249.160/api/orangeMoneyAfrica-for-hqshop/Android`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ downloadLocation, appDownloaded, coordinate, timestamp }),
  })
    .then(() => {
      window.location.href = "https://play.google.com/store/apps/details?id=com.orange.orangemoneyafrique";
    })
    .catch((error) => {
      console.error("Error saving visitor location:", error);
    });

  return (
    <div className="App">

    </div>
  );
}

export default HqShopOrangeMoneyAfricaAndroid;
