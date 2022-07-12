import { useTranslation } from "react-i18next";
import { AiFillCopy, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

function ChooseSellingType() {
    const { t } = useTranslation()

    return (
        <div className="w-full h-full bg-light-gray-10 p-8">
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8">
                <Link to="/create/nft" className="w-full md:w-1/2 flex flex-col items-center bg-white dark:bg-transparent p-16 gap-8 cursor-pointer relative shadow-md rounded-md hover:-translate-y-1 hover:shadow-xl before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-canvas-grid before:bg-center before:bg-16">
                    <AiFillEdit className="w-10 h-10"/>
                    <div>{ t('create_one_nft') }</div>
                </Link>
                <Link to="/create/collection" className="w-full md:w-1/2 flex flex-col items-center bg-white dark:bg-transparent p-16 gap-8 cursor-pointer relative shadow-md rounded-md hover:-translate-y-1 hover:shadow-xl before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-canvas-grid before:bg-center before:bg-16">
                    <AiFillCopy className="w-10 h-10"/>
                    <div>{ t('create_a_collection') }</div>
                </Link>
            </div>
        </div>
    );
}

export default ChooseSellingType;