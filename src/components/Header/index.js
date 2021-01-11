import React from "react";
import "./style.css"

function Header() {
    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">William Woodburn</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active ">
                        <a className="nav-link" href="https://github.com/willwoodburn1" target="_blank">GitHub
                    </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link"
                            href="https://docs.google.com/document/d/1rrSigmS1L3b9DjIdhhbyNW-8J9H3i7aVheaojtA96hM/edit?usp=sharing"
                            target="_blank">Resume
                    </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="https://www.linkedin.com/in/will-woodburn-bb656b1ab"
                            target="_blank">Linkedin
                    </a>
                    </li>

                </ul>
            </div>
        </nav>
    )
}
export default Header;