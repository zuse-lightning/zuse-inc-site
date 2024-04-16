import react, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/auth/register", inputs);
            navigate("/login");
        } catch (err) {
            setError(err.response.data);
        };
    };

    return (
        <div id="register-container">
            <h1>Register</h1>
        </div>
    );
};

export default Register;