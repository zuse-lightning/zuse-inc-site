import React, { useEffect } from "react";
import { Header } from "semantic-ui-react";

import "./style.css";

const Profile = (props) => {

    const { currentUser, notAuthorized } = props.auth;

    useEffect(() => {
        notAuthorized();
    }, [currentUser]);

    return (
        <div id="profile-container">
            <Header as="h1" id="profile-header">Profile</Header>
        </div>
    );
};

export default Profile;