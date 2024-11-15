import axios from "axios";

console.log(process.env.NODE_ENV);

let productionURL;

if (window.location.href.includes("zuse.com")) {
    productionURL = process.env.ZUSE_API_URL;
} else if (window.location.href.includes("americancontractprinting.com")) {
    productionURL = process.env.ACP_API_URL;
} else if (window.location.href.includes("americanunionprint.com")) {
    productionURL = process.env.UNION_API_URL;
}

const baseURL = process.env.NODE_ENV === "production" ? productionURL : "http://localhost:3001/api/";

export const axiosInstance = axios.create({
    baseURL: baseURL,
    withCredentials: true
});