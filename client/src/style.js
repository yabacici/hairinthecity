import React from "react";
import { Link } from "react-router-dom";

const Style = ({ addStyle, hair }) => {
    const styles = [
        "Twists",
        "Box Braids",
        "Pixy cut",
        "Flat twist",
        "Cornrows",
    ];
    console.log("sanity");
    return (
        <div className="style container">
            <h3>Step 1: Choose Your Style</h3>
            <ul>
                {styles.map((style) => {
                    // let spanClass = hair.style === style ? "active" : "";
                    let spanClass = "";
                    return (
                        <li key={style} onClick={() => addStyle(style)}>
                            <span className={spanClass}>{style}</span>
                        </li>
                    );
                })}
            </ul>

            {/* {hair.style && (
                <div className="next">
                    <Link to="/">
                        <button>Next</button>
                    </Link>
                </div>
            )} */}
        </div>
    );
};

export default Style;
