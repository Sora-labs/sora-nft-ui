import { IPAD_SIZE } from "../../constants/deviceSizes";
import { useWindowSize } from "../../hooks/useWindowSize";
import { MobileSidebar, Sidebar } from "../Sidebar";
import CenterContent, { MobileCenterContent } from "./_CenterContent";
import LeftContent from "./_LeftContent";
import RightContent from "./_RightContent";

function Header() {
    const {width} = useWindowSize()
    return (
        <div className="w-full flex flex-row px-4 py-2 border-b border-light-gray-10 bg-light-gray-0 dark:bg-dark-gray-90 dark:border-dark-gray-70 justify-between items-center relative">
            <LeftContent></LeftContent>
            { width && width < IPAD_SIZE && <span className=""></span> }
            { width && width < IPAD_SIZE && <span className=""></span> }
            <CenterContent></CenterContent>
            <MobileCenterContent></MobileCenterContent>
            <RightContent></RightContent>
            { width && width > IPAD_SIZE && <Sidebar></Sidebar>}
            { width && width < IPAD_SIZE && <MobileSidebar></MobileSidebar> }
        </div>
    );
}

export default Header;