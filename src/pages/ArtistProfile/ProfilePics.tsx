/* eslint-disable @typescript-eslint/no-unused-vars */
import { BaseImage } from "components/Images";
import useCopyToClipboard from "hooks/useCopyToClipboard";
import { useState } from "react";
import { AiFillCopy, AiOutlineCheck } from "react-icons/ai";
import { getConfig, NEAR_ENV } from "services/config";
import { accountId } from "services/near";
import { trimLongString } from "utils/stringFormatter";

function ProfilePics() {
    const [isCopied, setIsCopied] = useState<boolean>(false)
    const [_copiedText, copy] = useCopyToClipboard()

    const handleCopy = async() => {
        setIsCopied(true)
        await copy(accountId)
        setTimeout(() => setIsCopied(false), 1500)
    }

    return (
        <div className="relative mb-32">
            <div className="">
                <div className="w-full h-32 md:h-56 overflow-y-hidden">
                    <img src={getConfig(NEAR_ENV).fakeImgUrl + '1000/500'} alt="not found" className="w-full object-cover"/>
                </div>
            </div>
            <div className="flex flex-col items-center absolute w-min -bottom-3/4 left-0 right-0 mx-auto md:-bottom-1/2 md:mr-0 md:ml-0 md:left-8 md:right-auto md:items-start">
                <div className="w-28 rounded-full border-8 border-light-gray-10 dark:border-dark-gray-100 md:-bottom-1/3 md:m-0 md:right-auto md:left-8">
                    <BaseImage src={getConfig(NEAR_ENV).fakeImgUrl + '200/200'} rounded="rounded-full"/>
                </div>
                <div className="flex items-center p-2 rounded-xl shadow-lg gap-2">
                    <p>{ trimLongString(accountId) }</p>
                    { isCopied && <AiOutlineCheck className="w-5 h-5 text-primary-100"/> }
                    { !isCopied && <AiFillCopy onClick={handleCopy} className="w-5 h-5 cursor-pointer"></AiFillCopy>}
                </div>
            </div>
        </div>
    );
}

export default ProfilePics;