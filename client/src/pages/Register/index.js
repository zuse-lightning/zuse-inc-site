import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header, Button, Message } from "semantic-ui-react";
import axios from "axios";

import "./style.css";

const Register = () => {

    const [inputs, setInputs] = useState({ 
        first_name: "", 
        last_name: "", 
        email: "", 
        password: "" 
    });

    const [err, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = async (e) => {
        setInputs(prev => ({ ...prev, [e.target.placeholder]: e.target.value }));
    };

    // const test = axios.get("/auth/test");
    // console.log(test);

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

    return (
        <div id="register-container">
            <Header id="register-header" as="h1">Register</Header>
            <form onSubmit={handleSubmit} id="register-form">
                <input onChange={handleChange} name="first_name" type="text" placeholder="first_name" />
                <input onChange={handleChange} name="last_name" type="text" placeholder="last_name" />
                <input onChange={handleChange} name="email" type="email" placeholder="email" />
                <input onChange={handleChange} name="password" type="password" placeholder="password" />
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