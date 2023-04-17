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

const menuItems = [
  {
    id: "home",
    name: "Home",
    href: "/",
    elements: {
      active: (
        <AiFillHome className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer" />
      ),
      nonActive: (
        <AiOutlineHome className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer" />
      ),
    },
  },
  {
    id: "explore",
    name: "Explore",
    href: "/explore",
    elements: {
      active: (
        <AiFillCompass className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer" />
      ),
      nonActive: (
        <AiOutlineCompass className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer" />
      ),
    },
  },
  {
    id: "create",
    name: "Create",
    href: "/create",
    elements: {
      active: (
        <AiFillPayCircle className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer" />
      ),
      nonActive: (
        <AiOutlinePayCircle className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer" />
      ),
    },
  },
  {
    id: "auction",
    name: "Auction",
    href: "/auction",
    elements: {
      active: (
        <AiFillBank className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer" />
      ),
      nonActive: (
        <AiOutlineBank className="w-6 h-6 text-dark-gray-100 dark:text-white cursor-pointer" />
      ),
    },
  },
];

export const MobileSidebar = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <>
      <div className="fixed z-50 bottom-0 right-0 left-0">
        <div className="bg-light-gray-0 dark:bg-dark-gray-90 px-8">
          <ul className="flex items-center justify-between gap-6">
            {menuItems.map((item) => {
              return (
                <li key={item.id} className="px-2 py-4">
                  <Link
                    to={item.href}
                    className="flex flex-col justify-center gap-2"
                  >
                    <div className="flex justify-center">
                      {item.href === pathname
                        ? item.elements.active
                        : item.elements.nonActive}
                    </div>
                    <p
                      className={`text-center text-xs ${
                        item.href === pathname ? "font-bold" : ""
                      }`}
                    >
                      {t(`${item.id}`)}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export const Sidebar = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <div className="fixed top-0 left-0 bottom-0 z-10 bg-light-gray-0 dark:bg-dark-gray-90 flex flex-col gap-2">
      <div className="flex justify-center px-6 py-4">
        <AiOutlineMenu className="w-6 h-6 text-dark-gray-100 dark:text-dark-gray-30 cursor-pointer"></AiOutlineMenu>
      </div>
      <ul className="flex flex-col">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              className="px-2 py-4 hover:bg-light-gray-20 dark:hover:bg-dark-gray-80"
            >
              <Link
                to={item.href}
                className="flex flex-col justify-center gap-2"
              >
                <div className="flex justify-center">
                  {item.href === pathname
                    ? item.elements.active
                    : item.elements.nonActive}
                </div>
                <p
                  className={`text-center text-xs ${
                    item.href === pathname ? "font-bold" : ""
                  }`}
                >
                  {t(`${item.id}`)}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
