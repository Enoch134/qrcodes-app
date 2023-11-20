import React from 'react';


function KonoShopMyOrangeAppIphone() {

    const appDownloaded = "My Orange App For Iphone";
    const downloadLocation = "Kono Shop";
    const coordinate = "8.645165523969375, -10.971248831137022"
    const timestamp = new Date().toISOString();

    fetch(`${process.env.REACT_APP_URL}/api/myOrange-for-konoshop/Iphone`, {
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

export default KonoShopMyOrangeAppIphone;
