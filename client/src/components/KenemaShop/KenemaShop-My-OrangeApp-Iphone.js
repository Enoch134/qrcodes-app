import React from 'react';


function KenemaShopMyOrangeAppIphone() {

    const appDownloaded = "My Orange App For Iphone";
    const downloadLocation = "Kenema Shop";
    const coordinate = "7.880783487922352, -11.190103268601433"
    const timestamp = new Date().toISOString();

    fetch(`${process.env.REACT_APP_URL}/api/myOrange-for-kenemashop/Iphone`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ appDownloaded, downloadLocation, coordinate, timestamp }),
    })
        .then(() => {
            window.location.href = "https://itunes.apple.com/fr/app/id6443607903";
        })
        .catch((error) => {
            console.error("Error saving visitor location:", error);
        });

    return (
        <div className="App">

        </div>
    );
}

export default KenemaShopMyOrangeAppIphone;
