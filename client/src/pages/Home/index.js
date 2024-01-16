import React, { Component } from "react";
import HomeSlideShow from "../../components/HomeSlideShow";
import TopClients from "../../components/TopClients";
import HomeAbout from "../../components/HomeAbout";
import HomeTrustBadges from "../../components/HomeTrustBadges";

import "./style.css";




class Home extends Component {
    render() {
        return (
            <>
                <HomeSlideShow />
                <TopClients />
                <HomeAbout />
                <HomeTrustBadges />
            </>
        );
    }
}

export default Home;