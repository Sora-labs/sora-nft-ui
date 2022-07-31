import Verify from "assets/svg/verify";
import { useTranslation } from "react-i18next";
import { AiOutlineTwitter } from "react-icons/ai";

function VerifyProfileModal() {
    const { t } = useTranslation()

    return (
        <div className="flex flex-col gap-4 w-full p-16 shadow-lg rounded-md bg-white dark:bg-dark-gray-90">
            <div className="">
                <Verify bg="#1D9BF0" width="50px" height="50px"></Verify>
            </div>
            <h1 className="font-semibold text-3xl">{ t('please_verify_your_profile') }</h1>
            <p>{ t('verify_message') }</p>
            <div className="flex flex-col md:flex-row gap-4">
                <div 
                    className="w-1/2 flex justify-center items-center gap-2 py-4 px-3 cursor-pointer bg-primary-100 rounded-lg"
                    
                >
                    <AiOutlineTwitter className="w-5 h-5 md:w-8 md:h-8 text-white"/>
                    <div className="text-lg text-white">{ t('verify_twitter') }</div>
                </div>
                <div className="w-1/2 flex justify-center items-center gap-2 py-4 px-3 cursor-pointer bg-primary-100 rounded-lg">
                    <img src="./images/pixiv.jpg" alt="" className="w-5 h-5 md:w-8 md:h-8 rounded-full"/>
                    <div className="text-lg text-white">{ t('verify_pixiv') }</div>
                </div>
            </div>
        </div>
    );
}

export default VerifyProfileModal;