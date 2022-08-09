/* eslint-disable @typescript-eslint/no-unused-vars */
import { BaseImage } from "components/Images";
import useCopyToClipboard from "hooks/useCopyToClipboard";
import { PropsWithChildren, useState } from "react";
import { AiFillCopy, AiOutlineCheck } from "react-icons/ai";
import { useSelector } from "react-redux";
import { gql, useQuery } from "@apollo/client"
import { getConfig, NEAR_ENV } from "services/config";
import { accountId } from "services/near";
import { RootState } from "store/store";
import { trimLongString } from "utils/stringFormatter";
import DefaultAvatar from "components/Images/DefaultAvatar";
import { useTranslation } from "react-i18next";
import { isOwnProfile } from "utils/auth";


const ProfilePics = ({
    avatar,
    background,
    address,
}: PropsWithChildren<{
    avatar: string,
    background: string,
    address: string | undefined,
}>) => {
    const [isCopied, setIsCopied] = useState<boolean>(false)
    const [_copiedText, copy] = useCopyToClipboard()
    const { loading: progress } = useSelector((state: RootState) => state.toploading)
    const { profile } = useSelector((state: RootState) => state.profile)
    const { t } = useTranslation()
    const handleCopy = async() => {
        setIsCopied(true)
        await copy(accountId)
        setTimeout(() => setIsCopied(false), 1500)
    }

    return (
        <div className="relative mb-32">
            <div className="">
                <div className="w-full h-32 md:h-56 overflow-y-hidden">
                    { profile?.avatar && <img src={ "" } alt="not found" className="w-full object-cover"/> }
                    { !profile?.avatar && <div className="w-full h-full bg-slate-500 object-cover"/> }
                </div>
            </div>
            <div className="flex flex-col items-center absolute w-min -bottom-1/2 left-0 right-0 mx-auto md:-bottom-1/3 md:mr-0 md:ml-0 md:left-8 md:right-auto md:items-start">
                <div className="w-28 h-28 rounded-full border-8 bg-light-gray-10 dark:bg-dark-gray-100 border-light-gray-10 dark:border-dark-gray-100 md:-bottom-1/3 md:m-0 md:right-auto md:left-8">
                    { profile?.avatar && <BaseImage src={ "" } rounded="rounded-full"/> }
                    { !profile?.avatar && <DefaultAvatar/> }
                </div>
                { isOwnProfile(address) && 
                    <div className="flex items-center p-2 rounded-xl shadow-lg gap-2">
                        <p>{ trimLongString(accountId) }</p>
                        { isCopied && <AiOutlineCheck className="w-5 h-5 text-primary-100"/> }
                        { !isCopied && <AiFillCopy onClick={handleCopy} className="w-5 h-5 cursor-pointer"></AiFillCopy>}
                    </div>
                }
            </div>
            <div>
                { isOwnProfile(address) &&
                    <div className="absolute w-max -bottom-16 right-4 border border-light-gray-100 dark:border-dark-gray-50 hover:bg-light-gray-20 dark:hover:bg-dark-gray-90 py-2 px-4 rounded-full cursor-pointer">
                        { t('edit_profile') }
                    </div>
                }
                { !isOwnProfile(address) && 
                    <div className="absolute w-max -bottom-16 right-4 border border-light-gray-100 dark:border-dark-gray-50 hover:bg-light-gray-20 dark:hover:bg-dark-gray-90 py-2 px-4 rounded-full cursor-pointer">
                        { t('follow') }
                    </div>
                }
            </div>
        </div>
    );
}

export default ProfilePics;