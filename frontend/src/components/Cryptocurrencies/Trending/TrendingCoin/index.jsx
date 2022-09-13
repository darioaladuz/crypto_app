import { useState, useEffect } from "react";
import "./index.scss";

export default function TrendingCoin({ number, coin, coins }){

    const [coinData, setCoinData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log({ coin });
        console.log({ coins });
        const coinDataFind = coins.find(coinMatch => coinMatch.id === coin.item.id);
        setCoinData(coinDataFind);
        console.log({coinDataFind});
        setLoading(false);
    }, [])

    useEffect(() => {
        console.log({coinData});
        console.log(coin);
    }, [coinData])

    return (
        <div className="coin">
            <span>{number}</span>
            <span> </span>
            <img style={{width: "24px"}} src={coin.item.large} alt="" />
            <span>{coin.item.name}</span>
            <span className="currency__symbol">{coin.item.symbol}</span>
        </div>
    )
}