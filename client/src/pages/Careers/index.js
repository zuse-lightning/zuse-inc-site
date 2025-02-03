import React, { useState, useEffect } from "react";
import CareersJobList from "../../components/CareersJobList";
import { axiosInstance } from "../../utils/api";

const Careers = (props) => {

    const { location, whichWebsite } = props;

    const [jobs, setJobs] = useState([]);

    const site = whichWebsite(location, "zuse", "acp", "union");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get(`${site}/careers`);
                setJobs(res.data);
            } catch (err) {
                console.log(err);
            };
        };
        fetchData();
    }, []);

    return (
        <CareersJobList jobs={jobs} />
    );
};

export default Careers;