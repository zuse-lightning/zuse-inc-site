import React from "react";
import { Grid, Header, Icon, Image } from "semantic-ui-react";
import FacebookIcon from "../../assets/images/facebook-icon-white.png";
import InstagramIcon from "../../assets/images/instagram-icon-white.png";

import "./style.css";

const AnnouncementBar = (props) => {
    return (
        <div id="announcement-container">
            <div className="announce-col"></div>
            <div className="announce-col">
                <Header id="announce-phone-number" as="h4"><Icon id="announce-phone-icon" name="phone" />Call: 203-675-9550</Header>
            </div>
            <div className="announce-col">
                <Header id="announce-address" as="h4"><Icon id="announce-map-icon" name="map pin" />54 East Industrial Road, Branford, CT 06405</Header>
            </div>
            <div className="announce-col">
                <div className="announce-social-icon-wrapper">
                    <Image className="announce-social-icon" id="announce-facebook-icon" src={FacebookIcon} />
                    <Image className="announce-social-icon" id="announce-instagram-icon" src={InstagramIcon} />
                </div>
            </div>
            <div className="announce-col">

            </div>
            {/* <Grid>
                <Grid.Row>
                    <Grid.Column className="announce-col" width={3}></Grid.Column>
                    <Grid.Column className="announce-col" width={2}>

                    </Grid.Column>
                    <Grid.Column className="announce-col" width={3}>

                    </Grid.Column>
                    <Grid.Column className="announce-col" width={3}></Grid.Column>
                    <Grid.Column width={5}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column className="announce-col">

                                </Grid.Column>
                                <Grid.Column className="announce-col">

                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid> */}
        </div>
    );
};

export default AnnouncementBar;