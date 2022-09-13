import { Routes, Route } from "react-router-dom";
// import components
import Home from "./components/Home/index.jsx";
import TopStocks from "./components/TopCompanies/index.jsx";
// styling
import "./App.scss";
import Header from "./components/Header/index.jsx";
import Cryptocurrencies from "./components/Cryptocurrencies/index.jsx";
import Cryptocurrency from "./components/Cryptocurrency/index.jsx";

export default function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<Cryptocurrencies />} />
                <Route path="/top-10" element={<TopStocks />} />
                <Route path="cryptos/:id" element={<Cryptocurrency />} />
            </Routes>
        </div>
    )
}