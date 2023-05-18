import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return (
        <div className="home__footer">
            <div className="home__footerInfo">
                <h1>Shop Now</h1>
                <p>Shop for the latest fashion trends</p>
                <Link to="/products">
                    <button className="home__footerButton">Shop Now</button>
                </Link>
            </div>
            {/* generate links for facebook social media */}
            <div className="home__footerSocial">
                <h1>Follow Us</h1>
                <div className="home__footerSocialLinks">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    {/* generate link for linkedin */}
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    {/* generate link for twitter */}
                    <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    {/* generate link for instagram */}
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>


        </div>
    )
}

export default Footer;