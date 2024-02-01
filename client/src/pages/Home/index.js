import React, { Component } from "react";
import HomeSlideShow from "../../components/HomeSlideShow";
import TopClients from "../../components/TopClients";
import HomeAbout from "../../components/HomeAbout";
import HomeTrustBadges from "../../components/HomeTrustBadges";
import OurServices from "../../components/OurServices";
import TopCatalogs from "../../components/TopCatalogs";
import HomeContactForm from "../../components/HomeContactForm";

import "./style.css";




class Home extends Component {
    render() {

        const { screenWidth } = this.props;
        
        return (
            <>
                <HomeSlideShow screenWidth={screenWidth} />
                <TopClients />
                <HomeAbout />
                <HomeTrustBadges />
                <OurServices />
                <TopCatalogs />
                <HomeContactForm screenWidth={screenWidth} />
            </>
        );
    }
}

export default Home;