import React, { useState } from "react";
import { Radio, Space } from "antd";
import { jobsData } from "../data/ExperienceData";

const JobExperience = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobChange = (e) => {
    setSelectedJob(e.target.value);
  };

  return (
    <>
      <Radio.Group
        value={selectedJob}
        onChange={handleJobChange}
        className="grid grid-cols-7 md:grid-cols-2 sm:grid-cols-2"
      >
        {jobsData.map(({ job }, index) => (
          <Radio.Button
            key={index}
            value={job}
            style={{
              color: selectedJob === job ? "#FFFFFF" : "#636F9A",
              backgroundColor: selectedJob === job ? "#636F9A" : "#FFFFFF",
              borderColor: "transparent",
            }}
            className="flex w-40 justify-center text-lg"
          >
            {job}
          </Radio.Button>
        ))}
      </Radio.Group>
      <Space direction="vertical" className="pt-10">
        {selectedJob
          ? jobsData.map(
              ({
                job,
                city,
                position,
                workingtime,
                description1,
                description2,
                jobObject,
                Bonus,
                bonusDescription,
              }) =>
                selectedJob === job ? (
                  <div key={job}>
                    <p className=" text-dark flex justify-end md:justify-start">
                      {workingtime}
                    </p>
                    <h3 className="text-base">{position}</h3>
                    <p className="font-normal text-gray">{city}</p>
                    <br />
                    <p className="text-dark">{jobObject}</p>
                    <p className="text-dark">{description1}</p>
                    <p className="text-dark">{description2}</p>
                    <br />
                    <p className="text-pink-3">{Bonus}</p>
                    <p className="text-dark">{bonusDescription}</p>
                  </div>
                ) : null
            )
          : setSelectedJob("Nowports")}
        <br />
      </Space>
    </>
  );
};

export default JobExperience;
