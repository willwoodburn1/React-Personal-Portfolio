import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function Header() {
    return (

        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" id="myNameHead" to="/">
                William Woodburn
            </Link>
            <div>

                <Link
                    to="/"
                    id="homeLink"
                    className={window.location.pathname === "/"}>
                    Title Page

                 </Link>

                <Link
                    to="/images"
                    id="imagesLink"
                    className={window.location.pathname === "/images"}>
                    Project Images
                 </Link>

                <span id="topRightLinks">
                    <a href="https://github.com/willwoodburn1" target="_blank">
                        GitHub |
                    </a>
                    <a href="https://docs.google.com/document/d/1rrSigmS1L3b9DjIdhhbyNW-8J9H3i7aVheaojtA96hM/edit?usp=sharing" target="_blank">
                        | Resume |
                    </a>
                    <a href="https://www.linkedin.com/in/will-woodburn-bb656b1ab" target="_blank">
                        | Linkedin
                    </a>

                </span>






            </div>




        </nav >

    )
}
export default Header;