import React from "react";
import liniacicon from "../../assets/linieicicon.svg";
import ayroicon from "../../assets/ayro.svg";
import grayicon from "../../assets/gray.svg";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { Link } from "react-router-dom";

const UiComponents = () => {
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="300"
      className={`w-full px-6 mt-20 lg:px-12 py-16 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Heading */}
      <div
        className="text-center mb-12"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight lg:leading-tight tracking-tight ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Tailwind CSS UI Components for Modern Web Apps
        </h2>
      </div>

      {/* Icons */}
      <div
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center items-center"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div
          className="rounded-xl shadow-xl p-4 bg-white dark:bg-white transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img src={liniacicon} alt="Liniac Icon" className="w-32 mx-auto" />
        </div>
        <div
          className="rounded-xl shadow-xl p-4 bg-white dark:bg-white transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img src={ayroicon} alt="Ayro Icon" className="w-32 mx-auto" />
        </div>
        <div
          className="rounded-xl shadow-xl p-4 bg-white dark:bg-white transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img src={grayicon} alt="Gray Icon" className="w-32 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default UiComponents;
