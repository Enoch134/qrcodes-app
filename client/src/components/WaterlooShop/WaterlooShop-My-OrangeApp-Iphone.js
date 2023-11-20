import React from 'react';


function WaterlooShopMyOrangeAppIphone() {

    const appDownloaded = "My Orange App For Iphone";
    const downloadLocation = "Waterloo Shop";
    const coordinate = "8.330571, -13.067267"
    const timestamp = new Date().toISOString();

    fetch(`${process.env.REACT_APP_URL}/api/myOrange-for-waterlooshop/Iphone`, {
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

export default WaterlooShopMyOrangeAppIphone;
