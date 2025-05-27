import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const about = t("about", { returnObjects: true });
  const skills = t("skills", { returnObjects: true });

  return (
    <section className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{about.name}</h1>
      <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-2">
        {about.jobTitle}
      </h2>
      <p className="mb-6">{about.bio}</p>
      <div>
        <h3 className="text-lg font-semibold mb-2">{t("Skills")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-medium capitalize mb-1">{category}</h4>
              <ul className="list-disc list-inside">
                {items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex gap-4">
        <a
          href={about.downloadCV}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          download
        >
          {t("Download CV")}
        </a>
      </div>
    </section>
  );
};

export default About;
