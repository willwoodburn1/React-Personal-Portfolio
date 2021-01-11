import React from "react";
import "./style.css"

function Repo() {
    return (
        <div>
            <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    GitHub Repo Links </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href="https://github.com/chrisjmckeown/BandEaR_Discover_live_artists" target="_blank">Bandear Repo</a></li>
                    <li><a className="dropdown-item" href="https://github.com/willwoodburn1/Group-Project-2" target="_blank"> Meal Budgeter Repo </a></li>
                    <li><a className="dropdown-item" href="https://github.com/willwoodburn1/React-Employee-Directory" target="_blank">React Employee Directory Repo </a></li>
                    <li><a className="dropdown-item" href="https://github.com/willwoodburn1/eatDatBurger" target="_blank">Eat The Burger Repo </a></li>
                    <li><a className="dropdown-item" href="https://github.com/willwoodburn1/Week3-Homework" target="_blank">Random Password Generator Repo </a></li>
                    <li><a className="dropdown-item" href="https://github.com/willwoodburn1/Week6-Homework" target="_blank">API Weather Forecast Repo </a></li>
                </ul>
            </div>

        </div>
    )
}
export default Repo;