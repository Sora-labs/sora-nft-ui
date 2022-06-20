import { Dispatch, SetStateAction, useRef } from "react"
import { AiFillHome, AiOutlineCompass, AiOutlineMenu, AiOutlinePayCircle, AiTwotoneBank } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import useOnClickOutSide from "../../hooks/useOnClickOutside"
import { setIsOpen } from "../../store/slices/menu"
import { RootState } from "../../store/store"
import LeftContent from "../Header/_LeftContent"

export const MobileSidebar = () => {
    const { isOpen } = useSelector((state: RootState) => state.menu)
    const dispatch = useDispatch()
    const ref = useRef()
    useOnClickOutSide(ref, isOpen ? () => dispatch(setIsOpen(false)) : undefined)

    return (
        <>
        { isOpen &&
        <div className="fixed z-10 top-0 right-0 bottom-0 left-0 bg-light-gray-80 bg-opacity-80">
            <div ref={ref as any} className="animate-slide fixed top-0 bottom-0 bg-light-gray-0 dark:bg-dark-gray-90">
                <div className="flex flex-col p-2 mr-3">
                    <LeftContent></LeftContent>
                </div>
                <ul className="flex flex-col gap-6">
                    <li className="px-6">
                        <Link to="/" className="flex items-center gap-4">
                            <div className="flex justify-center">
                                <AiFillHome className="w-6 h-6 text-dark-gray-100 cursor-pointer"/>
                            </div>
                            <p className="text-center text-lg">Home</p>
                        </Link>
                    </li>
                    <li className="px-6">
                        <Link to="/" className="flex items-center gap-4">
                            <div className="flex justify-center">
                                <AiOutlineCompass className="w-6 h-6 text-dark-gray-100 cursor-pointer"/>
                            </div>
                            <p className="text-center text-lg">Explore</p>
                        </Link>
                    </li>
                    <li className="px-6">
                        <Link to="/" className="flex items-center gap-4">
                            <div className="flex justify-center">
                                <AiOutlinePayCircle className="w-6 h-6 text-dark-gray-100 cursor-pointer"/>
                            </div>
                            <p className="text-center text-lg">Sell</p>
                        </Link>
                    </li>
                    <li className="px-6">
                        <Link to="/" className="flex items-center gap-4">
                            <div className="flex justify-center">
                                <AiTwotoneBank className="w-6 h-6 text-dark-gray-100 cursor-pointer"/>
                            </div>
                            <p className="text-center text-lg">Auction</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        }
        </>
    )
}

export const Sidebar = () => {

    return (
        <div className="fixed top-0 left-0 bottom-0 z-10 bg-light-gray-0 dark:bg-dark-gray-90 flex flex-col gap-2">
            <div className="flex justify-center px-6 py-4">
                <AiOutlineMenu className="w-6 h-6 text-dark-gray-100 dark:text-dark-gray-35 cursor-pointer"></AiOutlineMenu>
            </div>
            <ul className="flex flex-col">
                <li className="px-2 py-4 hover:bg-light-gray-20 dark:hover:bg-dark-gray-50">
                    <Link to="/" className="flex flex-col justify-center gap-2">
                        <div className="flex justify-center">
                            <AiFillHome className="w-6 h-6 text-gray-900 dark:text-white cursor-pointer"/>
                        </div>
                        <p className="text-center text-xs">Home</p>
                    </Link>
                </li>
                <li className="px-2 py-4 hover:bg-light-gray-20 dark:hover:bg-dark-gray-50">
                    <Link to="/" className="flex flex-col justify-center gap-2">
                        <div className="flex justify-center">
                            <AiOutlineCompass className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer"/>
                        </div>
                        <p className="text-center text-xs">Explore</p>
                    </Link>
                </li>
                <li className="px-2 py-4 hover:bg-light-gray-20 dark:hover:bg-dark-gray-50">
                    <Link to="/" className="flex flex-col justify-center gap-2">
                        <div className="flex justify-center">
                            <AiOutlinePayCircle className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer"/>
                        </div>
                        <p className="text-center text-xs">Sell</p>
                    </Link>
                </li>
                <li className="px-2 py-4 hover:bg-light-gray-20 dark:hover:bg-dark-gray-50">
                    <Link to="/" className="flex flex-col justify-center gap-2">
                        <div className="flex justify-center">
                            <AiTwotoneBank className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer"/>
                        </div>
                        <p className="text-center text-xs">Auction</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}