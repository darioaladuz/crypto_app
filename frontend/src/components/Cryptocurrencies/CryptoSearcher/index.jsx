import { useState, useEffect } from "react";
import CryptoChart from "./CryptoChart.jsx";
import "./index.scss";

export default function CryptoSearcher({ coins }){

    const [filteredCoins, setFilteredCoins] = useState([]);
    const [currentCoin, setCurrentCoin] = useState(coins[0]);
    const [search, setSearch] = useState("");

    const filterCoins = searchParams => {
        if(searchParams === ""){
            setFilteredCoins([]);
            console.log("empty");
        } else {
            setFilteredCoins(coins.filter(coin => coin.name.toLowerCase().includes(searchParams.toLowerCase())));
        }
        setSearch(searchParams);
    }

    const updateCurrentCoin = (id) => {
        console.log("searching...");
        console.log(id);
        const coin = coins.find(coin => coin.id === id);
        setCurrentCoin(coin);
        setSearch("");
        setFilteredCoins([]);
    }

    useEffect(() => {
        console.log({currentCoin});
    }, [currentCoin])

    return (
        <div className="cryptosearcher">
            <div className="coin-info">
                <div>
                    <img src={ currentCoin.image } alt="" />
                    <h2>{ currentCoin.name }</h2>
                </div>
            </div>
            
            <div className="search-bar">
                <input placeholder="Search coin..." value={ search } onChange={(e) => filterCoins(e.target.value)} type="text" />

                {
                        filteredCoins.length > 0
                            ? <ul className="filtered-coins">
                            {
                                filteredCoins.map(coin => {
                                    return <li key={ coin.id } onClick={() => updateCurrentCoin(coin.id)}><img src={ coin.image } alt="" /><span>{ coin.name }</span><span className="currency__symbol">{ coin.symbol.toUpperCase() }</span></li>
                                })
                            }
                            </ul>
                            : ""
                    }
            </div>

            

            <CryptoChart coins={ coins } currentCoin={ currentCoin } />
        </div>
    )
}