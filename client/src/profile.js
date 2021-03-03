// pres component so func component
import ProfilePic from "./profile-pic";
import BioEditor from "./bio-editor";
import Gallery from "./gallery";
import Carousel from "react-elastic-carousel";
import DeleteProfilePic from "./delete-profile-pic";

export default function Profile(props) {
    console.log(" props profile: ", props);
    return (
        <>
            <div className="cards-container">
                <div className="card">
                    <h2>
                        {/* <span className="blinking">Am I blinking?</span> */}
                        {/* <span className="blinking"> */}
                        <span className="name-card">
                            {" "}
                            {/* Welcome {props.firstName} {props.lastName} ! */}
                            Welcome!
                        </span>
                    </h2>
                    <ProfilePic
                        className="card-container"
                        firstName={props.firstName}
                        lastName={props.lastName}
                        profilePicUrl={props.profilePicUrl}
                    />
                    {/* <DeleteProfilePic
                        profilePicUrl={props.profilePicUrl}
                        deletePic={props.deletePic}
                        id={props.id}
                    /> */}
                    <a href="mailto:c.eboa@outlook.com to mail to">Email me</a>
                </div>

                {/* <Music /> */}
                <div className="card">
                    <p>Drop a line</p>
                    <BioEditor
                        firstName={props.firstName}
                        lastName={props.lastName}
                        bio={props.bio}
                    />
                </div>
                <div className="card">
                    <p>Show your work</p>
                    {/* <Gallery profilePicUrl={props.profilePicUrl} /> */}
                    <Carousel>
                        <Gallery galleryImage="hairwork/corn.jpg" />
                        <Gallery galleryImage="hairwork/bun.jpg" />
                    </Carousel>
                </div>
            </div>
            {/* <button onClick={() => props.toggleUploader()}>
                New profile picture
            </button> */}
        </>
    );
}
