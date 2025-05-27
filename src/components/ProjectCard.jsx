import React from "react";

const ProjectCard = ({ project }) => (
  <div className="border rounded-lg p-4 shadow bg-white dark:bg-gray-800">
    <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
    <p className="mb-2">{project.description}</p>
    <div className="mb-2">
      <span className="font-medium">Technologies: </span>
      {project.technologies.join(", ")}
    </div>
    <div className="flex gap-3">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          GitHub
        </a>
      )}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 underline"
        >
          Live
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
