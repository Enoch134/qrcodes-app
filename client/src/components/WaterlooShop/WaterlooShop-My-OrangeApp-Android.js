import React from 'react';

function WaterlooShopMyOrangeAppAndroid() {

    const downloadLocation = "Waterloo Shop";
    const appDownloaded = "My Orange App For Android";
    const coordinate = "8.330571, -13.067267"
    const timestamp = new Date().toISOString();

    fetch(`/api/myOrange-for-waterlooshop/Android`, {
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

export default WaterlooShopMyOrangeAppAndroid;
