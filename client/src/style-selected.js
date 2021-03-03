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
        {
            twists:
                "The style is achieved by dividing the hair into several sections, then twisting two twisted strands around one another. It takes up 4 hours depending on hair length.",
        },
        {
            "box braids":
                "This type of hairstyle consists of square-shaped hair divisions. It takes up to 5 hours depending on hair length.",
        },
        {
            "flat twists":
                "Flat twists are comprised of two twists that are done on the scalp. It takes up to 3 hours depending on hair length.",
        },
        {
            cornrows:
                "This style of hair braiding in which the hair is braided very close to the scalp, using an underhand, upward motion to make a continuous, raised row. It takes up to 3 hours depending on hair length.",
        },
        {
            "crochet braids":
                "Crochet braids are techniques for braiding hair that involve crocheting synthetic hair extensions to a person's natural hair with a latch hook or crochet hook. It takes up to 2 hours depending on hair length.",
        },
        {
            weave:
                "Weaves add length and fullness to human hair. They are glued or sewn on natural hair by incorporating additional human or synthetic hair.It takes up to 3 hours depending on hair length.",
        },
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
            <h3>What do you think of this style?</h3>
            <div className="selected-style">
                {/* {image && <h2>should display{image}</h2>} */}
                {image && <img className="selected-pic" src={image} />}
                {text && <h3 className="selected-desc">{text}</h3>}
                <a href="/welcome#/choosestyle">back</a>
            </div>
        </div>
    );
}
