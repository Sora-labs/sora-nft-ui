import { useSelector } from "react-redux";
import ProfileFooter from "./ProfileFooter";
import ProfileInfo from "./ProfileInfo";
import ProfilePics from "./ProfilePics";
import LoadingBar from "react-top-loading-bar"
import { RootState } from "store/store";
import Menu from "./Menu";

function ArtistProfile() {
    const { loading } = useSelector((state: RootState) => state.toploading)
    

    return (
        <div className="flex flex-col gap-8">
            <LoadingBar color="#1d9bf0" progress={loading}/>
            <ProfilePics></ProfilePics>
            <div className="flex flex-col md:flex-row gap-4 border-light-gray-70 dark:border-dark-gray-80">
                <div className="flex flex-col md:w-1/3">
                    <ProfileInfo></ProfileInfo>
                    <ProfileFooter></ProfileFooter>
                </div>
                <div className="flex md:w-2/3">
                    <Menu></Menu>
                </div>
            </div>
        </div>
    );
}

export default ArtistProfile;