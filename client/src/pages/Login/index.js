import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Header, Message } from "semantic-ui-react";
import { AuthContext } from "../../context/authContext";

import "./style.css";

const Login = () => {

    const [inputs, setInputs] = useState({ email: "", password: "" });
    const [err, setError] = useState(null);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(inputs);
            navigate("/");
        } catch (err) {
            setError(err.response.data);
        };
    };

    return (
        <div id="login-container">
            <Header id="login-header" as="h1">Login</Header>
            <form onSubmit={handleSubmit} id="login-form">
                <input required onChange={handleChange} value={inputs.email} name="email" type="email" placeholder="email" />
                <input required onChange={handleChange} value={inputs.password} name="password" type="password" placeholder="password" />
                <Button type="submit">Login</Button>
                <Message>
                    Don't have an account? <Link to="/register">Register</Link>
                </Message>
                {err ? <Message error>{err}</Message> : null}
            </form>
        </div>
    );
};

export default Login;