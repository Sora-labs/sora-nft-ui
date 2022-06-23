import "./global.css"
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";

function App() {
  return (
    <div className="w-screen h-screen bg-light-gray-10 text-black dark:bg-dark-gray-100 dark:text-white font-montserrat">
      <BrowserRouter>
        <Header></Header>
        <div className="sm:ml-18" aria-label="body-wrapper">
          <Routes>
            <Route path="/" element={ <Home/> } caseSensitive={true}>
              <Route path="/settings"></Route>
              <Route path="/activity"></Route>
              <Route path="/balance" ></Route>
              <Route path="/buy" ></Route>
              <Route path="/sell" ></Route>
              <Route path="/auction"></Route>
            </Route>
          </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
