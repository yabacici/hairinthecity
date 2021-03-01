import React from "react";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img
                    className="icon"
                    src="/afro.jpg"
                    // onClick={toggle}
                ></img>
                {/* <svg className="afro-pic" src="/afro.jpg" viewBox="0 0 100 100">
                    <path
                        fill="none"
                        d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
                    />
                    <path
                        fill="none"
                        d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
                    />
                </svg> */}
            </div>
            <div className="title">
                <h1>Hair In The City</h1>
            </div>
        </header>
    );
};

export default Header;
