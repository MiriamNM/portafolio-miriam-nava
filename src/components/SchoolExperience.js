import React, { useState } from "react";
import { Radio, Space } from "antd";
import { scholarshipData } from "../data/ExperienceData";

const SchoolExperience = () => {
  return (
    <>
      <ul>
        <li>
          {scholarshipData.map(({ school, date, name }) => (
            <div key={school}>
              <p className="text-base">
                {name} <span className="text-gray">{school}</span>{" "}
                <span className="text-lila">{date}</span>
              </p>
            </div>
          ))}
        </li>
      </ul>
    </>
  );
};

export default SchoolExperience;
