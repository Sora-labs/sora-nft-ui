import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../Logo";

const LeftContent = () => {
  return (
    <div className="flex flex-row items-center px-4 sm:px-0">
      <div className="px-4 hidden sm:inline-block">
        <AiOutlineMenu className="w-6 h-6 text-light-gray-100 dark:text-dark-gray-30 cursor-pointer"></AiOutlineMenu>
      </div>
      <Logo></Logo>
    </div>
  );
};

export default LeftContent;
