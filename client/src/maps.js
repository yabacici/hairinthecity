import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const containerStyle = {
    width: "500px",
    height: "350px",
    left: "375px",
};

const center = {
    lat: -3.745,
    lng: -38.523,
};

function Maps() {
    const addMarker = (e) => {
        setpinHairStylistLoc({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    };
    // for user location
    const [latUser, setLatUser] = useState(0);
    const [lngUser, setLngUser] = useState(0);
    const [pinHairStylistLoc, setpinHairStylistLoc] = useState([]);
    // lat and lag from user
    const userLocation = {
        lat: latUser,
        lng: lngUser,
    };
    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    let watchId;
    useEffect(() => {
        console.log("userLocation: ", userLocation);
        if (navigator.geolocation) {
            watchId = navigator.geolocation.watchPosition(
                (position) => {
                    console.log("position: ", position);
                    // position
                    // map loads
                    setLatUser(position.coords.latitude);
                    setLngUser(position.coords.longitude);
                },
                (err) => console.log(err),
                {
                    enableHighAccuracy: true,
                    timeout: 10000, // map tries to load setTimeOut
                    maximumAge: 10000, //save user position
                }
            );
            return () => {
                // so it wont bug
                console.log("running cleanup fn");
                navigator.geolocation.clearWatch(watchId);
            };
        } else {
            //  // No Support Web
            alert("The browser doesn't support Geolocation");
        }
    }, [latUser]);
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: apiKey,
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);
    const loadMarker = (marker) => {
        console.log("marker: ", marker);
    };
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={userLocation}
            zoom={15}
            onLoad={onMapLoad}
            onClick={(e) => addMarker(e)}
            onUnmount={onUnmount}
        >
            {/* Child components, such as markers, info windows, etc. */}
            <>
                {" "}
                <Marker
                    onLoad={loadMarker}
                    position={{
                        lat: parseFloat(pinHairStylistLoc.lat),
                        lng: parseFloat(pinHairStylistLoc.lng),
                    }}
                    icon={{
                        // icon personalized
                        url: "/map-marker.svg",
                        scaledSize: new window.google.maps.Size(30, 30),
                        origin: new window.google.maps.Point(0, 0),
                        anchor: new window.google.maps.Point(15, 15),
                    }}
                />
            </>
        </GoogleMap>
    ) : (
        <>
            {" "}
            <a href="/welcome#/choosestyle">back</a>
        </>
    );
}

export default React.memo(Maps);
