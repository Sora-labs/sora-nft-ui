import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai"

const Reaction = () => {
    
    
    return (
        <div className="flex gap-6" aria-label="reaction">
            <div
                className="flex items-center cursor-pointer gap-2"
            >
                <AiOutlineLike className="text-2xl"></AiOutlineLike>
                <div>{ 0 }</div>
            </div>
            <div 
                className="flex items-center cursor-pointer gap-2"
            >
                <AiOutlineDislike className="text-2xl"></AiOutlineDislike>
                <div>{ 0 }</div>
            </div>
        </div>
    )
}

export default Reaction