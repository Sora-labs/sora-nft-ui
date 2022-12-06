import React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineSearch } from "react-icons/ai";

export const Searchbar = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full relative flex flex-row items-center border border-light-gray-30 dark:border-dark-gray-70">
      <div className="w-full">
        <input
          type="text"
          className="w-full bg-transparent focus:outline-none px-3 py-2"
          placeholder={t("search")}
        />
      </div>
      <button className="w-20 px-4 py-3 flex justify-center bg-light-gray-20 dark:bg-dark-gray-80">
        <AiOutlineSearch className="w-full text-lg"></AiOutlineSearch>
      </button>
    </div>
  );
};

export const MobileSearchbar = () => {
  const { t } = useTranslation();

  return (
    <div className="w-10/12 flex flex-row items-center">
      <div className="w-full">
        <input
          autoFocus
          type="text"
          className="w-full text-light-gray-100 dark:text-white bg-transparent border-b border-light-gray-90 dark:border-dark-gray-80 focus:outline-none focus:border-b focus:border-light-gray-100 dark:focus:border-white"
          placeholder={t("search")}
        />
      </div>
      <button className="w-12 px-2 py-1 flex justify-center">
        <AiOutlineSearch className="w-full"></AiOutlineSearch>
      </button>
    </div>
  );
};
