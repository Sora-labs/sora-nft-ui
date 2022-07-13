import ProfileFooter from "./ProfileFooter";
import ProfileInfo from "./ProfileInfo";
import ProfilePics from "./ProfilePics";

function ArtistProfile() {
    return (
        <div className="flex flex-col">
            <ProfilePics></ProfilePics>
            <ProfileInfo></ProfileInfo>
            <ProfileFooter></ProfileFooter>
        </div>
    );
}

export default ArtistProfile;