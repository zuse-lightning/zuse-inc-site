import React from "react";
import { Link } from "react-router-dom";
import { Button, Divider } from "semantic-ui-react";

import "./style.css";

const CareersJobList = (props) => {

  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      location: "New York, NY",
    },
    {
      id: 2,
      title: "Marketing Manager",
      location: "San Francisco, CA",
    },
    {
      id: 3,
      title: "Sales Representative",
      location: "Chicago, IL",
    },
    {
      id: 4,
      title: "Graphic Designer",
      location: "Los Angeles, CA",
    },
  ];

  return (
    <div id="careers-job-list-container">
      {jobs.map((job, index) => (
        <>
          <div key={job.id} className="careers-job-list-item">
            <h3>{job.title}</h3>
            <p>{job.location}</p>
            <Link to={`/careers/${job.id}`}>
              <Button>Learn More</Button>
            </Link>
          </div>
          {index === jobs.length - 1 ? null : <Divider className="careers-job-list-divider" />}
        </>
      ))}
    </div>
  );
}

export default CareersJobList;