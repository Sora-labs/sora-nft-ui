import { BaseImage } from "components/Images"
import { AiOutlineCompress, AiOutlineExpand } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { setIsExpanded } from "store/slices/nftPage"
import { RootState } from "store/store"

const NFTWrapper = () => {
    const { isExpanded } = useSelector((state: RootState) => state.nftPage)
    const dispatch = useDispatch()

    return (
        <div className="w-full">
            <BaseImage></BaseImage>
            <div className="flex items-center" aria-label="img tool wrapper">
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
        </div>
    )
}

export default NFTWrapper