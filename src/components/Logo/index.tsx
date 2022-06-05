import React, { FunctionComponent } from "react";

 
const Logo: FunctionComponent = () => {
    return (
        <div className="h-10 cursor-pointer flex flex-row gap-1 items-center">
            <div className="w-6" aria-label="logo-container">
                <img className="w-full" src="./images/nft-app-logo.png" alt="" />
            </div>
            <h1 className="text-lg font-semibold">Sora</h1>
        </div>
    );
}
 
export default Logo;