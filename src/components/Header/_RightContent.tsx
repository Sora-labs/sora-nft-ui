import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { wallet } from "../../services/near";
import { setCloseMenu, setIsOpen } from "../../store/slices/menu";
import ConnectWalletButton from "../Buttons/ConnectWalletButton";
import DefaultAvatar from "../Images/DefaultAvatar";

import Settings from "../UserMenu";

function RightContent() {
  const { isOpen } = useSelector((state: RootState) => state.menu);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row items-center gap-2 md:gap-5 mr-4">
      {!wallet.isSignedIn() && <ConnectWalletButton></ConnectWalletButton>}
      {wallet.isSignedIn() && (
        <>
          <AiOutlineBell
            className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
            strokeWidth={"1px"}
          ></AiOutlineBell>
          <div className="">
            {!isOpen && (
              <div
                onClick={() => dispatch(setIsOpen())}
                className="w-8 h-8 md:w-10 md:h-10 p-1 bg-white rounded-full border border-light-gray-20 cursor-pointer"
              >
                <DefaultAvatar></DefaultAvatar>
              </div>
            )}
            {isOpen && (
              <div
                onClick={() => dispatch(setCloseMenu())}
                className="w-8 h-8 md:w-10 md:h-10 p-1 bg-white rounded-full border border-light-gray-20 cursor-pointer"
              >
                <DefaultAvatar></DefaultAvatar>
              </div>
            )}
            <Settings />
          </div>
        </>
      )}
    </div>
  );
}

export default RightContent;
