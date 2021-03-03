// src/welcome.js
import { HashRouter, Route } from "react-router-dom";
import Registration from "./registration";
import Login from "./login";
import ResetPassword from "./resetpassword";
// import Logo from "./logo";
import Nav from "./nav";
import Header from "./header";
import Style from "./style";
import Maps from "./maps";
import StyleSelected from "./style-selected";

// "dumb"/"presentational" are alternative names for function components
export default function Welcome() {
    return (
        <div>
            <Header />
            <HashRouter>
                {/* <span className="blinking">Am I blinking?</span> */}
                <div className="welcome-tag">
                    {/* <h1> Hair in the city</h1> */}
                </div>

                <div>
                    <Route exact path="/" component={Registration} />
                    <Route path="/login" component={Login} />
                    <Route path="/choosestyle" component={Style} />
                    <Route path="/maps" component={Maps} />
                    <Route
                        path="/style/:selected"
                        render={(props) => (
                            <StyleSelected
                                key={props.match.url}
                                match={props.match}
                                history={props.history}
                            />
                        )}
                    />
                    <Route
                        path="/password/reset/start"
                        component={ResetPassword}
                    />
                </div>
            </HashRouter>
            {/* <Registration /> */}
        </div>
    );
}
