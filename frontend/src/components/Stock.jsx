import StockHistory from "../data/stockhistory.json";
import { useState, useEffect } from "react";
import Chart from "./Chart";

export default function Stock({ }){
    return (
        <div>
            {/* <h2>{stockData.Name}</h2> */}

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