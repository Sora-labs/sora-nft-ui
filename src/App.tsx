import "./global.css"
import { useTranslation } from "react-i18next"
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const { t } = useTranslation()

  return (
    <div className="w-screen h-screen bg-light-gray-10 text-black dark:bg-dark-gray-100 dark:text-white font-montserrat">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/"></Route>
        </Routes>
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
        <Routes>
          <Route path="/auction"></Route>
        </Routes>
        <div className="md:ml-18" aria-label="body-wrapper">
          { t('welcome_to_nft_marketplace') }
          {/* <button onClick={handleChangeLanguage}>Change lang</button> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
