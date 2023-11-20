import React from 'react';

function FlagshipShopMyOrangeAppAndroid() {

    const downloadLocation = "Flagship Shop";
    const appDownloaded = "My Orange App For Android";
    const coordinate = "8.489457425115289, -13.232526791954665";
    const timestamp = new Date().toISOString();

    fetch(`${process.env.REACT_APP_URL}/api/myOrange-for-flagshipshop/Android`, {
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

export default FlagshipShopMyOrangeAppAndroid;
