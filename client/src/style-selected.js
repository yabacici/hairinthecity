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

    const descriptions = [
        { twists: "takes 3 hours" },
        { "box braids": "takes 2 hours" },
        { "flat twists": "takes 6 hours" },
        { cornrows: "takes 1 hours" },
        { "crochet braids": "takes 2 hours" },
        { weave: "2.30 hours" },
    ];
    const [image, setImage] = useState("");
    const [text, setText] = useState("");
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

    useEffect(() => {
        console.log(props);
        const descriptionStyle = props.match.params.selected.toLowerCase();
        console.log(descriptionStyle);
        for (let i = 0; i < pics.length; i++) {
            console.log(descriptions[i]);
            console.log(descriptions[i][descriptionStyle]);
            // checking in arr if we find an obj prop matching hairstyle user selected
            if (descriptions[i][descriptionStyle]) {
                setText(descriptions[i][descriptionStyle]);
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
                {text && <h3 className="selected-desc">{text}</h3>}
                <a href="/welcome#/choosestyle">back</a>
            </div>
        </div>
    );
}
