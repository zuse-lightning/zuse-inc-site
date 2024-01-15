import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import FacebookIcon from "../../assets/images/facebook-icon.png";
import InstagramIcon from "../../assets/images/instagram-icon.png";

import "./style.css";

const SocialLinks = (props) => {
    return (
        <>
            <Grid id="social-links-container">
                <Grid.Row centered>
                    <Grid.Column width={2}>
                        <Header as="h4" id="social-links-header">Follow Us On Social Media</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={1}>
                        <div className="social-icon-wrapper">
                            <Image className="footer-social-icon" id="footer-facebook-icon" src={FacebookIcon} />
                        </div>
                    </Grid.Column>
                    <Grid.Column width={1}>
                        <div className="social-icon-wrapper">
                            <Image className="footer-social-icon" id="footer-instagram-icon" src={InstagramIcon} />
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    );
}

export default SocialLinks;