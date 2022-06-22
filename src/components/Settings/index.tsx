import { useTranslation } from "react-i18next";
import { AiOutlineArrowLeft, AiOutlineDesktop, AiOutlineRight, AiOutlineZhihu } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setIsLang, setIsMenu, setIsTheme } from "../../store/slices/setting";

const Settings = () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()

    return (
        <div className="">
            <div className="flex flex-col gap-4" aria-label="setting container">
                <div className="flex flex-row items-center gap-4 px-4 pb-4 border-b border-light-gray-20" aria-label="setting title">
                    <AiOutlineArrowLeft onClick={() => dispatch(setIsMenu(true))} className="w-5 h-5 cursor-pointer"/>
                    <h2 className="text-xl font-semibold">{ t('setting') }</h2>
                </div>
                <div className="flex flex-col gap-4 px-4">
                    <div 
                        className="flex flex-row justify-between items-center cursor-pointer"
                        onClick={() => dispatch(setIsTheme(true))}
                    >
                        <div className="flex flex-row gap-4 items-center">
                            <div className="w-6 h-6">
                                <AiOutlineDesktop className="w-full h-full"/>
                            </div>
                            <div className="text-lg">{ t('appearance') }</div>
                        </div>
                        <div className="w-5 h-5">
                            <AiOutlineRight className="w-full h-full text-light-gray-45"></AiOutlineRight>
                        </div>
                    </div>
                    <div 
                        className="flex flex-row justify-between items-center cursor-pointer"
                        onClick={() => dispatch(setIsLang(true))}
                    >
                        <div className="flex flex-row gap-4 items-center">
                            <div className="w-6 h-6">
                                <AiOutlineZhihu className="w-full h-full"/>
                            </div>
                            <div className="text-lg">{ t('language') }</div>
                        </div>
                        <div className="w-5 h-5">
                            <AiOutlineRight className="w-full h-full text-light-gray-45"></AiOutlineRight>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Settings;