import StockHistory from "./top10companies.json";
import { useState, useEffect } from "react";
import Chart from "./Chart";
import "./index.scss";

export default function TopStocks({ }){
    return (
        <div className="page top-10">
            {
                Object.keys(StockHistory).map((name) => {
                    return (
                      <Chart key={ name } stockName={ name } stockData={ StockHistory[name] } />
                    )
                })
            }
        </div>
    )
}