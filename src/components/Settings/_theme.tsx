import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { AiOutlineArrowLeft, AiOutlineCheck } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { ThemeContext } from "../../context/ThemeContext"
import { setIsSetting } from "../../store/slices/setting"

const Theme = () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const { dark, changeDark } = useContext(ThemeContext)

    return (
        <div className="">
            <div className="" aria-label="setting container">
                <div className="flex flex-row items-center gap-4 px-4 pb-4 border-b border-light-gray-20 dark:border-dark-gray-70" aria-label="setting title">
                    <AiOutlineArrowLeft onClick={() => dispatch(setIsSetting(true))} className="w-5 h-5 cursor-pointer"/>
                    <h2 className="text-xl font-semibold">{ t('appearance') }</h2>
                </div>
                <div className="flex flex-col px-4">
                    <div className="flex flex-col py-2">
                        <div>
                            <p className="text-xs text-light-gray-70 dark:text-dark-gray-30" aria-label="subtitle">
                                {t('this_only_applies_to_your_browser')}
                            </p>
                        </div>
                        <div className="flex flex-col pt-4 gap-4 text-lg leading-none">
                            <div className="flex items-center gap-4 cursor-pointer" onClick={ () => changeDark(true) }>
                                <span style={{minWidth: "18px"}}>
                                    { dark && <AiOutlineCheck className="text-dark-gray-35"/>}
                                </span>
                                <p>{ t('dark') }</p>
                            </div>
                            <div className="flex items-center gap-4 cursor-pointer" onClick={ () => changeDark(false) }>
                                <span style={{minWidth: "18px"}}>
                                    { !dark && <AiOutlineCheck className=""/> }
                                </span>
                                <p>{ t('light') }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Theme