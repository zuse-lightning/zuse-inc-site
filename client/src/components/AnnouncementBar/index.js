import React from "react";
import DesktopAnnouncment from "./DesktopAnnouncement";
import MobileAnnouncment from "./MobileAnnouncement";

const AnnouncementBar = (props) => {

    const { screenWidth, auth } = props;

    return (
        <>
            {screenWidth >= 768 ? <DesktopAnnouncment auth={auth} screenWidth={screenWidth} /> : null}
            {screenWidth <= 767 ? <MobileAnnouncment auth={auth} screenWidth={screenWidth} /> : null}
        </>
    );
};

export default AnnouncementBar;