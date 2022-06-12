import React, { FunctionComponent } from "react";
import { AiOutlineMenu } from "react-icons/ai"
import Logo from "../Logo";

 
const LeftContent: FunctionComponent = () => {
    return (
        <div className="flex flex-row items-center">
            <div className="px-4">
                <AiOutlineMenu className="w-6 h-6 text-dark-gray-100 cursor-pointer"></AiOutlineMenu>
            </div>
            <Logo></Logo>
        </div>
    );
}
 
export default LeftContent;
