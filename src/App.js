import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourite from "./components/AddFavourite";
import Favourites from "./components/RemoveFavourite";
import FavouriteIndicator from "./components/FavouritesIndicator";

function App() {
  return (
    <BrowserRouter> 
    <FavouriteIndicator></FavouriteIndicator>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favourite" element={<Favourites/>} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;