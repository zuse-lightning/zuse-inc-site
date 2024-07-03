import React from "react";
import { Header } from "semantic-ui-react";

import "./style.css";

const Profile = (props) => {
    return (
        <div id="profile-container">
            <Header as="h1" id="profile-header">Profile</Header>
        </div>
    );
};

export default Profile;