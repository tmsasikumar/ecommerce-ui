// create a home page component for a ecommerce app
// create a banner with a background image and a button with proper styling
// create a footer with proper styling

import React, { Fragment } from "react";
import Header from "./components/Header";
// import "./Home.css";
import Footer from "./components/Footer";

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Footer />
        </Fragment>
    );
};


export default Home;