import { useSelector } from "react-redux"
import { RootState } from "store/store"
import NFTWrapper from "./NFTWrapper"

const NFTPage = () => {
    const {
        isExpanded,
    } = useSelector((state: RootState) => state.nftPage)

    return (
        <div className="">
            <div className="nft-inner-wrapper">
                <div 
                    className={`${ 
                        isExpanded ? "wide-nft-wrapper" : ""}
                    `}
                >
                    <NFTWrapper></NFTWrapper>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default NFTPage