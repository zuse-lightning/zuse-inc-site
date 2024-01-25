import React from "react";
import { Header, Image } from "semantic-ui-react";
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
                    <Image className="footer-social-icon" id="footer-facebook-icon" src={FacebookIcon} />
                </div>
                <div className="social-col">
                    <Image className="footer-social-icon" id="footer-instagram-icon" src={InstagramIcon} />
                </div>
            </div>
        </>
    );
}

export default SocialLinks;