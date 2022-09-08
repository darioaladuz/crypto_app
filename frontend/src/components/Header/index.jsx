import { NavLink } from "react-router-dom";
import "./index.scss";

export default function Header(){
    return (
        <header>
            <h1>STOCKS</h1>

            <nav>
                {/* <NavLink exact="true" activeclassname="active" className="navlink home-link" to="/">
                    Home
                </NavLink> */}
                
                <NavLink activeclassname="active" className="navlink home-link" to="/">
                    Cryptocurrencies
                </NavLink>

                <NavLink activeclassname="active" className="navlink home-link" to="/top-10">
                    TOP 10 Companies History
                </NavLink>

               
            </nav>
        </header>
    )
}