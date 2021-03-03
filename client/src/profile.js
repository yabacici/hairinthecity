// pres component so func component
import ProfilePic from "./profile-pic";
import BioEditor from "./bio-editor";

import DeleteProfilePic from "./delete-profile-pic";

export default function Profile(props) {
    console.log(" props profile: ", props);
    return (
        <>
            <div className="card">
                <ProfilePic
                    className="card-container"
                    firstName={props.firstName}
                    lastName={props.lastName}
                    profilePicUrl={props.profilePicUrl}
                />
                <DeleteProfilePic
                    profilePicUrl={props.profilePicUrl}
                    deletePic={props.deletePic}
                    id={props.id}
                />
                <h2>
                    {/* <span className="blinking">Am I blinking?</span> */}
                    <span className="blinking">
                        {" "}
                        {/* Welcome {props.firstName} {props.lastName} ! */}
                        Welcome {props.firstName} !
                    </span>
                </h2>

                {/* <Music /> */}

                <BioEditor
                    firstName={props.firstName}
                    lastName={props.lastName}
                    bio={props.bio}
                />
                {/* <button onClick={() => props.toggleUploader()}>
                New profile picture
            </button> */}
                <a href="mailto:c.eboa@outlook.com to mail to">Email me</a>
            </div>
        </>
    );
}
