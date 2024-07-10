import React, { useEffect } from "react";
import { Header } from "semantic-ui-react";

import "./style.css";

const ResetPassword = (props) => {

    const { currentUser, notAuthorized } = props.auth;

    useEffect(() => {
        notAuthorized();
    }, [currentUser]);

    return (
        <div id="reset-container">
            <Header as="h1" id="reset-header">Reset Password</Header>
        </div>
    );
};

export default ResetPassword;