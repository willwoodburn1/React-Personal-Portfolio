import React from "react";
import "./style.css"

function DeployedApps() {
    return (
        <div>
            <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Deployed Application </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href="https://chrisjmckeown.github.io/BandEaR_Discover_live_artists/" target="_blank">Bandear</a></li>
                    <li><a className="dropdown-item" href="https://vast-crag-85624.herokuapp.com/" target="_blank"> Meal Budgeter </a></li>
                    <li><a className="dropdown-item" href="https://serene-ridge-61562.herokuapp.com/" target="_blank">React Employee Directory</a></li>
                    <li><a className="dropdown-item" href="https://agile-badlands-15879.herokuapp.com/" target="_blank">Eat The Burger </a></li>
                    <li><a className="dropdown-item" href="https://willwoodburn1.github.io/Week3-Homework" target="_blank">Random Password Generator</a></li>
                    <li><a className="dropdown-item" href="https://willwoodburn1.github.io/Week6-Homework" target="_blank">API Weather Forecast</a></li>
                </ul>
            </div>

        </div>
    )
}
export default DeployedApps