import { ImageWithLoader } from "components/Images"
import { AiOutlineCompress, AiOutlineExpand, AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { getConfig, NEAR_ENV } from "services/config"
import { setIsExpanded, setIsFullScreen } from "store/slices/nftPage"
import { RootState } from "store/store"

const NFTWrapper = () => {
    const { isExpanded, isFullScreen } = useSelector((state: RootState) => state.nftPage)
    const dispatch = useDispatch()

    return (
        <div className="w-full flex flex-col items-center bg-black">
            <div 
                className="w-full flex justify-center relative"
                style={{ height: isExpanded ? "70vh" : "60vh" }}
            >
                <div className="absolute w-full h-full z-10 inset-0 bg-black"></div>
                <div
                    className="relative z-20 w-full overflow-y-hidden"
                >
                    <ImageWithLoader
                        src={ getConfig(NEAR_ENV).fakeImgUrl + "1000/500" }
                        width="w-full"
                    />
                </div>
            </div>
            <div className="w-full flex items-center justify-end gap-4 py-4 px-6" aria-label="img tool wrapper">
                <div
                    className="" 
                    aria-label="left-tools"
                >

                </div>
                <div 
                    className="flex gap-2" 
                    aria-label="right-tools"
                >
                    <div className="cursor-pointer">
                        { !isExpanded &&
                            <AiOutlineExpand 
                                className="text-2xl" 
                                onClick={ () => dispatch(setIsExpanded(true)) }
                            ></AiOutlineExpand> 
                        }
                        { isExpanded && 
                            <AiOutlineCompress 
                                className="text-2xl" 
                                onClick={ () => dispatch(setIsExpanded(false)) }
                            ></AiOutlineCompress>
                        }
                    </div>
                    <div className="cursor-pointer">
                        {
                            !isFullScreen &&
                            <AiOutlineFullscreen
                                className="text-2xl"
                                onClick={ () => dispatch(setIsFullScreen(true)) }
                            >  
                            </AiOutlineFullscreen>
                        }
                        {
                            isFullScreen &&
                            <AiOutlineFullscreenExit
                                className="text-2xl"
                                onClick={ () => dispatch(setIsFullScreen(false)) }
                            >
                            </AiOutlineFullscreenExit>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFTWrapper