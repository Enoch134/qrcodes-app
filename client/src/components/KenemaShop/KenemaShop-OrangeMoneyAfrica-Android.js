import React from 'react';

function KenemaShopOrangeMoneyAfricaAndroid() {

  const downloadLocation = "Kenema Shop";
  const appDownloaded = "Orange Money Africa Android";
  const coordinate = "7.880783487922352, -11.190103268601433"
  const createdAt = new Date().toISOString();

  fetch(
    `https://qrcodes-app-runt.vercel.app/api/orangeMoneyAfrica-for-kenemashop/Android`,
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

export default KenemaShopOrangeMoneyAfricaAndroid;
