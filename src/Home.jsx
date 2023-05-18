// create a home page component for a ecommerce app
// create a banner with a background image and a button with proper styling
// create a footer with proper styling

import React from "react";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Home = () => {
    return (
        <div style={{overflowX: "hidden"}}>
            <Header />
            <Category />
            <Footer />
        </div>
    );
};


export default Home;