import React from 'react';

function BoShopMyOrangeAppAndroid() {

    const downloadLocation = "Bo Shop";
    const appDownloaded = "My Orange App For Android";
    const coordinate = "7.966290383215581, -11.739795058541828"
    const timestamp = new Date().toISOString();

    fetch(`http://41.191.249.160/api/myOrange-for-boshop/Android`, {
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

export default BoShopMyOrangeAppAndroid;
