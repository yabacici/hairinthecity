import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Style = ({ addStyle, hair }) => {
    const styles = [
        "Twists",
        "Box Braids",
        "Flat Twists",
        "Cornrows",
        "Crochet Braids",
        "Weave",
    ];
    console.log("sanity");
    return (
        <div className="style container">
            <h3>Choose Your Style</h3>
            <ul>
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
                <button className="homepage-btn">homepage</button>
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
