// import React from 'react';

// function KenemaShopMyOrangeAppAndroid() {

//     const downloadLocation = "Kenema Shop";
//     const appDownloaded = "My Orange App For Android";
//     const coordinate = "7.880783487922352, -11.190103268601433"
//     const createdAt = new Date().toISOString();

//     fetch(
//       `https://qrcodes-app-runt.vercel.app/api/myOrange-for-kenemashop/Android`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           downloadLocation,
//           appDownloaded,
//           coordinate,
//           createdAt
//         })
//       }
//     )
//       .then(() => {
//         window.location.href =
//           "https://play.google.com/store/apps/details?id=com.orange.myorange.osl";
//       })
//       .catch((error) => {
//         console.error("Error saving visitor location:", error);
//       });

//     return (
//         <div className="App">

//         </div>
//     );
// }

// export default KenemaShopMyOrangeAppAndroid;


import React, { useState, useEffect } from 'react';

function KenemaShopMyOrangeAppAndroid() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const SCAN_COOLDOWN = 60 * 60 * 1000; // 1 hour in milliseconds
  
  useEffect(() => {
    checkLastScanTime();
  }, []);

  const checkLastScanTime = () => {
    const lastScanTime = localStorage.getItem('lastScanTime');
    const currentTime = new Date().getTime();

    if (lastScanTime) {
      const timeDifference = currentTime - parseInt(lastScanTime);
      
      if (timeDifference < SCAN_COOLDOWN) {
        // Calculate remaining time
        const remainingTime = Math.ceil((SCAN_COOLDOWN - timeDifference) / (60 * 1000));
        setError(`Please wait ${remainingTime} minutes before scanning again.`);
        setIsLoading(false);
        return;
      }
    }

    // Proceed with the scan if cooldown has passed
    handleScan();
  };

  const handleScan = () => {
    const downloadLocation = "Kenema Shop";
    const appDownloaded = "My Orange App For Android";
    const coordinate = "7.880783487922352, -11.190103268601433";
    const createdAt = new Date().toISOString();

    fetch(
      `https://qrcodes-app-runt.vercel.app/api/myOrange-for-kenemashop/Android`,
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
        // Save the current time as last scan time
        localStorage.setItem('lastScanTime', new Date().getTime().toString());
        window.location.href =
          "https://play.google.com/store/apps/details?id=com.orange.myorange.osl";
      })
      .catch((error) => {
        console.error("Error saving visitor location:", error);
        setError("An error occurred. Please try again later.");
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center p-4">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center p-4 text-red-600">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return <div className="App"></div>;
}

export default KenemaShopMyOrangeAppAndroid;