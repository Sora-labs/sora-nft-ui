import React, { useContext, useEffect } from 'react';
import "./global.css"
import { useTranslation } from "react-i18next"
import i18next from 'i18next';
import Header from './components/Header';
import { ThemeContext } from './context/ThemeContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const { t, i18n } = useTranslation()
  const { dark } = useContext(ThemeContext)

  useEffect(() => {
    if(localStorage.getItem("dark")) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
}, [dark])

  const handleChangeLanguage = () => {
    i18next.changeLanguage(localStorage['i18nextLng'] === 'en' ? 'jp' : 'en')
  }

  return (
    <div className="w-screen h-screen bg-light-gray-10 text-black font-montserrat">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/settings"></Route>
        </Routes>
        <Routes>
          <Route path="/activity"></Route>
        </Routes>
        <Routes>
          <Route path="/balance" ></Route>
        </Routes>
        <Routes>
          <Route path="/buy" ></Route>
        </Routes>
        <Routes>
          <Route path="/sell" ></Route>
        </Routes>
        <div className="" style={{marginLeft: "72px"}} aria-label="body-wrapper">
          { t('welcome to nft-marketplace') }
          <button onClick={handleChangeLanguage}>Change lang</button>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
