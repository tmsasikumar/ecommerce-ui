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
                    <h1>Shop Now</h1>
                    <p>Shop for the latest fashion trends</p>
                    <Link to="/products">
                        <button className="home__bannerButton">Shop Now</button>
                    </Link>
                </div>
            </div>
        </Fragment>

    )
}

export default Header;