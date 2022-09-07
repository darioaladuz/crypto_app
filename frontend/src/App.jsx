import Stock from "./components/Stock";
import "./App.scss";

export default function App() {
    return (
        <div>
            <h1>Stock price history Top 10 Companies</h1>

            <div className="companies">
                <Stock />
            </div>
        </div>
    )
}