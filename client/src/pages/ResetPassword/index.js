import React, { useEffect, useState } from "react";
import { Header, Button, Message} from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./style.css";

const ResetPassword = (props) => {

    const { whichWebsite } = props;
    const { currentUser, notAuthorized } = props.auth;
    const [inputs, setInputs] = useState({ newPassword: "", confirmPassword: "" });
    const [submitted, setSubmitted] = useState(false);
    const [err, setError] = useState(null);
    const navigate = useNavigate();
    const site = whichWebsite(window.location.href, "zuse", "acp", "union");

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${site}/auth/reset`, inputs);
            setSubmitted(true);
        } catch (err) {
            setError(err.response.data);
        };
    };

    useEffect(() => {
        notAuthorized();
    }, [currentUser]);

    if (submitted) {
        return (
            <div id="reset-container">
                <Header as="h1" id="reset-header">Reset Password</Header>
                <Message id="reset-msg">Your password has been reset!</Message>
            </div>
        );
    };

    return (
        <div id="reset-container">
            <Header as="h1" id="reset-header">Reset Password</Header>
            <form onSubmit={handleSubmit} id="reset-form">
                <div className="reset-form-col">
                    <input id="reset-email-input" required onChange={handleChange} value={inputs.newPassword} name="new-password" type="password" placeholder="New Password" />
                </div>
                <div className="reset-form-col">
                    <input id="reset-email-input" required onChange={handleChange} value={inputs.confirmPassword} name="confirm-password" type="password" placeholder="Confirm Password" />
                </div>
                <div className="reset-form-col">
                    <Button id="reset-submit-btn" fluid type="submit">Reset Password</Button>
                </div>
                <div className="reset-form-col">
                    {err ? <Message id="err-msg" error>{err}</Message> : null}
                </div>
            </form>
        </div>
    );
};

export default ResetPassword;