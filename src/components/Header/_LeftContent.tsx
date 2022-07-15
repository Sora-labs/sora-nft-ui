import React, { FunctionComponent } from "react";
import { AiOutlineMenu } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../../store/slices/menu";
import { RootState } from "../../store/store";
import Logo from "../Logo";

 
const LeftContent: FunctionComponent = () => {
    const { isOpen } = useSelector((state: RootState) => state.menu)
    const dispatch = useDispatch()

    return (
        <div className="flex flex-row items-center px-4 sm:px-0">
            <div className="px-4 hidden sm:inline-block">
                <AiOutlineMenu onClick={() => dispatch(setIsOpen(!isOpen))} className="w-6 h-6 text-light-gray-100 dark:text-dark-gray-30 cursor-pointer"></AiOutlineMenu>
            </div>
            <Logo></Logo>
        </div>
    );
}
 
export default LeftContent;
