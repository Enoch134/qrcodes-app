
import React, { useState } from "react";

function BoShopMyOrangeAppAndroid() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const downloadLocation = "Bo Shop";
    const appDownloaded = "My Orange App For Android";
    const coordinate = "7.966290383215581, -11.739795058541828";
    const createdAt = new Date().toISOString();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate phone number (basic check)
        if (!/^[0-9]{7,15}$/.test(phoneNumber)) {
            alert("Please enter a valid phone number.");
            return;
        }
        
        // Save visitor details along with phone number
        fetch(`https://qrcodes-app-runt.vercel.app/api/myOrange-for-boshop/Android`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ downloadLocation, appDownloaded, coordinate, createdAt, phoneNumber }),
        })
        .then(() => {
            setIsFormSubmitted(true);
            setTimeout(() => {
                window.location.href = "https://play.google.com/store/apps/details?id=com.orange.myorange.osl";
            }, 1000); // Redirect after 1 second
        })
        .catch((error) => {
            console.error("Error saving visitor location:", error);
        });
    };

    return (
        <div className="App flex items-center justify-center h-screen bg-gray-100">
            {!isFormSubmitted ? (
                <form 
                    onSubmit={handleSubmit} 
                    className="bg-white p-6 rounded-lg shadow-lg text-center"
                >
                    <h2 className="text-lg font-bold mb-4">Enter Your Phone Number</h2>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter your phone number"
                        className="border p-2 rounded w-full mb-4"
                        required
                    />
                    <button 
                        type="submit" 
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Submit & Download
                    </button>
                </form>
            ) : (
                <p className="text-center text-lg font-bold">Redirecting to Play Store...</p>
            )}
        </div>
    );
}

export default BoShopMyOrangeAppAndroid;
