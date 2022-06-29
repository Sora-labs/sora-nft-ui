import "./global.css"
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import NFTPage from "pages/NFTPage";
import Activity from "pages/Activity";

function App() {
  return (
    <div className="w-full bg-light-gray-10 text-black dark:bg-dark-gray-100 dark:text-white font-montserrat">
      <BrowserRouter>
        <Header></Header>
        <div className="w-full overflow-x-hidden box-border sm:pl-18" aria-label="body-wrapper">
          <Routes>
            <Route path="/" element={ <Home/> } caseSensitive={true}></Route>
            <Route path="/activity" element={ <Activity/> }></Route>
            <Route path="/balance" ></Route>
            <Route path="/buy" ></Route>
            <Route path="/sell" ></Route>
            <Route path="/auction"></Route>
            <Route path="/:nft_id" element={ <NFTPage/> }></Route>
          </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
