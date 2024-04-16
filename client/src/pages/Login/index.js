import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {

    const [inputs, setInputs] = useState({ email: "", password: "" });
    const [err, setError] = useState(null);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    console.log(login);

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.placeholder]: e.target.value }));
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
            <h1>Login</h1>
        </div>
    );
};

export default Login;