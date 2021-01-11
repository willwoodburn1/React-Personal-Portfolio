import React from "react";
import "./style.css"
import Bandear from "../../images/Bandear-Pic.png"
import CreateRecipe from "../../images/Create-Recipe_pic.png"
import MealBudgeter from "../../images/Meal-Budgeter-Pic.png"
import DayPlanner from "../../images/Day-Planner-Pic.png"
import WeatherDashboard from "../../images/Weather-Dashboard-Pic.png"


function ImageCarousel() {
    return (

        <div id="carouselBack">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Bandear} className="d-block w-100" alt="Bandear" />
                    </div>
                    <div className="carousel-item">
                        <img src={CreateRecipe} className="d-block w-100" alt="Create Recipe" />
                    </div>
                    <div className="carousel-item">
                        <img src={MealBudgeter} className="d-block w-100" alt="Meal Budgeter" />
                    </div>
                    <div className="carousel-item">
                        <img src={DayPlanner} className="d-block w-100" alt="Day Planner" />
                    </div>
                    <div className="carousel-item">
                        <img src={WeatherDashboard} className="d-block w-100" alt="Weather Dashboard" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>











    )
}
export default ImageCarousel;