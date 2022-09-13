import { useEffect, useState } from "react";
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

export default function Chart({ stockName, stockData }){
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

    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = () => {
            function getEveryNth(obj, nth) {
                const arr = Object.values(obj).map(val => val);
                const result = [];
              
                for (let i = 0; i < arr.length; i += nth) {
                  result.push(arr[i]);
                }
              
                return result;
            }

            setChartData({
                labels: getEveryNth(stockData.Date, 7).map((date) => date),
                datasets: [
                  {
                    label: "Closing price",
                    data: getEveryNth(stockData.Close, 7).map((close) => close),
                    backgroundColor: [
                      // "#22a7f0"
                      "black"
                    ],
                    borderColor: "#99a0a9"
                  }
                ]
              });
              setLoading(false);
        }

        getData();
    }, [])

    return (
        <div className="company">
            <h2>{stockData.Name}</h2>
            {
                loading ? "Loading..." :
                <Line
                data={ chartData }
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: `${stockName} Stock History from 2017 to 2022`
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