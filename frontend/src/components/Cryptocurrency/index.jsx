import { useParams } from "react-router-dom";

export default function Cryptocurrency() {
    const {id} = useParams();

    return (
        <div className="cryptocurrency">
            <h1>{id}</h1>
        </div>
    )
}