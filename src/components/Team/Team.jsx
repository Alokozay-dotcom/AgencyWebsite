import React, { useRef } from "react";
import Slider from "react-slick";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import first_member from "../../assets/first-member.png";
import second_member from "../../assets/secod-member.png";
import third_member from "../../assets/third-member.png";
import fourth_member from "../../assets/fourth-member.png";
import manimage from "../../assets/manimage.jpg";
import linicicon from "../../assets/linieicicon.svg";

// Team Data
const teamMembers = [
  {
    name: "Melissa Tatcher",
    role: "Marketing Expert",
    image: first_member,
    social: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
    },
  },
  {
    name: "Stuard Ferrel",
    role: "Digital Marketer",
    image: second_member,
    social: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
    },
  },
  {
    name: "Eva Hudson",
    role: "Designer",
    image: third_member,
    social: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
    },
  },
  {
    name: "Jackie Sanders",
    role: "SEO Expert",
    image: fourth_member,
    social: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
    },
  },
];

// Testimonials
const testimonials = [
  {
    image: manimage,
    quote:
      "File storage made easy – including powerful features you won’t find anywhere else. Whether you’re.",
    name: "Larry Diamond",
    title: "Chief Executive Officer.",
  },
  {
    image: manimage,
    quote: "Another amazing service with the best support and storage.",
    name: "Sarah Collins",
    title: "COO, TechNova",
  },
];

const Team = () => {
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      {/* Heading */}
      <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="300">
        <h1 className="font-semibold text-lg text-blue-600 cursor-pointer">
          Our Team Members
        </h1>
        <h2 className="text-4xl mt-3 font-bold text-gray-900 dark:text-white">
          Our Creative Team
        </h2>
        <h3 className="mt-3 text-gray-600 dark:text-gray-300 text-base w-full max-w-xl mx-auto">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </h3>
      </div>

      {/* Team Members */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-white dark:bg-gray-900 shadow-lg p-10 mt-10 rounded-2xl"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="text-center rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 bg-gray-50 dark:bg-gray-800"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img src={member.image} className="m-auto mt-3" alt={member.name} />
            <h1 className="text-md font-semibold mt-3 text-gray-800 dark:text-white">
              {member.name}
            </h1>
            <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
              {member.role}
            </p>
            <div className="flex justify-center gap-3 mt-4">
              <a href={member.social.facebook} target="_blank" rel="noreferrer">
                <FaFacebook className="text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 text-xl" />
              </a>
              <a href={member.social.twitter} target="_blank" rel="noreferrer">
                <FaTwitter className="text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 text-xl" />
              </a>
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 text-xl" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials Slider */}
      <div className="relative px-4 sm:px-10 lg:px-24 mt-20" data-aos="fade-up" data-aos-delay="300">
        <Slider ref={sliderRef} {...sliderSettings}>
          {testimonials.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 p-5 bg-white dark:bg-gray-900 rounded-2xl shadow-md" data-aos="fade-up" data-aos-delay="300">
                <div className="flex justify-center">
                  <img
                    src={item.image}
                    className="rounded w-[300px] h-[300px] object-cover"
                    alt={item.name}
                  />
                </div>

                <div>
                  <img src={linicicon} alt="Line Icon" className="mb-5" />
                  <p className="italic text-gray-600 dark:text-gray-300 text-lg">
                    {item.quote}
                  </p>
                  <h3 className="mt-10 text-xl font-medium text-gray-800 dark:text-white">
                    {item.name}
                  </h3>
                  <h4 className="font-bold text-blue-600 mt-1">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Arrows */}
        <div className="flex justify-center gap-6 mt-8" data-aos="fade-up" data-aos-delay="300">
          <button
            className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 text-4xl"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <SlArrowLeftCircle />
          </button>
          <button  
            className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 text-4xl"
            onClick={() => sliderRef.current.slickNext()}
          >
            <SlArrowRightCircle />
          </button>
        </div>
      </div>
    </>
  );
};

export default Team;
