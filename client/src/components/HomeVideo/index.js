import React from "react";
import { Header } from "semantic-ui-react";

import "./style.css";

const HomeVideo = (props) => {
    return (
        <div id="home-video-container">
            <div id="home-video">
                <iframe
                    id="home-video-iframe"
                    title="Zuse Inc. Company Overview"
                    src="https://www.youtube.com/embed/_CU_zQpSTPg?si=Pw_aN8mI04OTNYpQ"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
};

export default HomeVideo;