import { useSelector } from "react-redux";
import ProfileFooter from "./ProfileFooter";
import ProfileInfo from "./ProfileInfo";
import ProfilePics from "./ProfilePics";
import LoadingBar from "react-top-loading-bar"
import { RootState } from "store/store";

function ArtistProfile() {
    const { loading } = useSelector((state: RootState) => state.toploading)
    

    return (
        <div className="flex gap-8">
            <LoadingBar color="#1d9bf0" progress={loading}/>
            <div className="md:w-8/12 flex flex-col border-r border-b border-light-gray-70 dark:border-dark-gray-80">
                <ProfilePics></ProfilePics>
                <ProfileInfo></ProfileInfo>
                <ProfileFooter></ProfileFooter>
            </div>
            <div className="md:w-4/12 md:flex hidden"></div>
        </div>
    );
}

export default ArtistProfile;