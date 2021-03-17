import React from "react";
import axios from "./axios";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hairstylists from "./hairstylists";
import { getHairStylist } from "./actions";

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
    const [hairStylists, setHairStylists] = useState([]);
    // const dispatch = useDispatch();

    // const hairstylists = useSelector(
    //     (state) =>
    //         state.allHairstylists &&
    //         state.allHairstylists.filter((hairStylist) => hairStylist.id)
    // );
    const addMarker = (e) => {
        console.log("in addMarker:", e);
        console.log(" still in addMaker:", e.latLng.lat());
        setpinHairStylistLoc({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    };
    // for user location
    const [latUser, setLatUser] = useState(0);
    const [lngUser, setLngUser] = useState(0);
    const [pinHairStylistLoc, setpinHairStylistLoc] = useState([]);
    // lat and lag from user
    const userLocation = {
        lat: 52.52,
        lng: 13.405,
    };
    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    let watchId;
    useEffect(() => {
        console.log(" hairstylist loc:", pinHairStylistLoc);
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

    // check this useEffect
    useEffect(() => {
        axios.get("/api/all-hairstylists").then(({ data }) => {
            console.log("response from all hairstylist:", data);
            setHairStylists(data.rows);
        });
    }, []);

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
                <h2>{pinHairStylistLoc.lat}</h2>
                <Marker
                    onLoad={loadMarker}
                    position={{
                        lat: parseFloat(52.52276194553862),
                        lng: parseFloat(13.402294006254445),
                    }}
                    icon={{
                        // icon personalized
                        url: "/map-marker.svg",
                        scaledSize: new window.google.maps.Size(30, 30),
                        origin: new window.google.maps.Point(0, 0),
                        anchor: new window.google.maps.Point(15, 15),
                    }}
                />
                {hairStylists.map((hairStylist) => {
                    return (
                        <Marker
                            key={hairStylist.name}
                            label={hairStylist.description}
                            position={{
                                lat: parseFloat(hairStylist.lat),
                                lng: parseFloat(hairStylist.lng),
                            }}
                        />
                    );
                })}
                {/* {hairStylistPopUpVisible && (
                    <HairStylists
                        toggleHairStylist={toggleHairStylist}
                        setPinBarLocation={setPinHairStylistLoc}
                        pinHairStylistLoc={pinHairStylistLoc}
                        updateHairStylistLoc={props.updateHairStylistLoc}
                    />
                )} */}
            </>
        </GoogleMap>
    ) : (
        <></>
    );
}

export default React.memo(Maps);

{
    /* <a href="/welcome#/choosestyle">back</a>; */
}
