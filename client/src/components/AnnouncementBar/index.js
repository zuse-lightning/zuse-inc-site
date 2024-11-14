import React from "react";
import DesktopAnnouncment from "./DesktopAnnouncement";
import MobileAnnouncment from "./MobileAnnouncement";

const AnnouncementBar = (props) => {

    const { screenWidth, auth, whichWebsite, location } = props;

    return (
        <>
            {screenWidth >= 768 ? <DesktopAnnouncment auth={auth} screenWidth={screenWidth} whichWebsite={whichWebsite} location={location} /> : null}
            {screenWidth <= 767 ? <MobileAnnouncment auth={auth} screenWidth={screenWidth} whichWebsite={whichWebsite} location={location} /> : null}
        </>
    );
};

export default AnnouncementBar;