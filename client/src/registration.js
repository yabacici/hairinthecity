// src/registration.js
// class component have state!
// (class components also have lifecycle methods (like componentDidMount))
import React from "react";
import axios from "./axios";
import Base from "./style";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default class Registration extends React.Component {
    constructor() {
        super();
        this.state = {
            error: false,
            first: "",
            last: "",
            email: "",
            password: "",
        };
        // strategy #1 for binding
        // this.handleChange = this.handleChange.bind(this);
    }

    // 1. we need to store the user's input in state
    // 2. when user clicks "submit," we need to take the input we got from the user
    // and send it off to the server in a `POST` request
    // in .then read the response, and based on the response:
    // a. render an error message for the user
    // b. redirect to /
    handleClick() {
        axios
            .post("/registration", this.state) //dataToSendToServer
            .then((resp) => {
                // console.log("resp from server: ", resp);
                // const user = resp.data.user;
                // const success = resp.data.success;
                if (resp.data.success) {
                    location.replace("/");
                } else {
                    console.log("error");
                    this.setState({
                        error: true,
                    });
                }
            });
        // .catch((err) => {
        //     console.log("err in registration: ", err);
        //     this.setState({
        //         error: true,
        //     });
        //     // render an error message
        // });
    }

    // this is how we handle user input in React!
    handleChange(e) {
        // console.log("e target value: ", e.target.value);
        // which input field is the user typing in?
        console.log("e target name: ", e.target.name);
        this.setState(
            {
                [e.target.name]: e.target.value,
            },
            () => console.log("this.state after setState: ", this.state)
        );
        // this.setState is used to put/update state!
        // if (e.target.name === "first") {
        //     this.setState({
        //         first: e.target.value,
        //     });
        // } else if (e.target.name === "last") {
        //     this.setState({
        //         last: e.target.value,
        //     });
        // }
    }

    render() {
        return (
            <>
                <div className="split left">
                    <div className="centered">
                        <div className="hero">
                            <h2 className="text-registration">
                                Find a hair stylist who will come to you
                            </h2>
                            <div className="home container">
                                {/* <motion.h2
                                animate={{ fontSize: 200, color: "pink" }}
                            >
                                find a hairstylist near you
                            </motion.h2> */}
                                <img
                                    className="afro"
                                    src="/afro.jpg"
                                    // onClick={toggle}
                                ></img>
                                <Link to="/choosestyle">
                                    <button className="motion-btn">
                                        Find your style
                                    </button>
                                </Link>

                                <Link to="/maps">
                                    <button className="motion-btn">
                                        who is near you?
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="split right">
                        <div className="centered">
                            <div className="hero">
                                <h2 className="text-registration">
                                    Create an account and share your talent
                                </h2>
                                <div className="form-box">
                                    <div className="button-box">
                                        <div id="btn"></div>
                                        {/* <button
                                            type="button"
                                            className="toggle-btn"
                                            // onClick={() => this.handleClick()}
                                        >
                                            REGISTER
                                        </button> */}
                                        {/* <button
                                type="button"
                                className="toggle-btn"
                                onClick={() => this.handleClick()}
                            >
                                LOGIN
                            </button> */}
                                    </div>
                                    <div id="login" className="input-group">
                                        {this.state.error && (
                                            <p>Something broke</p>
                                        )}
                                        {/* strategy #2 for binding: arrow functions! */}
                                        <input
                                            className="input-field"
                                            onChange={(e) =>
                                                this.handleChange(e)
                                            }
                                            name="first"
                                            type="text"
                                            placeholder="first"
                                        />
                                        <input
                                            className="input-field"
                                            onChange={(e) =>
                                                this.handleChange(e)
                                            }
                                            name="last"
                                            type="text"
                                            placeholder="last"
                                        />
                                        <input
                                            className="input-field"
                                            onChange={(e) =>
                                                this.handleChange(e)
                                            }
                                            name="email"
                                            type="text"
                                            placeholder="email"
                                        />
                                        <input
                                            className="input-field"
                                            onChange={(e) =>
                                                this.handleChange(e)
                                            }
                                            name="password"
                                            type="password"
                                            placeholder="password"
                                        />
                                        <button
                                            type="submit"
                                            className="submit-btn"
                                            onClick={() => this.handleClick()}
                                        >
                                            REGISTER
                                        </button>
                                        <p>
                                            Already a member?{" "}
                                            <Link to="/login">Log in</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
