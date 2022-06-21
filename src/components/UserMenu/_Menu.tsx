
import { useEffect, useState } from "react";
import { AiOutlineHistory, AiOutlinePoweroff, AiOutlineRight, AiOutlineSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import { trimLongString } from "../../utils/stringFormatter";
import DefaultAvatar from "../Images/DefaultAvatar";
import { getUserBalance, wallet } from "../../services/near";
import { useDispatch } from "react-redux";
import { setIsSetting } from "../../store/slices/setting";

const Menu = () => {
    const [balance, setBalance] = useState("0")
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        (async() => 
            setBalance(await getUserBalance())
        )()
    }, [])

    return (
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
                        <AiOutlineRight className="w-full h-full text-light-gray-45 dark:text-white"></AiOutlineRight>
                    </div>
                </Link>
            </li>      
            <li>
                <div className="px-4 py-3 border border-light-gray-30 rounded-md">
                    <div className="">
                        <div className="flex flex-row justify-between items-center" aria-label="balance title">
                            <p className="font-medium text-light-gray-45 dark:text-white">Balance</p>
                            <p className="bg-light-gray-20 dark:bg-dark-gray-70 py-1 px-2 rounded-lg text-sm" aria-label="address">{ trimLongString(wallet.getAccountId()) }</p>
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
                                    <p className="font-medium text-light-gray-45 dark:text-white">Offer Balance</p>
                                </div>
                                <div className="text-lg font-bold">
                                    0 NEAR
                                </div>
                            </div>
                            <div className="w-5 h-5">
                                <AiOutlineRight className="w-full h-full text-light-gray-45 dark:text-white"></AiOutlineRight>
                            </div>
                        </Link>
                    </div>
                </div>
            </li>
            <li>
                <Link to="#" className="px-4 flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-4 items-center">
                        <div className="w-6 h-6">
                            <AiOutlineHistory className="w-full h-full text-light-gray-80 dark:text-white"/>
                        </div>
                        <div className="text-lg">Activity</div>
                    </div>
                    <div className="w-5 h-5">
                        <AiOutlineRight className="w-full h-full text-light-gray-45 dark:text-white"></AiOutlineRight>
                    </div>
                </Link>
            </li>
            <li>
                <Link to="#" onClick={() => dispatch(setIsSetting(true))} className="px-4 flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-4 items-center">
                        <div className="w-6 h-6">
                            <AiOutlineSetting className="w-full h-full text-light-gray-80 dark:text-white"></AiOutlineSetting>
                        </div>
                        <div className="text-lg">Settings</div>
                    </div>
                    <div className="w-5 h-5">
                        <AiOutlineRight className="w-full h-full text-light-gray-45 dark:text-white"></AiOutlineRight>
                    </div>
                </Link>
            </li>
            <li>
                <Link to="#" onClick={() => { wallet.signOut(); window.location.reload() }} className="px-4 flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-4 items-center">
                        <div className="w-6 h-6">
                            <AiOutlinePoweroff className="w-full h-full text-light-gray-80 dark:text-white"/>
                        </div>
                        <div className="text-lg">Disconnect</div>
                    </div>
                    <div className="w-5 h-5">
                        <AiOutlineRight className="w-full h-full text-light-gray-45 dark:text-white"></AiOutlineRight>
                    </div>
                </Link>
            </li>
        </ul>
    )
}

export default Menu