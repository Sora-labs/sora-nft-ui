import { useSelector } from "react-redux"
import { RootState } from "store/store"
import NFTWrapper from "./NFTWrapper"

const NFTPage = () => {
    const {
        isExpanded,
    } = useSelector((state: RootState) => state.nftPage)

    return (
        <div className="w-full h-full px-8">
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
                <div className="bg-gray-400"></div>
                <div className="bg-red-400"></div>
            </div>
        </div>
    )
}

export default NFTPage