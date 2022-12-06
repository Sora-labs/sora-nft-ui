import React from "react";
import VerifyProfileModal from "components/Modals/VerifyProfileModal";
import CreateForm from "./CreateForm";
import NFTOverview from "./NFTOverview";

function CreateNFT() {
  const verified = true;

  return (
    <div className="px-8 pt-8">
      <div className="flex flex-col md:flex-row-reverse items-center justify-center md:items-start gap-8">
        <div className="w-full md:w-1/3">
          <NFTOverview></NFTOverview>
        </div>
        <div className="w-full md:w-1/2">
          {!verified && <VerifyProfileModal />}
          {verified && <CreateForm></CreateForm>}
        </div>
      </div>
    </div>
  );
}

export default CreateNFT;
