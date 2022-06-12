import { AiFillHome, AiOutlineCompass, AiOutlineMenu, AiOutlinePayCircle, AiTwotoneBank } from "react-icons/ai"
import { Link } from "react-router-dom"

export const MobileSidebar = () => {

}

export const Sidebar = () => {

    return (
        <div className="fixed top-0 left-0 bottom-0 z-10 px-2 bg-light-gray-0 flex flex-col gap-8">
            <div className="flex justify-center p-4">
                <AiOutlineMenu className="w-6 h-6 text-dark-gray-100 cursor-pointer"></AiOutlineMenu>
            </div>
            <ul className="flex flex-col gap-8">
                <li>
                    <Link to="/" className="flex flex-col justify-center gap-2">
                        <div className="flex justify-center">
                            <AiFillHome className="w-6 h-6 text-dark-gray-100 cursor-pointer"/>
                        </div>
                        <p className="text-center text-xs">Home</p>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="flex flex-col justify-center gap-2">
                        <div className="flex justify-center">
                            <AiOutlineCompass className="w-6 h-6 text-dark-gray-100 cursor-pointer"/>
                        </div>
                        <p className="text-center text-xs">Explore</p>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="flex flex-col justify-center gap-2">
                        <div className="flex justify-center">
                            <AiOutlinePayCircle className="w-6 h-6 text-dark-gray-100 cursor-pointer"/>
                        </div>
                        <p className="text-center text-xs">Sell</p>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="flex flex-col justify-center gap-2">
                        <div className="flex justify-center">
                            <AiTwotoneBank className="w-6 h-6 text-dark-gray-100 cursor-pointer"/>
                        </div>
                        <p className="text-center text-xs">Auction</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}