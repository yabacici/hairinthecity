import { Component } from "react";
import axios from "./axios";
// import ProfilePic from "./profile-pic";
import Uploader from "./uploader";
// import Logo from "./logo";
import Profile from "./profile";
import OtherProfile from "./otherProfile";
import Friends from "./friends";
import { BrowserRouter, Route } from "react-router-dom";
import FindPeople from "./findPeople";
import Nav from "./nav";
import Chat from "./chat";
import Style from "./style";
import Header from "./header";
import Maps from "./maps";

// import { Link } from "react-router-dom";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // Initialize App's state
            uploaderVisible: false,
        };
        this.toggleUploader = this.toggleUploader.bind(this);
        this.setProfilePicUrl = this.setProfilePicUrl.bind(this);
        // BIND means we can use "this" within our methods
    }

    componentDidMount() {
        console.log("APP MOUNTED");
        //req.session.userId (send it back with res.json)
        axios
            .get("/api/user")
            // .get("/api/user") do the same in app get user in server
            .then((res) => {
                console.log("fetch user's data from DB");
                console.log("successful res data ", res.data.rows);
                this.setState({
                    // when data back, set it to the state
                    firstName: res.data.rows.first,
                    lastName: res.data.rows.last,
                    profilePicUrl: res.data.rows.profile_pic_url,
                    // App loads then makes a request to get the user info from the DB,
                    // We need to make sure that it now ALSO returns the BIO.
                    bio: res.data.rows.bio,
                    id: res.data.rows.id,
                });
            })
            .catch((err) => {
                console.log("err in user: ", err);
            });
    }

    toggleUploader() {
        // TODO: Toggles the "uploaderVisible" state
        this.setState({
            uploaderVisible: !this.state.uploaderVisible,
        });
    }

    setProfilePicUrl(profilePicUrl) {
        // TODO: Updates the "profilePicUrl" in the state
        // TODO: Hides the uploader
        this.setState({
            profilePicUrl: profilePicUrl,
            uploaderVisible: false,
        });
    }

    deletePic(profilePicUrl) {
        this.setState({
            profilePicUrl: profilePicUrl,
        });
    }

    render() {
        console.log("this.state in app:", this.state);
        if (!this.state.id) {
            // return null;
            return (
                // add a spinner
                <div className="lds-hourglass"></div>
            );
        }

        return (
            <BrowserRouter>
                <div className="app">
                    <Nav
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        profilePicUrl={this.state.profilePicUrl}
                        uploaderVisible={this.state.uploaderVisible}
                        toggleUploader={this.toggleUploader}
                        size="small"
                    />

                    {/* <h1>Adding React Google Map</h1> */}
                    {this.state.uploaderVisible && (
                        <Uploader
                            // firstName={this.state.firstName}
                            // lastName={this.state.lastName}
                            toggleUploader={this.toggleUploader}
                            setProfilePicUrl={this.setProfilePicUrl}
                        />
                    )}

                    <Route
                        exact
                        path="/"
                        render={() => (
                            <Profile
                                id={this.state.id}
                                firstName={this.state.firstName}
                                lastName={this.state.lastName}
                                profilePicUrl={this.state.profilePicUrl}
                                bio={this.state.bio}
                                toggleUploader={this.toggleUploader}
                                deletePic={(profilePicUrl) =>
                                    this.deletePic(profilePicUrl)
                                }
                            />
                        )}
                    />
                    <Route
                        path="/user/:id"
                        render={(props) => (
                            <OtherProfile
                                key={props.match.url}
                                match={props.match}
                                history={props.history}
                            />
                        )}
                    />
                    <Route
                        path="/find-users"
                        render={() => (
                            <FindPeople
                                id={this.state.id}
                                first={this.state.first}
                                last={this.state.last}
                                profilePicUrl={this.state.profilePicUrl}
                            />
                        )}
                    />
                    <Route
                        path="/show-friends-wannabes"
                        render={() => <Friends />}
                    />
                    <Route path="/maps" render={() => <Maps />} />
                    <Route path="/chat" component={Chat} />
                </div>{" "}
            </BrowserRouter>
        );
    }
}
