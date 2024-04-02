import React from "react";
import { Header, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
                        <Image 
                            draggable="false" 
                            className="footer-social-icon" 
                            id="footer-facebook-icon" 
                            src="https://zuse-inc-bucket.s3.amazonaws.com/facebook-icon.png" 
                        />
                    </Link>
                </div>
                <div className="social-col">
                    <Link to="https://www.instagram.com/zuseincapparel/" target=":blank">
                        <Image 
                            draggable="false" 
                            className="footer-social-icon" 
                            id="footer-instagram-icon" 
                            src="https://zuse-inc-bucket.s3.amazonaws.com/instagram-icon.png" 
                        />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default SocialLinks;