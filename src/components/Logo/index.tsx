import React, { FunctionComponent } from "react";

 
const Logo: FunctionComponent = () => {
    return (
        <div className="h-10 cursor-pointer flex flex-row gap-1 items-center">
            <div className="w-6 md:w-8" aria-label="logo-container">
                <img className="w-full" src="./images/nft-app-logo.png" alt="" />
            </div>
            <h1 className="text-lg md:text-2xl font-semibold">Sora</h1>
        </div>
    );
}
 
export default Logo;