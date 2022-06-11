import React, { FunctionComponent } from "react";
import { AiOutlineMenu } from "react-icons/ai"
import Logo from "../Logo";

 
const LeftContent: FunctionComponent = () => {
    return (
        <div className="flex flex-row gap-2 items-center">
            <AiOutlineMenu className="w-5 h-5 text-dark-gray-100 cursor-pointer"></AiOutlineMenu>
            <Logo></Logo>
        </div>
    );
}
 
export default LeftContent;
