import React from "react";
import { Header, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import FacebookIcon from "../../assets/images/facebook-icon.png";
import InstagramIcon from "../../assets/images/instagram-icon.png";

import "./style.css";

const SocialLinks = (props) => {
    return (
        <>
            <div id="social-links-container">
                <div className="social-col">
                    <Header as="h4" id="social-links-header">Follow Us On Social Media</Header>
                </div>
                <div className="social-col">
                    <Link to="https://www.facebook.com/profile.php?id=100091589973552" target=":blank">
                        <Image draggable="false" className="footer-social-icon" id="footer-facebook-icon" src={FacebookIcon} />
                    </Link>
                </div>
                <div className="social-col">
                    <Link to="https://www.instagram.com/zuseincapparel/" target=":blank">
                        <Image draggable="false" className="footer-social-icon" id="footer-instagram-icon" src={InstagramIcon} />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default SocialLinks;