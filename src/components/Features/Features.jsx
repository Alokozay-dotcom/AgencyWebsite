import React from "react";
import customizeicon from "../../assets/customize.svg";
import easyicon from "../../assets/easy.svg";
import awesomeicon from "../../assets/awesome.svg";
import anytimeicon from "../../assets/anytime.svg";
import sideimage from "../../assets/hero/img2.jpg";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const Features = () => {
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  const features = [
    {
      icon: easyicon,
      title: "Easy to Use",
      desc: "Lorem ipsum dolor sit amet sitim consectetur elit. Vestibulum tincidunt rutrum.",
    },
    {
      icon: awesomeicon,
      title: "Awesome Design",
      desc: "Lorem ipsum dolor sit amet sitim consectetur elit. Vestibulum tincidunt rutrum.",
    },
    {
      icon: customizeicon,
      title: "Easy To Customize",
      desc: "Lorem ipsum dolor sit amet sitim consectetur elit. Vestibulum tincidunt rutrum.",
    },
    {
      icon: anytimeicon,
      title: "Any Time Support",
      desc: "Lorem ipsum dolor sit amet sitim consectetur elit. Vestibulum tincidunt rutrum.",
    },
  ];

  return (
    <section
      className={`${darkMode ? "bg-gray-900 mb-20 text-gray-200" : "bg-gray-100 text-gray-900"} px-6 lg:px-12 py-16`}
      data-aos="fade-up"
      data-aos-delay="300"
    >
      {/* Section Header */}
      <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="300">
        <a href="#" className="text-blue-500 font-semibold mb-2 inline-block">
          Core Features
        </a>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          Our Awesome Features
        </h2>
        <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto`}>
          There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center p-6 rounded-xl shadow-xl transition-transform duration-300 hover:scale-105 ${
              darkMode ? "bg-black" : "bg-white"
            }`}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-20 h-20 p-4 rounded-xl mb-4 bg-blue-600"
            />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm sm:text-base">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Side Image & Additional Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative" data-aos="fade-up" data-aos-delay="300">
          <img
            src={sideimage}
            alt="Side"
            className="w-96 rounded-xl shadow-xl"
          />
          <div className="absolute bottom-0 right-0 bg-blue-500 text-white px-6 py-4 rounded-tr-3xl max-w-xs text-center">
            We make clean & professional design
          </div>
        </div>

        <div className="space-y-8" data-aos="fade-up" data-aos-delay="300">
          <h6 className="text-blue-500 font-bold text-center md:text-left">What we do!</h6>
          <p className="text-3xl font-bold text-center md:text-left">
            We develop & create awesome websites.
          </p>

          {/* Feature Details */}
          <div className="space-y-6">
            <div data-aos="fade-up" data-aos-delay="300">
              <h4 className="text-2xl font-bold">
                <span className="text-blue-600 mr-2">01</span> Refreshing Design
              </h4>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} mt-2`}>
                Clean, refreshing and high-quality that gives positive vibes. Figma source file also provided so you can use to prototype, experiment, play or adjust.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <h4 className="text-2xl font-bold">
                <span className="text-blue-600 mr-2">02</span> Developer Friendly
              </h4>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} mt-2`}>
                Developer experience is our first priority, entire library is designed, coded, and organized in a way that saves hundreds of hours and increases productivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
