import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductsPage from "../pages/ProductsPage";
import FullProductPage from "../components/FullProductPage";
import RegistrationPage from "../pages/RegistrationPage";

const MyRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<FullProductPage />} />
            </Routes>
        </div>
    );
};

export default MyRoutes;
