import { useEffect, useState } from "react";

import ProfileFooter from "./ProfileFooter";
import ProfileInfo from "./ProfileInfo";
import ProfilePics from "./ProfilePics";
import LoadingBar from "react-top-loading-bar";
import Menu from "./Menu";
import ProfileType from "types/profile";
import { getProfile } from "services/api/user";
import { useParams } from "react-router-dom";
import NotFound from "pages/404";

function ArtistProfile() {
  const [profile, setProfile] = useState<ProfileType | null>();
  const { profileId } = useParams();
  useEffect(() => {
    (async () => {
      const profile = await getProfile(profileId?.split("@")[1] as string);
      setProfile(profile);
    })();
  }, [profileId]);

  if (profile === null) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col gap-8">
      <LoadingBar color="#1d9bf0" />
      <ProfilePics
        avatar={profile?.avatar ?? ""}
        background={profile?.background ?? ""}
        address={profile?.address}
      />
      <div className="flex flex-col md:flex-row gap-4 border-light-gray-70 dark:border-dark-gray-80">
        <div className="flex flex-col md:w-1/3">
          <ProfileInfo
            name={profile?.avatar!}
            description={profile?.description!}
          />
          <ProfileFooter createdAt={profile?.createdAt!}></ProfileFooter>
        </div>
        <div className="flex md:w-2/3">
          <Menu></Menu>
        </div>
      </div>
    </div>
  );
}

export default ArtistProfile;
