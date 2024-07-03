import React from "react";
import { Header } from "semantic-ui-react";

import "./style.css";

const ForgotPassword = (props) => {
    return (
        <div id="forgot-container">
            <Header as="h1" id="forgot-header">Forgot Password</Header>
        </div>
    );
};

export default ForgotPassword;