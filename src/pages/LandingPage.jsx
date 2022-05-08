import React from "react";
import { useNavigate } from "react-router-dom";
import "./Page.scss";
import "./LandingPage.scss";

const LandingPage = () => {
    const navigate = useNavigate();

    return(
        <main className="LandingPage">
            <nav className="LandingPage">
                <h1 className="LandingPage">
                    Hello!
                </h1>
                <button
                    className="LandingPage"
                    onClick={() => navigate("/ForumProjectFrontend/register")}
                >
                    REGISTER
                </button>
                <button
                    className="LandingPage"
                    onClick={() => navigate("/ForumProjectFrontend/login")}
                >
                    LOGIN
                </button>
            </nav>
        </main>
    );
}

export default LandingPage;
