import { memo, useRef } from "react";
import useOnClickOutSide from "../../hooks/useOnClickOutside";
import { setCloseMenu } from "../../store/slices/menu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Menu from "./_Menu";
import Settings from "../Settings";
import Theme from "../Settings/_theme";
import LanguageSetting from "../Settings/_language";

const UserMenu = () => {
    const ref = useRef()
    const { isMenu, isSetting, isTheme, isLang } = useSelector((state: RootState) => state.setting)
    const { isOpen } = useSelector((state: RootState) => state.menu)
    const dispatch = useDispatch()
    useOnClickOutSide(ref, isOpen ? () => dispatch(setCloseMenu()) : undefined)

    return (
        <>
        { isOpen &&
        <div className="md:relative">
            <div 
                className="user-menu absolute px-3 py-5 bg-light-gray-0 dark:bg-dark-gray-90 z-10 top-full left-1/2 -translate-x-1/2 md:translate-x-0 rounded-lg overflow-hidden"
                style={{boxShadow: "0 15px 20px rgba(0,0,0,.15)"}}
                ref={ref as any}
            >
                { isMenu && <Menu/>}
                { isSetting && <Settings/> }
                { isTheme && <Theme/> }
                { isLang && <LanguageSetting/>}
            </div>
        </div>
        }
        </>
    );
}
 
export default memo(UserMenu);