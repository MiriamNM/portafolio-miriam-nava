import React from "react";
import { SkillsImagesData } from "../data/SkillsImagesData";

const CarouselSkills = () => {
  return (
    <div class="flex flex-row w-full overflow-x-auto px-10">
      <div class="flex flex-row w-full overflow-x-auto">
        {SkillsImagesData.map((image) => (
          <img src={image.img} alt={image.title} class="mx-1" />
        ))}
      </div>
    </div>
  );
};

export default CarouselSkills;
