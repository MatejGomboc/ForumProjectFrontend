import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import AuthService from "../services/AuthService";
import "./Page.scss";
import "./RegisterPage.scss";

const RegisterPage = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    const handleSubmit = (event) => {
        AuthService.register(username, email, password, passwordRepeat).then(
            (value) => {
                alert("value: " + value);
            },
            (reason) => {
                alert("reason: " + reason);
            }
        );

        event.preventDefault();
    };

    return (
        <main className="RegisterPage">
            <form className="RegisterPage" onSubmit={handleSubmit}>
                <label htmlFor="username" className="RegisterPage">
                    Username:
                </label>
                <FormInput
                    name="username"
                    className="RegisterPage"
                    type="text"
                    onChange={setUsername}
                />

                <label htmlFor="email" className="RegisterPage">
                    Email:
                </label>
                <FormInput
                    name="email"
                    className="RegisterPage"
                    type="text"
                    onChange={setEmail}
                />

                <label htmlFor="password" className="RegisterPage">
                    Password:
                </label>
                <FormInput
                    name="password"
                    className="RegisterPage"
                    type="password"
                    onChange={setPassword}
                />

                <label htmlFor="passwordRepeat" className="RegisterPage">
                    Repeat password:
                </label>
                <FormInput
                    name="passwordRepeat"
                    className="RegisterPage"
                    type="password"
                    onChange={setPasswordRepeat}
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
