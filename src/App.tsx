import React from 'react';
import "./global.css"
import { useTranslation } from "react-i18next"
import i18next from 'i18next';
import Header from './components/Header';

function App() {
  const { t, i18n } = useTranslation()
  const handleChangeLanguage = () => {
    i18next.changeLanguage(localStorage['i18nextLng'] === 'en' ? 'jp' : 'en')
  }

  return (
    <div className="w-screen h-screen bg-dark-gray-100 text-white font-montserrat">
      <Header></Header>
      { t('welcome to nft-marketplace') }
      <button onClick={handleChangeLanguage}>Change lang</button>
    </div>
  );
}

export default App;
