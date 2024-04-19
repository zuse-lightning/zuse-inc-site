import React from "react";
import DesktopAnnouncment from "./DesktopAnnouncement";
import MobileAnnouncment from "./MobileAnnouncement";

const AnnouncementBar = (props) => {

    const { screenWidth, currentUser } = props;

    return (
        <>
            {screenWidth >= 768 ? <DesktopAnnouncment currentUser={currentUser} screenWidth={screenWidth} /> : null}
            {screenWidth <= 767 ? <MobileAnnouncment currentUser={currentUser} screenWidth={screenWidth} /> : null}
        </>
    );
};

export default AnnouncementBar;