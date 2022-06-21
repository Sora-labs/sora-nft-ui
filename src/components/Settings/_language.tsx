import { useTranslation } from "react-i18next"
import i18next from 'i18next';
import { AiOutlineArrowLeft, AiOutlineCheck } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { setIsSetting } from "../../store/slices/setting"
import { languages } from "../../i18n/index";

const LanguageSetting = () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const handleChangeLanguage = (lang: string) => {
        i18next.changeLanguage(localStorage['i18nextLng'] === 'en' ? 'jp' : 'en')
    }

    return (
        <div className="">
            <div className="" aria-label="setting container">
                <div className="flex flex-row items-center gap-4 px-4 pb-4 border-b border-light-gray-20 dark:border-dark-gray-70" aria-label="setting title">
                    <AiOutlineArrowLeft onClick={() => dispatch(setIsSetting(true))} className="w-5 h-5 cursor-pointer"/>
                    <h2 className="text-xl font-semibold">Choose language</h2>
                </div>
                <div className="flex flex-col px-4">
                    <div className="flex flex-col py-2">
                        <div>
                            <p className="text-xs text-light-gray-70 dark:text-dark-gray-30" aria-label="subtitle">
                                This only applies to your browser
                            </p>
                        </div>
                        <div className="flex flex-col pt-4 gap-4 text-lg leading-none">
                            { 
                                languages.map(lang => (
                                    <div className="flex items-center gap-4 cursor-pointer" key={lang.lang} onClick={ () => handleChangeLanguage(lang.lang) }>
                                        <span style={{minWidth: "18px"}}>
                                            { localStorage['i18nextLng'] === lang.lang && <AiOutlineCheck className="text-dark-gray-35"/>}
                                        </span>
                                        <p>{ lang.name }</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LanguageSetting