import React, { useEffect } from "react";
import { Header } from "semantic-ui-react";

import "./style.css";

const ForgotPassword = (props) => {

    const { currentUser, notAuthorized } = props.auth;

    useEffect(() => {
        notAuthorized();
    }, [currentUser]);

    return (
        <div id="forgot-container">
            <Header as="h1" id="forgot-header">Forgot Password</Header>
        </div>
    );
};

export default ForgotPassword;