import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const about = t("about", { returnObjects: true });

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] text-center bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none select-none bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] dark:bg-none"></div>
      <img
        src="https://avatars.githubusercontent.com/u/9919?v=4"
        alt="Avatar"
        className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-lg mb-6 z-10"
      />
      <h1 className="text-5xl font-extrabold mb-2 tracking-tight text-blue-700 dark:text-blue-300 drop-shadow-lg">
        {about.name}
      </h1>
      <h2 className="text-2xl text-purple-700 dark:text-purple-300 mb-4 font-semibold">
        {about.jobTitle}
      </h2>
      <p className="max-w-xl mb-8 text-lg text-gray-700 dark:text-gray-200 leading-relaxed z-10">
        {about.bio}
      </p>
      <a
        href={about.downloadCV}
        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 font-semibold transition-all duration-200 z-10"
        download
      >
        {t("Download CV")}
      </a>
    </section>
  );
};

export default Home;
