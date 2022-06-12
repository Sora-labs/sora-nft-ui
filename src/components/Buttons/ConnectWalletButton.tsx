import React from "react";
import { wallet } from "../../services/near";



function ConnectWalletButton() {

    return (
        <div onClick={() => wallet.requestSignIn()} className="px-3 py-1 bg text-white text-xs md:text-lg border bg-gray-900 border-light-gray-100 rounded-md cursor-pointer whitespace-nowrap">
            Connect Wallet
        </div>
    );
}

export default ConnectWalletButton;