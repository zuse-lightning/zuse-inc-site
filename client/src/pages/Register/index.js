import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header, Button, Message } from "semantic-ui-react";
import axios from "axios";

import "./style.css";

const Register = (props) => {

    const { currentUser, notAuthorized } = props.auth;
    const [inputs, setInputs] = useState({ 
        first_name: "", 
        last_name: "", 
        email: "", 
        password: "" 
    });

    const [err, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = async (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(inputs);
            await axios.post("/auth/register", inputs);
            navigate("/login");
        } catch (err) {
            console.error(err.response.data);
            setError(err.response.data);
        };
    };

    useEffect(() => {
        notAuthorized();
    }, [currentUser]);

    return (
        <div id="register-container">
            <Header id="register-header" as="h1">Register</Header>
            <form onSubmit={handleSubmit} id="register-form">
                <input onChange={handleChange} name="first_name" type="text" placeholder="First Name" />
                <input onChange={handleChange} name="last_name" type="text" placeholder="Last Name" />
                <input onChange={handleChange} name="email" type="email" placeholder="Email" />
                <input onChange={handleChange} name="password" type="password" placeholder="Password" />
                <Button type="submit">Register</Button>
                <Message>
                    Already have an account? <Link to="/login">Login</Link>
                </Message>
                {err ? <Message error>{err}</Message> : null}
            </form>
        </div>
    );
};

export default Register;