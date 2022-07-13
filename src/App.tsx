import "./global.css"
import Header from './components/Header';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import NFTPage from "pages/NFTPage";
import Activity from "pages/Activity";
import ScrollToTop from "services/ScrollToTop";
import CreateCollection from "pages/CreateCollection";
import ChooseSellingType from "pages/ChooseSellingType";
import ArtistProfile from "pages/ArtistProfile";
import NotFound from "pages/404";

function App() {
  return (
    <div className="w-full min-h-screen bg-light-gray-10 text-black dark:bg-dark-gray-100 dark:text-white font-montserrat">
      <Router>
        <Header></Header>
        <div className="w-full overflow-x-hidden box-border relative sm:pl-18" aria-label="body-wrapper">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={ <Home/> } caseSensitive={true}></Route>
            <Route path="/activity" element={ <Activity/> }></Route>
            <Route path="/balance" ></Route>
            <Route path="/buy" ></Route>
            <Route path="/auction"></Route>
            <Route path="/@profile/:nft_id" element={ <NFTPage/> }/>
            <Route path="/create" element={ <ChooseSellingType/> }/>
            <Route path="/create/nft"></Route>
            <Route path="/create/collection" caseSensitive={true} element={ <CreateCollection/> }/>
            <Route path="/@profile" element={ <ArtistProfile/> }/>
            <Route path="/*" element={<NotFound/>} />
          </Routes>
        </ScrollToTop>
        </div>
      </Router>
    </div>
  );
}

export default App;
