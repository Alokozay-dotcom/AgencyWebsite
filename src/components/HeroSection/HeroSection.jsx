import React from "react";
import imgone from "../../assets/hero/imageone.jpg";
import imgtwo from "../../assets/hero/imagetwo.jpg";
import imageThree from "../../assets/hero/Img3.jpg"
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { motion as Motion } from "framer-motion";

const Hero = () => {
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  // Variants for animation
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const imageFade = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section
      className={`w-full mt-7 min-h-screen px-6 lg:px-12 py-16 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left Content */}
        <Motion.div
          className="flex flex-col justify-center gap-6 lg:mt-0"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug sm:leading-tight lg:leading-tight tracking-tight ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Build beautiful websites with TailGrids blocks
          </h1>

          <p
            className={`max-w-lg text-base sm:text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            egestas tortor. Morbi sed odio id purus pellentesque iaculis nulla
            facilisi.
          </p>

          <h3
            className={`text-lg sm:text-xl font-semibold ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Subscribe to get notified when we launch 🎉
          </h3>

          <form className="flex flex-col sm:flex-row gap-3 mt-6 w-full max-w-lg">
            <input
              type="email"
              required
              placeholder="Enter your work email"
              className={`flex-1 h-12 px-4 rounded-xl border shadow-sm text-sm outline-none transition-all duration-300
                ${
                  darkMode
                    ? "border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    : "border-gray-300 bg-white text-black placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                }`}
            />
            <button
              type="submit"
              className="h-12 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 text-white font-semibold transition-all duration-300"
            >
              Notify Me
            </button>
          </form>
        </Motion.div>

        {/* Right Content (Images) */}
        <div className="grid grid-cols-2 gap-3 mt-8 lg:mt-0">
          <Motion.img
            src={imgtwo}
            alt="Hero Image 1"
            className="w-full h-60 sm:h-80 md:h-[492px] object-cover rounded-xl shadow-xl"
            variants={imageFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          />
          <div className="grid grid-rows-2 gap-3">
            <Motion.img
              src={imageThree}
              alt="Hero Image 2"
              className="w-full h-40 sm:h-56 md:h-60 object-cover rounded-xl shadow-xl"
              variants={imageFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <Motion.img
              src={imgone}
              alt="Hero Image 3"
              className="w-full h-40 sm:h-56 md:h-60 object-cover rounded-xl shadow-xl"
              variants={imageFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
