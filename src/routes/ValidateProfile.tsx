import NotFound from "pages/404";
import ArtistProfile from "pages/ArtistProfile";
import { useParams } from "react-router-dom";

// a valid profile id should start with an @ mark e.g: @sora
// can contain a blockchain domain e.g: @sora.testnet
// numbers are fine but no special characters except dot or hyphen e.g: @s.o-ra123
function ValidateProfile() {
    const validProfileId = /\B@\S+$/g
    let params = useParams()
    let isValidProfileId = params.profileId?.match(validProfileId)
    if (isValidProfileId) {
        return <ArtistProfile/>
    }
    return <NotFound/>
}

export default ValidateProfile;