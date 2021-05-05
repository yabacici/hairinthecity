import React from "react";
import StyleSelected from "./style-selected.js";
import { Link } from "react-router-dom";

const Style = ({ addStyle, hair }) => {
    const styles = [
        "Twists",
        "Box Braids",
        "Flat Twists",
        "Cornrows",
        "Crochet Braids",
        "Weave",
    ];

    // console.log("sanity");
    return (
        <div className="style container">
            <h3>Choose Your Style</h3>

            {/* adding search bar */}
            <ul>
                <input
                    // className="input-field"
                    // onChange={(e) => this.handleChange(e)}
                    type="text"
                    placeholder="search"
                />
                {styles.map((style) => {
                    // let spanClass = hair.style === style ? "active" : "";
                    // let spanClass = "";
                    return (
                        <li key={style}>
                            {/* <span className={spanClass}>{style}</span> */}
                            <Link to={`/Style/${style}`}>{style}</Link>
                        </li>
                    );
                })}
            </ul>
            <Link to="/">
                <button className="homepage-btn">HOMEPAGE</button>
            </Link>
            {/* when user chooses a style the Next button should appear */}
            {/* {hair.style && (
                <div className="next">
                    <Link to="/find-users">
                        <button>Next</button>
                    </Link>
                </div>
            )} */}
        </div>
    );
};

export default Style;
