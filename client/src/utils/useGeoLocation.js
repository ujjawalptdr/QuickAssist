import React, { useState, useEffect } from "react";

const useGeoLocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: "", lng: "" },
    });

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
    };

    // const onError = (error) => {
    //     setLocation({
    //         loaded: true,
    //         error: {
    //             code: error.code,
    //             message: error.message,
    //         },
    //     });
    // };

    const onError = (error) => {
        let message = "";
        switch (error.code) {
            case 1:
                message = "Permission denied. Please enable location in browser settings.";
                break;
            case 2:
                message = "Position unavailable.";
                break;
            case 3:
                message = "Timeout while retrieving location.";
                break;
            default:
                message = "Unknown error.";
        }

        setLocation({
            loaded: true,
            error: {
                code: error.code,
                message,
            },
        });
    };


    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported",
            });
        }

        // using the below line we get the current location
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    return location;
};

export default useGeoLocation;
