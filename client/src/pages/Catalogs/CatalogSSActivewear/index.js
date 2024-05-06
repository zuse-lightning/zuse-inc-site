import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./style.css";

const CatalogSSActivewear = (props) => {

    const getApiData = async () => {
        const token = "40571143-44ba-4a21-8123-948467852b1f";
        try {
            const response = await axios.get("https://api.ssactivewear.com/v2/styles/", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    getApiData();

    return (
        <div>
            <h1>CatalogSSActivewear</h1>
        </div>
    );
};

export default CatalogSSActivewear;