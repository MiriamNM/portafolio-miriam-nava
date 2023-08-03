import React, { useState } from "react";
import { Radio, Space } from "antd";
import { scholarshipData } from "../data/ExperienceData";

const SchoolExperience = () => {
  const [selectedSchool, setSelectedSchool] = useState(null);

  const handleJobChange = (e) => {
    setSelectedSchool(e.target.value);
  };

  return (
    <>
      <Radio.Group
        value={selectedSchool}
        onChange={handleJobChange}
        className="grid grid-cols-6 md:grid-cols-2 sm:grid-cols-2"
      >
        {scholarshipData.map(({ name }, index) => (
          <Radio.Button
            key={index}
            value={name}
            style={{
              color: selectedSchool === name ? "#FFFFFF" : "#636F9A",
              backgroundColor: selectedSchool === name ? "#636F9A" : "#FFFFFF",
              borderColor: "transparent",
            }}
            className="flex w-40 justify-center text-lg"
          >
            {name}
          </Radio.Button>
        ))}
      </Radio.Group>
      <Space direction="vertical" className="pt-10">
        {selectedSchool
          ? scholarshipData.map(({ school, date, name }) =>
              selectedSchool === name ? (
                <div key={school}>
                  <h3 className="text-base font-bold">{name}</h3>
                  <p className="text-base text-gray">{school}</p>
                  <p className="text-base text-lila">{date}</p>
                </div>
              ) : null
            )
          : setSelectedSchool("Frontend con React")}
      </Space>
    </>
  );
};

export default SchoolExperience;
