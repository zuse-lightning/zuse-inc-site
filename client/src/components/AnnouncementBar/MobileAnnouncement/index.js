import React from "react";
import { Header, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import LogoutModal from "../../LogoutModal";

import "../style.css";

const MobileAnnouncment = (props) => {

    const { screenWidth, whichWebsite, location } = props;
    const { currentUser, logout } = props.auth;
    const phoneNumber = whichWebsite(location, "203-458-3295", "203-458-3295", "203-410-8574");

    return (
        <div id="announcement-container">
            <div className="announce-col">
                {/* {screenWidth >= 664 ? <p id="announce-phone-number" as="h4"><Icon id="announce-phone-icon" name="phone" />{phoneNumber}</p> : null} */}
                <p id="announce-phone-number" as="h4"><Icon id="announce-phone-icon" name="phone" />{phoneNumber}</p>
            </div>
            <div className="announce-col">
                <div className="announce-social-icon-wrapper">
                    {/* <Image
                        as={Link}
                        target=":blank"
                        to="https://www.facebook.com/profile.php?id=100091589973552"
                        draggable="false"
                        className="announce-social-icon"
                        id="announce-facebook-icon"
                        src="https://zuse-inc-bucket.s3.amazonaws.com/facebook-icon-white.png"
                    />
                    <Image
                        as={Link}
                        target=":blank"
                        to="https://www.instagram.com/zuseincapparel/"
                        draggable="false"
                        className="announce-social-icon"
                        id="announce-instagram-icon"
                        src="https://zuse-inc-bucket.s3.amazonaws.com/instagram-icon-white.png"
                    /> */}
                    {currentUser ? <Header id="welcome-user" as="h4">Welcome, {currentUser?.first_name} {currentUser?.last_name}</Header> : null}
                    {currentUser ? <LogoutModal logout={logout} /> : <Link id="login-btn" to="/login">Log In</Link>}
                </div>
            </div>
        </div>
    );
};

export default MobileAnnouncment;