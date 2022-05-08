import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Suspense fallback={<LoadingPage />}>
                <Routes>
                    <Route path="/ForumProjectFrontend/" element={<LandingPage />} />
                    <Route path="/ForumProjectFrontend/register" element={<RegisterPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>
);
