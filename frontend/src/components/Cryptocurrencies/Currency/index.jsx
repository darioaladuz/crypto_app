import "./index.scss";

export default function Currency({ number, currency }) {

    const formatPriceChange = percentage => {
        let positive = true;
        let fixedPercentage = percentage.toFixed(2);

        if(fixedPercentage < 0) {
            fixedPercentage = Math.abs(fixedPercentage);
            positive = false;
        }

        return <span className={positive ? "positive" : "negative"}>{fixedPercentage}%</span>
    }

    const formatUSPrice = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "USD"
    })

    const formatUSPriceNoZeros = new Intl.NumberFormat();

    return (
        <tr className="currency">
            <td><a href={`/cryptos/${currency.id}`}>{ number }</a></td>
            <td><div><img src={currency.image} className="currency__icon" /><span className="currency__name">{currency.name}</span><span className="currency__symbol">{currency.symbol.toUpperCase()}</span></div></td>
            <td>{ formatUSPrice.format(currency.current_price) }</td>
            <td>{
                currency.price_change_percentage_1h_in_currency ?
                formatPriceChange(currency.price_change_percentage_1h_in_currency) :
                "null"
                }</td>
            <td>{formatPriceChange(currency.price_change_percentage_24h_in_currency)}</td>
            <td>{formatPriceChange(currency.price_change_percentage_7d_in_currency)}</td>
            <td>${formatUSPriceNoZeros.format(currency.market_cap)}</td>
            <td>{formatUSPrice.format(currency.low_24h)}</td>
            <td>{formatUSPrice.format(currency.high_24h)}</td>
            <td>{formatUSPriceNoZeros.format(currency.circulating_supply)} {currency.symbol.toUpperCase()}</td>
        </tr>
    )
}