import { useState, useEffect } from "react";
import axios from "axios";
import Currency from "./Currency";
import Trending from "./Trending";
import "./index.scss";
import CryptoSearcher from "./CryptoSearcher/index.jsx";

export default function Cryptocurrencies(){

    const [coinsList, setCoinsList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d')
                setCoinsList(response.data);
                setLoading(false);
            } catch(err) {
                alert("There was an error.");
            }
        }

        fetchCoins();
    }, []);

    useEffect(() => {
        console.log(coinsList);
    }, [coinsList]);

    return (
        <div className="page cryptocurrencies">
            <div className="ccd">
                {
                    loading ? "Loading..." :
                    <>
                    <Trending coins={ coinsList } />
                    <CryptoSearcher coins={ coinsList } />
                    </>
                }
            </div>
            <p style={{ fontSize: ".75rem", marginBottom: "8px" }}>Powered by <a target="_blank" href="https://www.coingecko.com/en/api">CoinGecko API</a></p>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>1h%</th>
                        <th>24h%</th>
                        <th>7d%</th>
                        <th>Market Cap</th>
                        <th>Low (24h)</th>
                        <th>High (24h)</th>
                        <th>Circulating Supply</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        coinsList.map((currency, i) => {
                            return <Currency key={i} number={i + 1} currency={ currency } />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}