import React, { useEffect, useRef, useState } from "react";
import { AiOutlineBell, AiOutlinePoweroff, AiOutlineRight, AiOutlineSetting, AiOutlineUnorderedList } from "react-icons/ai";
import { getUserBalance, wallet } from "../../services/near";
import { AiOutlineEllipsis } from "react-icons/ai";
import ConnectWalletButton from "../Buttons/ConnectWalletButton";
import DefaultAvatar from "../Images/DefaultAvatar";
import { Link } from "react-router-dom";
import { trimLongString } from "../../utils/stringFormatter" 
import useOnClickOutSide from "../../hooks/useOnClickOutside";

function RightContent() {
    const [isOpenProfile, setIsOpenProfile] = useState(false)
    const [balance, setBalance] = useState("0")
    const ref = useRef()
    useOnClickOutSide(ref, isOpenProfile ? setIsOpenProfile : undefined)

    useEffect(() => {
        (async() => 
            setBalance(await getUserBalance())
        )()
    }, [])
    return (
        <div className="flex flex-row items-center gap-2 md:gap-5">
            { !wallet.isSignedIn() && <ConnectWalletButton></ConnectWalletButton> }
            { wallet.isSignedIn() && 
                <>
                <AiOutlineBell className="w-5 h-5 md:w-6 md:h-6 cursor-pointer" strokeWidth={"1px"}></AiOutlineBell>
                <div className="">
                <div onClick={() => setIsOpenProfile(true)} className="w-8 h-8 md:w-10 md:h-10 p-1 bg-white rounded-full border border-light-gray-20">
                    <DefaultAvatar></DefaultAvatar>
                </div>
                { isOpenProfile &&
                    <div className="md:relative">
                        <div 
                            className="user-menu absolute px-3 py-5 bg-light-gray-0 z-10 top-full left-1/2 -translate-x-1/2 md:translate-x-0 rounded-lg"
                            style={{boxShadow: "0 15px 20px rgba(0,0,0,.15)"}}
                            ref={ref as any}
                        >
                            <ul className="flex flex-col gap-5">
                                <li>
                                    <Link to="#" className="px-4 flex flex-row justify-between items-center">
                                        <div className="flex flex-row gap-4 items-center">
                                            <div className="w-10 h-10">
                                                <DefaultAvatar></DefaultAvatar>
                                            </div>
                                            <div className="font-bold text-lg">Profile</div>
                                        </div>
                                        <div className="w-5 h-5">
                                            <AiOutlineRight className="w-full h-full text-light-gray-45"></AiOutlineRight>
                                        </div>
                                    </Link>
                                </li>      
                                <li>
                                    <div className="px-4 py-3 border border-light-gray-30 rounded-md">
                                        <div className="">
                                            <div className="flex flex-row justify-between items-center" aria-label="balance title">
                                                <p className="font-medium text-light-gray-45">Balance</p>
                                                <p className="bg-light-gray-20 py-1 px-2 rounded-lg text-sm" aria-label="address">{ trimLongString(wallet.getAccountId()) }</p>
                                            </div>
                                            <div className="text-lg font-bold">
                                                { balance ?? "0" } NEAR
                                            </div>
                                        </div>
                                        <div className="w-full h-px bg-light-gray-30 my-2" aria-label="seperator"></div>
                                        <div>
                                            <Link to="#" className="flex flex-row items-center justify-between">
                                                <div>
                                                    <div className="flex flex-row justify-between items-center" aria-label="balance title">
                                                        <p className="font-medium text-light-gray-45">Offer Balance</p>
                                                    </div>
                                                    <div className="text-lg font-bold">
                                                        0 NEAR
                                                    </div>
                                                </div>
                                                <div className="w-5 h-5">
                                                    <AiOutlineRight className="w-full h-full text-light-gray-45"></AiOutlineRight>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <Link to="#" className="px-4 flex flex-row justify-between items-center">
                                        <div className="flex flex-row gap-4 items-center">
                                            <div className="w-6 h-6">
                                                <AiOutlineUnorderedList className="w-full h-full"></AiOutlineUnorderedList>
                                            </div>
                                            <div className="font-bold text-lg">Activity</div>
                                        </div>
                                        <div className="w-5 h-5">
                                            <AiOutlineRight className="w-full h-full text-light-gray-45"></AiOutlineRight>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="px-4 flex flex-row justify-between items-center">
                                        <div className="flex flex-row gap-4 items-center">
                                            <div className="w-6 h-6">
                                                <AiOutlineSetting className="w-full h-full"></AiOutlineSetting>
                                            </div>
                                            <div className="font-bold text-lg">Settings</div>
                                        </div>
                                        <div className="w-5 h-5">
                                            <AiOutlineRight className="w-full h-full text-light-gray-45"></AiOutlineRight>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={() => { wallet.signOut(); window.location.reload() }} className="px-4 flex flex-row justify-between items-center">
                                        <div className="flex flex-row gap-4 items-center">
                                            <div className="w-6 h-6">
                                                <AiOutlinePoweroff className="w-full h-full"/>
                                            </div>
                                            <div className="font-bold text-lg">Disconnect</div>
                                        </div>
                                        <div className="w-5 h-5">
                                            <AiOutlineRight className="w-full h-full text-light-gray-45"></AiOutlineRight>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                }
            </div>
            </>}
        </div>
    );
}

export default RightContent;