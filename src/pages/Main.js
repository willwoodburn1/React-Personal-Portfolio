import React from "react";
import "./main.css"
import ContactInfo from "../components/ContactInfo"
import BrandStatement from "../components/BrandStatement"
import DeployedApps from "../components/DeployedApps";
import Repo from "../components/Repo"
import Selfie from "../images/selfie.png"


function Main() {
    return (
        <div>

            <BrandStatement />

            <div className="selfie">
                <img src={Selfie} />
                <ContactInfo />
            </div>

            <div id="dropdownButtons">
                <h4 id="dropdownTitle"> Links to Deployed Applications<br></br>
                and GitHub Repos </h4>
                <span id="linksToApps">
                    <DeployedApps />
                    <Repo />
                </span>

            </div>







        </div >
    )
}
export default Main;