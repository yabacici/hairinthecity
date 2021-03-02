import ProfilePic from "./profile-pic";
import Logo from "./logo";
import Logout from "./Logout";

export default function Nav(props) {
    console.log("props: ", props);
    return (
        <nav>
            {/* <Logo />
            <div className="logo">
                <h4>Hair in the city</h4>
            </div> */}

            <div className="logo">
                <img
                    className="icon"
                    src="/afro.jpg"
                    // onClick={toggle}
                ></img>
            </div>
            <div className="title">
                <h1>Hair In The City</h1>
            </div>
            <ul className="nav-links">
                <li>
                    <a href="/find-users">Find People</a>
                </li>
                <li>
                    <a href="/chat">Chat</a>
                </li>
                <li>
                    <a href="/friends">Friends</a>
                </li>
            </ul>

            <div className="dropdown">
                <ProfilePic {...props} />{" "}
                {/* <button class="dropbtn">Dropdown</button> */}
                <div className="dropdown-content">
                    <a href="#">upload profile pic</a>
                    <a href="/login">login</a>
                    <a href="/">profile</a>
                    <a href="/delete-profile-pic"> delete profile pic</a>
                    <a href="/logout">logout</a>
                </div>
            </div>
            {/* <div className="dopdown">
                <ProfilePic {...props} />{" "}
            </div> */}
        </nav>
    );
}
