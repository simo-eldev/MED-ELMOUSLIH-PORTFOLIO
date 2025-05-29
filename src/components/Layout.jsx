import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/education", label: "Education" },
  { to: "/projects", label: "Projects" },
];

const Layout = ({ children }) => {
  const location = useLocation();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const about = t("about", { returnObjects: true });

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header
        className="fixed top-0 w-full z-10 
        flex items-center justify-between px-3 
        py-4 shadow bg-white dark:bg-gray-800 
        overflow-visible"
      >
        {/* Hamburger button for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-800 dark:bg-gray-100 mb-1 transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-800 dark:bg-gray-100 mb-1 transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-800 dark:bg-gray-100 transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
        {/* Navigation links */}
        <nav
          className={`flex-col md:flex-row md:flex md:gap-4 absolute md:static top-full left-0 w-full md:w-auto bg-white dark:bg-gray-800 shadow md:shadow-none transition-all duration-300 z-20 ${
            menuOpen ? "flex" : "hidden md:flex"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-medium hover:underline px-4 py-2 block md:inline-block ${
                location.pathname === link.to ? "text-blue-600" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <button
            onClick={toggleTheme}
            className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </header>
      <main className="px-4 py-8 mt-16">{children}</main>
      {/* Contact section at the bottom */}
      <footer className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white dark:from-gray-800 dark:to-gray-900 py-8 mt-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">Phone:</span>{" "}
              <a
                href={"tel:" + about.phone}
                className="underline hover:text-blue-200"
              >
                {about.phone || "Not available"}
              </a>
            </li>
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a href={"mailto:" + about.email}>
                {about.email || "Not available"}
              </a>
            </li>
            <li>
              <span className="font-semibold">LinkedIn:</span>{" "}
              {about.linkedin ? (
                <a
                  href={about.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-200"
                >
                  LinkedIn Profile
                </a>
              ) : (
                "Not available"
              )}
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
// Removed misplaced phone link outside the Layout component.
// Removed Blog entry from navbar
