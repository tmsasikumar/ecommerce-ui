import { Link } from "react-router-dom";
import './Header.css';
import { Fragment } from "react";
import Nav from "./Nav";

const Header = () => {
    return (
        <Fragment>
            <Nav />
            <div className="home__banner">
                <div className="home__bannerInfo">
                    <div className="home__title">Shop Now</div>
                    <div className="home__message">Shop for the latest fashion trends</div>
                    <Link to="/products">
                        <button className="home__bannerButton">Shop Now</button>
                    </Link>
                </div>

                <div className="home__offers">
                    <div className="home__offer">FLAT 50%</div>
                    <div className="home__offer">BUY 1, GET 2</div>
                </div>
            </div>
        </Fragment>

    )
}

export default Header;