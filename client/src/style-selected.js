import React from "react";
import { useState, useEffect } from "react";

// export default function StyleSelected() {
//     return <h1>Hey, i am the selected style</h1>;
// }
// add useEffect
// clg props check profile pic component
export default function StyleSelected(props) {
    const pics = [
        { twists: "hairstyles/twists.jpg" },
        { "box braids": "/hairstyles/box-braids.jpg" },
        { "flat twists": "/hairstyles/flattwist.jpg" },
        { cornrows: "/hairstyles/cornrows.jpg" },
        { "crochet braids": "/hairstyles/crochet-braids.jpg" },
        { weave: "/hairstyles/weave.jpg" },
    ];
    const [image, setImage] = useState("");
    useEffect(() => {
        console.log(props);
        const hairStyle = props.match.params.selected.toLowerCase();
        console.log(hairStyle);
        for (let i = 0; i < pics.length; i++) {
            console.log(pics[i]);
            console.log(pics[i][hairStyle]);
            // checking in arr if we find an obj prop matching hairstyle user selected
            if (pics[i][hairStyle]) {
                setImage(pics[i][hairStyle]);
            }
        }
        // const img = new Image();
        // img.onload = () => setLoaded(true);
    }, []);
    return (
        <div className="style container">
            <h3>What do you this of this style?</h3>
            <div className="selected-style">
                {/* {image && <h2>should display{image}</h2>} */}
                {image && <img className="selected-pic" src={image} />}
                <h1>Keep looking</h1>
                <a href="/welcome#/choosestyle">go back</a>
            </div>
        </div>
    );
}
