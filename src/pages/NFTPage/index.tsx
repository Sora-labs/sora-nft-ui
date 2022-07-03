import { useDisableRightClick } from "hooks/useDisableRightClick"
import { useSelector } from "react-redux"
import { RootState } from "store/store"
import NFTInfo from "./NFTInfo"
import NFTSideDetail from "./NFTSideDetail"
import NFTWrapper from "./NFTWrapper"

const NFTPage = () => {
    const {
        isExpanded,
    } = useSelector((state: RootState) => state.nftPage)
    
    // useDisableRightClick()

    return (
        <div className="px-8">
            <div 
                className="nft-inner-wrapper"
            >
                <div 
                    className={`${ 
                        isExpanded ? "wide-nft-wrapper" : ""}
                    `}
                >
                    <NFTWrapper></NFTWrapper>
                </div>
                <div className="grid-col-1">
                    <NFTInfo></NFTInfo>
                </div>
                <div 
                    className={`
                        ${isExpanded ? "on-wide-nft-wrapper" : "on-skrink-nft-wrapper" }
                    `}
                >
                    <NFTSideDetail></NFTSideDetail>
                </div>
            </div>
        </div>
    )
}

export default NFTPage