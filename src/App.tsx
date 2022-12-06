import "./global.css";
import Header from "./components/Header";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Activity from "pages/Activity";
import ScrollToTop from "services/ScrollToTop";
import CreateCollection from "pages/CreateCollection";
import ChooseSellingType from "pages/ChooseSellingType";
import NotFound from "pages/404";
import ValidateProfile from "routes/ValidateProfile";
import ValidateNFT from "routes/ValidateNFT";
import CreateNFT from "pages/CreateNFT";

function App() {
  return (
    <div className="w-full min-h-screen bg-light-gray-10 text-black dark:bg-dark-gray-100 dark:text-white font-montserrat mb-16 sm:mb-0">
      <Router>
        <Header></Header>
        <div
          className="w-full overflow-x-hidden box-border relative sm:pl-18"
          aria-label="body-wrapper"
        >
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} caseSensitive={true}></Route>
              <Route path="/activity" element={<Activity />}></Route>
              <Route path="/balance" />
              <Route path="/explore" />
              <Route path="/auction" />
              <Route path="/create" element={<ChooseSellingType />} />
              <Route path="/create/nft" element={<CreateNFT />} />
              <Route
                path="/create/collection"
                caseSensitive={true}
                element={<CreateCollection />}
              />
              <Route path="/:profileId/:nftId" element={<ValidateNFT />} />
              <Route path="/:profileId" element={<ValidateProfile />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </ScrollToTop>
        </div>
      </Router>
    </div>
  );
}

export default App;
