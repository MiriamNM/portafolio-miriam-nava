import React from "react";
import Card from "antd/es/card/Card";
import { projectsData } from "../data/ProjectsData";
import github from "../assets/GitHub.png";

const CardProjects = () => {
  return (
    <div className="pt-5 grid gap-4 grid-cols-3 sm:grid-cols-1 md:grid-cols-1">
      {projectsData.map(({ id, title, url, stack, image }) => (
        <Card
          key={id}
          hoverable
          style={{ width: 400 }}
          cover={
            <img
              src={image}
              alt={title}
              className="object-contain h-48 w-full rounded-lg"
            />
          }
        >
          <div className="flex justify-between items-center">
            <h3>{title}</h3>
            <a href={url}>
              <img src={github} alt={title} className="w-6 h-6" />
            </a>
          </div>
          <p className="text-blue-4">{stack}</p>
        </Card>
      ))}
    </div>
  );
};

export default CardProjects;
