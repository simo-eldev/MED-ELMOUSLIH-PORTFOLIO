import React from "react";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();
  const education = t("education", { returnObjects: true });

  return (
    <section className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">{t("Education")}</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-4 bg-white dark:bg-gray-800 shadow"
          >
            <h2 className="text-xl font-semibold mb-1">{edu.degree}</h2>
            <div className="text-gray-600 dark:text-gray-300 mb-1">
              {edu.school}
            </div>
            <div className="text-gray-500 dark:text-gray-400 mb-1">
              {edu.year}
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              {edu.location}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
