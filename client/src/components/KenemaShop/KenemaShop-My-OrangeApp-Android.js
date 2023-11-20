import React from 'react';

function KenemaShopMyOrangeAppAndroid() {

    const downloadLocation = "Kenema Shop";
    const appDownloaded = "My Orange App For Android";
    const coordinate = "7.880783487922352, -11.190103268601433"
    const timestamp = new Date().toISOString();

    fetch(`${process.env.REACT_APP_URL}/api/myOrange-for-kenemashop/Android`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ downloadLocation, appDownloaded, coordinate, timestamp }),
    })
        .then(() => {
            window.location.href = "https://play.google.com/store/apps/details?id=com.orange.myorange.osl";
        })
        .catch((error) => {
            console.error("Error saving visitor location:", error);
        });

    return (
        <div className="App">

        </div>
    );
}

export default KenemaShopMyOrangeAppAndroid;
