import React from 'react';

function LungiShopOrangeMoneyAfricaAndroid() {

  const downloadLocation = "Lungi Shop";
  const appDownloaded = "Orange Money Africa Android";
  const coordinate = "8.614998, -13.200568"
  const createdAt = new Date().toISOString();

  fetch(
    `https://qrcodes-app-runt.vercel.app/api/orangeMoneyAfrica-for-lungishop/Android`,
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
        "https://play.google.com/store/apps/details?id=com.orange.orangemoneyafrique";
    })
    .catch((error) => {
      console.error("Error saving visitor location:", error);
    });

  return (
    <div className="App">

    </div>
  );
}

export default LungiShopOrangeMoneyAfricaAndroid;
