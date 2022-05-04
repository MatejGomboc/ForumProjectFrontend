import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Page.scss";
import "./RegisterPage.scss";

const RegisterPage = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    const handleSubmit = (event) => {
        // todo
        event.preventDefault();
    };

    return (
        <main className="RegisterPage">
            <form className="RegisterPage" onSubmit={handleSubmit}>
                <label htmlFor="username" className="RegisterPage">
                    Username:
                </label>
                <input
                    id="username"
                    className="RegisterPage"
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />

                <label htmlFor="email" className="RegisterPage">
                    Email:
                </label>
                <input
                    id="email"
                    className="RegisterPage"
                    type="text"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <label htmlFor="password" className="RegisterPage">
                    Password:
                </label>
                <input
                    id="password"
                    className="RegisterPage"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <label htmlFor="passwordRepeat" className="RegisterPage">
                    Repeat password:
                </label>
                <input
                    id="passwordRepeat"
                    className="RegisterPage"
                    type="password"
                    value={passwordRepeat}
                    onChange={(event) => setPasswordRepeat(event.target.value)}
                />

                <input type="submit" className="RegisterPage" value="REGISTER" />

                <button className="RegisterPage" onClick={() => navigate("/")}>
                    GO BACK
                </button>
            </form>
        </main>
    );
};

export default RegisterPage;
