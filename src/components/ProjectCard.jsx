import React from "react";
import GitHub from "../assets/img/GitHub.svg";

const ProjectCard = ({ title, image, tag, description, githubLink }) => {
  return (
    <div className="w-full lg:w-91 h-auto lg:h-120 mt-8 bg-white rounded-[20px] shadow-[12px_12px_12px_0px_rgba(0,0,0,0.25)] p-5 flex flex-col justify-between">
      <img
        className="w-full lg:w-80 h-48 md:h-56 rounded-[5px] shadow-[4px_4px_10px_1px_rgba(0,0,0,0.25)] object-cover"
        src={image}
        alt={`${title} Project`}
      />
      <div className="mt-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0000ff] font-instrument italic">
          {title}
        </h2>
        <div className="my-2 rounded-[5px] w-min px-2.5 bg-[#0000ff]">
          <p className="font-satoshi text-white text-sm">{tag}</p>
        </div>
        <p className="font-satoshi text-sm md:text-base">{description}</p>
      </div>
      <div className="p-2 flex justify-end">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <img src={GitHub} alt="GitHub Logo" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
