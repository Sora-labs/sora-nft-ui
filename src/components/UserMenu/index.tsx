import { memo, useRef } from "react";
import useOnClickOutSide from "../../hooks/useOnClickOutside";
import { setIsOpen } from "../../store/slices/setting";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Menu from "./_Menu";
import Settings from "../Settings";
import Theme from "../Settings/_theme";

const UserMenu = () => {
    const ref = useRef()
    const { isOpen, isMenu, isSetting, isTheme } = useSelector((state: RootState) => state.setting)
    const dispatch = useDispatch()
    useOnClickOutSide(ref, () => dispatch(setIsOpen(false)))

    return (
        <>
        { isOpen &&
        <div className="md:relative">
            <div 
                className="user-menu absolute px-3 py-5 bg-light-gray-0 z-10 top-full left-1/2 -translate-x-1/2 md:translate-x-0 rounded-lg overflow-hidden"
                style={{boxShadow: "0 15px 20px rgba(0,0,0,.15)"}}
                ref={ref as any}
            >
                { isMenu && <Menu/>}
                { isSetting && <Settings/> }
                { isTheme && <Theme/> }
            </div>
        </div>
        }
        </>
    );
}
 
export default memo(UserMenu);