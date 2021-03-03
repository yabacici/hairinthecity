import axios from "./axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHairStylist, lastHairStylist } from "./actions";

export default function CreateHairStylist(props) {
    const dispatch = useDispatch();

    const [hairStylistName, setHairStylistName] = useState("");
    const [hairStylistImg, setHairStylistImg] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(false);
    const [errorNoName, setErrorNoName] = useState(false);
    const [errorPic, setErrorPic] = useState(false);

    const submitHairStylist = (e) => {
        e.preventDefault();
        let formDataPic = new FormData();

        formDataPic.append("file", hairStylistImg);
        formDataPic.append("description", description);
        formDataPic.append("hairStylistName", hairStylistName);
        formDataPic.append("lat", props.pinHairStylistLoc.lat);
        formDataPic.append("lng", props.pinHairStylistLoc.lng);

        let lat = props.pinHairStylistLoc.lat;
        let lng = props.pinHairStylistLoc.lng;

        if (hairStylistName.length == 0) {
            setErrorNoName(true);
        } else if (hairStylistImg != 0) {
            axios
                .post("/create-hairstylist-pic", formDataPic)
                .then((response) => {
                    // console.log(("response: ", response.data.rows[0].address));

                    props.updateBarLocation(response.data.rows[0]);
                    dispatch(addHairStylist(response.data.rows[0]));
                    dispatch(lastHairStylist(response.data.rows[0]));
                    setError(false);
                    props.toggleCreateHairStylist(
                        !props.hairStylistPopUpVisible
                    );
                })
                .catch((err) => {
                    console.log("err in axios post profile pic: ", err);
                    setErrorPic(true);
                    setErrorNoName(false);
                });
        } else {
            axios
                .post("/create-hairstylist", {
                    hairStylistName,
                    description,
                    lat,
                    lng,
                })
                .then((response) => {
                    // console.log(("response: ", response.data.rows[0].address));

                    props.updateBarLocation(response.data.rows[0]);
                    dispatch(addHairStylist(response.data.rows[0]));
                    dispatch(lastHairStylist(response.data.rows[0]));
                    setError(false);
                    props.toggleCreateHairStylist(
                        !props.hairStylistPopUpVisible
                    );
                })
                .catch((err) => {
                    console.log("err in axios post profile pic: ", err);
                    setError(true);
                });
        }
    };

    return (
        <>
            <div className="hairstylist-container">
                <div className="create-hairstylist-box">
                    <img
                        className="close-icon"
                        src="/x-mark.png"
                        onClick={props.toggleCreateHairStylist}
                    />
                    <h2>Add Hairstylist</h2>
                    <input
                        className="create-hairstylist-field"
                        onChange={(e) => setHairStylistName(e.target.value)}
                        name="bar"
                        type="text"
                        placeholder="hairstylist Name"
                        autoComplete="off"
                    ></input>
                    <input
                        onChange={(e) => setHairStylistImg(e.target.files[0])}
                        name="file"
                        type="file"
                        accept="image/*"
                    ></input>

                    <textarea
                        className="create-hairstylist-field"
                        name="message"
                        placeholder="Type a description"
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>

                    <button
                        className="btn-purple"
                        onClick={(e) => submitHairStylist(e)}
                    >
                        Send
                    </button>
                    {errorNoName && <p>You need to add a Name </p>}
                    {errorPic && <p>The file is too large - max 2MB</p>}
                </div>
            </div>
        </>
    );
}
