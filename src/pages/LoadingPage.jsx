import React from "react";
import "./Page.scss";
import "./LoadingPage.scss";
import LoaderSpinner from "../images/loader_spinner.png";

const LoadingPage = () => {
    return(
        <main className="LoadingPage">
            <img src={LoaderSpinner} className="LoadingPage" alt="LoaderSpinner" width="100" height="100" />
        </main>
    );
}

export default LoadingPage;
