import React from "react";
import Slider from "react-slick";
import "./style.css"

import Bandear from "../../images/Bandear-Pic.png"
import CreateRecipe from "../../images/Create-Recipe_pic.png"
import MealBudgeter from "../../images/Meal-Budgeter-Pic.png"
import EatDaBurger from "../../images/Eat-Burger.png"
import EmployeeDirectory from "../../images/Employee-Directory.png"
import Horiseon from "../../images/Horiseon-Pic.png"
import WeatherDashboard from "../../images/Weather-Dashboard-Pic.png"

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <div id="imageText">
                <h2> Samples of Some of My Past Works <br></br>
        ----------------------------------------
         </h2>

                <h4> Featured below are only a small portion of my assignments that I have completed <br></br>
        during my short coding career. Please feel free to browse through and view my creations. <br></br>
        You can view the deployed versions of these links as well as the GitHub repos by visiting the home page <br></br>
        by clicking the link in the header.
        </h4>
            </div>
            <Slider {...settings}>

                <div className="slider">
                    <img src={Bandear} />
                </div>
                <div className="slider">
                    <img src={CreateRecipe} />
                </div>
                <div className="slider">
                    <img src={MealBudgeter} />
                </div>
                <div className="slider">
                    <img src={EmployeeDirectory} />
                </div>
                <div className="slider">
                    <img src={EatDaBurger} />
                </div>
                <div className="slider">
                    <img src={Horiseon} />
                </div>
                <div className="slider">
                    <img src={WeatherDashboard} />
                </div>

            </Slider>
        </div>
    );
}