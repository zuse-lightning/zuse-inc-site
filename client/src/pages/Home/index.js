import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import HomeSlideShow from "../../components/HomeSlideShow";

import "./style.css";

class Home extends Component {
    render() {
        return (
            <>
                            <HomeSlideShow />
            </>
        );
    }
}

export default Home;