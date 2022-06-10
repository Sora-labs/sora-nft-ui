import React, { useContext, useEffect } from 'react';
import "./global.css"
import { useTranslation } from "react-i18next"
import i18next from 'i18next';
import Header from './components/Header';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { t, i18n } = useTranslation()
  const { dark } = useContext(ThemeContext)

  useEffect(() => {
    if(localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
}, [dark])

  const handleChangeLanguage = () => {
    i18next.changeLanguage(localStorage['i18nextLng'] === 'en' ? 'jp' : 'en')
  }

  return (
    <div className="w-screen h-screen bg-light-gray-0 text-black dark:bg-dark-gray-100 dark:text-white font-montserrat">
      <Header></Header>
      { t('welcome to nft-marketplace') }
      <button onClick={handleChangeLanguage}>Change lang</button>
    </div>
  );
}

export default App;
