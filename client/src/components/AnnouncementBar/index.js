import React from "react";
import DesktopAnnouncment from "./DesktopAnnouncement";
import MobileAnnouncment from "./MobileAnnouncement";

const AnnouncementBar = (props) => {

    const { screenWidth } = props;

    return (
        <>
            {screenWidth >= 768 ? <DesktopAnnouncment screenWidth={screenWidth} /> : null}
            {screenWidth <= 767 ? <MobileAnnouncment screenWidth={screenWidth} /> : null}
        </>
    );
};

export default AnnouncementBar;