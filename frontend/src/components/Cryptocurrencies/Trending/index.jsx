import axios from "axios";
import { useState, useEffect } from "react";
import "./index.scss";
import TrendingCoin from "./TrendingCoin";

export default function Trending({ coins }) {
    const [trendingCoins, setTrendingCoins] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrending = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/search/trending')
                setTrendingCoins(response.data);
                setLoading(false);
            } catch(err) {
                alert("There was an error");
                setLoading(false);
            }
        }

        fetchTrending();
    }, [])

    useEffect(() => {
        console.log(trendingCoins.coins);
    },[trendingCoins])

    return (
        <div className="trending">
            <h2>Trending coins</h2>
            {
                loading ? "Loading..." :
                trendingCoins.coins.map((coin, i) => {
                    return (
                        <TrendingCoin key={ i } number={ i + 1 } coin={ coin } coins={ coins } />
                    )
                })
            }
        </div>
    )
}