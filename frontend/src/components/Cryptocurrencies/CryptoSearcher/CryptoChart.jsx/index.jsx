import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
} from 'chart.js';
import "./index.scss";

export default function CryptoChart({ currentCoin }) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        BarElement
    );

    const [coinData, setCoinData] = useState([]);
    const [coinChartData, setCoinChartData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            function getEveryNth(obj, nth) {
                const arr = Object.values(obj).map(val => val);
                const result = [];
              
                for (let i = 0; i < arr.length; i += nth) {
                  result.push(arr[i]);
                }
              
                return result;
            }

            function timeConverter(UNIX_timestamp){
                const a = new Date(UNIX_timestamp);
                const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                const year = a.getFullYear();
                const month = months[a.getMonth()];
                const date = a.getDate();
                const time = date + ' ' + month + ' ' + year;
                return time;
              }
              console.log(timeConverter(0));

            const getCoinData = async () => {
                const today = Math.round(Date.now() / 1000);
                const lastYear = Math.round((new Date(new Date().setFullYear(new Date().getFullYear() - 1)).valueOf()) / 1000);
                console.log({ today });
                console.log({ lastYear });
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${ currentCoin.id }/market_chart/range?vs_currency=usd&from=${lastYear}&to=${today}`);
                setCoinData(response.data);
                setCoinChartData({
                    labels: getEveryNth(response.data.prices, 7).map((price) => timeConverter(price[0])),
                    datasets: [
                      {
                        label: "Closing price",
                        data: getEveryNth(response.data.prices, 7).map((price) => price[1]),
                        backgroundColor: [
                          // "#22a7f0"
                          "black"
                        ],
                        borderColor: "#547aa9",
                        pointRadius: 0
                      }
                    ]
                  });
              setLoading(false);

            }

            getCoinData();
        }

        getData();
    }, [currentCoin])

    useEffect(() => {
        console.log({year: coinData});
    }, [coinData])

    return (
        <div className="cryptochart">
            {
                loading ? "Loading..." :
                <Line
                data={ coinChartData }
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: currentCoin.name
                        },
                        legend: {
                            display: false
                            // position: "bottom"
                        }
                    },
                    scales: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            display: false
                        }
                    }
                }}
            /> 
            }
        </div>
    )
}