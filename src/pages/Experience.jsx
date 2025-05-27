import React from "react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t, i18n } = useTranslation();
  const experiences = t("experience", { returnObjects: true });

  return (
    <section className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">{t("Experience")}</h1>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-l-4 border-blue-600 pl-4 py-2 bg-white dark:bg-gray-800 rounded shadow"
          >
            <h2 className="text-xl font-semibold">
              {exp.projectTitle || exp.jobTitle}
            </h2>
            <div className="text-gray-600 dark:text-gray-300">
              {exp.company} | {exp.duration}
            </div>
            {exp.projectDescription && (
              <p className="italic text-gray-500 mt-2">
                {exp.projectDescription}
              </p>
            )}
            {exp.description && Array.isArray(exp.description) && (
              <ul className="mt-2 list-disc pl-5">
                {exp.description.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            )}
            {exp.tasks && Array.isArray(exp.tasks) && (
              <ul className="mt-2 list-disc pl-5">
                {exp.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
