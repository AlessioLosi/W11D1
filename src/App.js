import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavouriteIndex from "./components/FavouriteIndex";
import Favourite from "./components/Favourite";

function App() {
  return (
    <BrowserRouter> 
    <FavouriteIndex/>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/:favourite" element={<Favourite/>} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
