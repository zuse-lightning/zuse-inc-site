import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import FacebookIcon from "../../../assets/images/facebook-icon.png";
import InstagramIcon from "../../../assets/images/instagram-icon.png";

const SocialLinks = () => {
    return (
        <>
            <Grid id="social-links-container">
                <Grid.Row centered>
                    <Grid.Column>
                        <Header as="h4" id="social-links-header">Follow Us On Social Media</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={2}>
                        <Image className="social-icon" id="facebook-icon" size="small" src={FacebookIcon} />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Image className="social-icon" id="instagram-icon" size="small" src={InstagramIcon} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    );
}

export default SocialLinks;