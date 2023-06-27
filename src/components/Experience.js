import React from "react";
import {
  languagesData,
  scholarshipData,
  jobsData,
} from "../data/ExperienceData";

const Experience = () => {
  return (
    <div class="px-10">
      <h3 class="font-bold" style={{ color: "#BB1970" }}>
        Languages
      </h3>
      {languagesData.map(({ language }) => {
        return (
          <>
            <p>{language}</p>
          </>
        );
      })}

      <br />
      <h3 class="font-bold" style={{ color: "#BB1970" }}>
        Scholarship
      </h3>
      {scholarshipData.map(({ school }) => {
        return (
          <>
            <p>{school}</p>
          </>
        );
      })}
      <br />
      {jobsData.map(({ job, position, workingtime, description }) => {
        return (
          <>
            <h3 class="font-bold" style={{ color: "#BB1970" }}>
              {job}
            </h3>
            <p class="font-thin text-xs">{position}</p>
            <p class="font-thin text-xs">{workingtime}</p>
            <p>{description}</p>
            <br />
          </>
        );
      })}
    </div>
  );
};

export default Experience;
