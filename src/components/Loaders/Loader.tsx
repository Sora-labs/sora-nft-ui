import { AiOutlineLoading3Quarters } from "react-icons/ai"

const Loader = () => {
    return (
        <div className="w-full flex py-2 justify-center">
            <AiOutlineLoading3Quarters className="animate-spin"/>
        </div>
    )
}

export default Loader