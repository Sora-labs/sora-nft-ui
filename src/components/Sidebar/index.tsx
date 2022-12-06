import {
  AiFillCompass,
  AiOutlineHome,
  AiFillHome,
  AiFillPayCircle,
  AiFillBank,
  AiOutlineBank,
  AiOutlineCompass,
  AiOutlineMenu,
  AiOutlinePayCircle,
} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useChangeRoute from "hooks/useChangeRoute";

export const MobileSidebar = () => {
  const { home, explore, create, auction } = useChangeRoute();

  return (
    <>
      <div className="fixed z-50 bottom-0 right-0 left-0">
        <div className="bg-light-gray-0 dark:bg-dark-gray-90 px-8">
          <ul className="flex items-center justify-between gap-6">
            <li className="px-2 py-5">
              <Link to="/" className="flex items-center gap-4">
                <div className="flex justify-center">
                  {!home && (
                    <AiOutlineHome className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer" />
                  )}
                  {home && (
                    <AiFillHome className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer" />
                  )}
                </div>
              </Link>
            </li>
            <li className="px-2 py-4">
              <Link to="/explore" className="flex items-center gap-4">
                <div className="flex justify-center">
                  {!explore && (
                    <AiOutlineCompass className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer" />
                  )}
                  {explore && (
                    <AiFillCompass className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer" />
                  )}
                </div>
              </Link>
            </li>
            <li className="px-2 py-4">
              <Link to="/create" className="flex items-center gap-4">
                <div className="flex justify-center">
                  {!create && (
                    <AiOutlinePayCircle className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer" />
                  )}
                  {create && (
                    <AiFillPayCircle className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer" />
                  )}
                </div>
              </Link>
            </li>
            <li className="px-2 py-4">
              <Link to="/auction" className="flex items-center gap-4">
                <div className="flex justify-center">
                  {!auction && (
                    <AiOutlineBank className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer" />
                  )}
                  {auction && (
                    <AiFillBank className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer" />
                  )}
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export const Sidebar = () => {
  const { t } = useTranslation();
  const { home, explore, create, auction } = useChangeRoute();

  return (
    <div className="fixed top-0 left-0 bottom-0 z-10 bg-light-gray-0 dark:bg-dark-gray-90 flex flex-col gap-2">
      <div className="flex justify-center px-6 py-4">
        <AiOutlineMenu className="w-6 h-6 text-dark-gray-100 dark:text-dark-gray-30 cursor-pointer"></AiOutlineMenu>
      </div>
      <ul className="flex flex-col">
        <li className="px-2 py-4 hover:bg-light-gray-20 dark:hover:bg-dark-gray-80">
          <Link to="/" className="flex flex-col justify-center gap-2">
            <div className="flex justify-center">
              {!home && (
                <AiOutlineHome className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer" />
              )}
              {home && (
                <AiFillHome className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer" />
              )}
            </div>
            <p className={`text-center text-xs ${home ? "font-bold" : ""}`}>
              {t("home")}
            </p>
          </Link>
        </li>
        <li className="px-2 py-4 hover:bg-light-gray-20 dark:hover:bg-dark-gray-80">
          <Link to="/explore" className="flex flex-col justify-center gap-2">
            <div className="flex justify-center">
              {!explore && (
                <AiOutlineCompass className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer" />
              )}
              {explore && (
                <AiFillCompass className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer" />
              )}
            </div>
            <p className={`text-center text-xs ${explore ? "font-bold" : ""}`}>
              {t("explore")}
            </p>
          </Link>
        </li>
        <li className="px-2 py-4 hover:bg-light-gray-20 dark:hover:bg-dark-gray-80">
          <Link to="/create" className="flex flex-col justify-center gap-2">
            <div className="flex justify-center">
              {!create && (
                <AiOutlinePayCircle className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer" />
              )}
              {create && (
                <AiFillPayCircle className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer" />
              )}
            </div>
            <p className={`text-center text-xs ${create ? "font-bold" : ""}`}>
              {t("sell")}
            </p>
          </Link>
        </li>
        <li className="px-2 py-4 hover:bg-light-gray-20 dark:hover:bg-dark-gray-80">
          <Link to="/auction" className="flex flex-col justify-center gap-2">
            <div className="flex justify-center">
              {!auction && (
                <AiOutlineBank className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer" />
              )}
              {auction && (
                <AiFillBank className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer" />
              )}
            </div>
            <p className={`text-center text-xs ${auction ? "font-bold" : ""}`}>
              {t("auction")}
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};
