import NotFound from "pages/404";
import NFTPage from "pages/NFTPage";
import { useParams } from "react-router-dom";

function ValidateNFT() {
  const validProfileId = /\B@\S+$/g;
  const validNFTId = /^[0-9]+$/g;
  let params = useParams();
  let isValidProfileId = params.profileId?.match(validProfileId);
  let nftId = params.nftId?.match(validNFTId);
  if (isValidProfileId && nftId) {
    return <NFTPage />;
  }
  return <NotFound />;
}

export default ValidateNFT;
