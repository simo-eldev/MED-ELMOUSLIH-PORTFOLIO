import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const projects = t("projects", { returnObjects: true });
  const [filter, setFilter] = useState("");

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
  const filteredProjects = filter
    ? projects.filter((p) => p.tags.includes(filter))
    : projects;

  return (
    <section className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">{t("Projects")}</h1>
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          onClick={() => setFilter("")}
          className={`px-3 py-1 rounded ${
            !filter ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          {t("All")}
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-3 py-1 rounded ${
              filter === tag
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="border rounded-lg p-4 shadow bg-white dark:bg-gray-800"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="mb-2">{project.description}</p>
            <div className="mb-2">
              <span className="font-medium">{t("Technologies")}: </span>
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
        ))}
      </div>
    </section>
  );
};

export default Projects;
