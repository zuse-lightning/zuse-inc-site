import React from "react";
import { Link } from "react-router-dom";
import { Button, Divider, Header } from "semantic-ui-react";

import "./style.css";

const CareersJobList = ({ jobs }) => {

  console.log(jobs);

  // const jobs = [
  //   {
  //     id: 1,
  //     title: "Software Engineer",
  //     location: "New York, NY",
  //   },
  //   {
  //     id: 2,
  //     title: "Marketing Manager",
  //     location: "San Francisco, CA",
  //   },
  //   {
  //     id: 3,
  //     title: "Sales Representative",
  //     location: "Chicago, IL",
  //   },
  //   {
  //     id: 4,
  //     title: "Graphic Designer",
  //     location: "Los Angeles, CA",
  //   },
  // ];

  return (
    <div id="careers-job-list-container">
      <Header as="h1" id="careers-header">We're Looking To Expand Our Team!</Header>
      {jobs.map((job, index) => (
        <>  
          <div key={job.id} className="careers-job-list-item">
            <h3>{job.title}</h3>
            <p>{job.job_type}</p>
            <p>{job.location}</p>
            <p>{job.pay_rate}</p>
            <p>{job.description}</p>
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