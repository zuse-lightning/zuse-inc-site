import React from "react";
import { Header, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "../style.css";

const DesktopAnnouncment = (props) => {

    const { screenWidth } = props;

    return (
        <div id="announcement-container">
            <div className="announce-col">
                <Header id="announce-phone-number" as="h4"><Icon id="announce-phone-icon" name="phone" />Call: 203-458-3295</Header>
            </div>
            {<div className="announce-col">
                <Header id="announce-address" as="h4"><Icon id="announce-map-icon" name="map pin" />54 East Industrial Road, Branford, CT 06405</Header>
            </div>}
            <div className="announce-col">
                <div className="announce-social-icon-wrapper">
                    <Image
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
                    />
                </div>
            </div>

        </div>
    );
};

export default DesktopAnnouncment;