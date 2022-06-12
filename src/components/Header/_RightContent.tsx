import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { wallet } from "../../services/near";
import { AiOutlineEllipsis } from "react-icons/ai";
import ConnectWalletButton from "../Buttons/ConnectWalletButton";
import DefaultAvatar from "../Images/DefaultAvatar";


function RightContent() {
    return (
        <div className="flex flex-row items-center gap-2 md:gap-5">
            <AiOutlineBell className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"></AiOutlineBell>
            { !wallet.isSignedIn() && <ConnectWalletButton></ConnectWalletButton> }
            <div className="relative">
                <div className="p-1 bg-white rounded-full border border-light-gray-20">
                    <DefaultAvatar></DefaultAvatar>
                </div>
                <div className="absolute p-2">
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default RightContent;