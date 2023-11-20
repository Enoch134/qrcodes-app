import React from 'react';


function LungiShopMyOrangeAppIphone() {

    const appDownloaded = "My Orange App For Iphone";
    const downloadLocation = "Lungi Shop";
    const coordinate = "8.614998, -13.200568"
    const timestamp = new Date().toISOString();

    fetch(`/api/myOrange-for-lungishop/Iphone`, {
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

export default LungiShopMyOrangeAppIphone;
