import React from 'react';


function HqShopMyOrangeAppIphone() {

    const appDownloaded = "My Orange App For Iphone";
    const downloadLocation = "Headquarter Shop";
    const coordinate = "8.448686810047384, -13.235764245159077";
    const timestamp = new Date().toISOString();

    fetch(`http://41.191.249.160/api/myOrange-for-hqshop/Iphone`, {
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

export default HqShopMyOrangeAppIphone;
