import logo from "./logo.svg";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="relative bg-gray-100 dark:bg-gray-900 pt-20 pb-10 lg:pt-[120px] lg:pb-20 px-6 lg:px-12">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {/* Logo & Socials */}
        <div>
          <img src={logo} alt="Logo" className="h-12" />
          <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-gray-500 hover:text-blue-600 cursor-pointer text-xl" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-gray-500 hover:text-sky-500 cursor-pointer text-xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-gray-500 hover:text-pink-500 cursor-pointer text-xl" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-gray-500 hover:text-blue-700 cursor-pointer text-xl" />
            </a>
          </div>
        </div>

        {/* Company */}
        <div className="text-start" data-aos="fade-up" data-aos-delay="300">
          <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Company
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-base text-gray-600 dark:text-gray-300 hover:text-blue-600"
              >
                About Company
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-gray-600 dark:text-gray-300 hover:text-blue-600"
              >
                Company Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-gray-600 dark:text-gray-300 hover:text-blue-600"
              >
                Job Opportunities
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-gray-600 dark:text-gray-300 hover:text-blue-600"
              >
                Creative People
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-gray-600 dark:text-gray-300 hover:text-blue-600"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Customer */}
        <div className="text-start" data-aos="fade-up" data-aos-delay="300">
          <h5 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Customer
          </h5>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
              >
                Client Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
              >
                Latest News
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
              >
                Company Story
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
              >
                Pricing Packages
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="text-start" data-aos="fade-up" data-aos-delay="300">
          <h5 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Subscribe To Newsletter
          </h5>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Enter your email address to receive valuable newsletters.
          </p>
          <form
            className="flex items-center mt-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email"
              required
              className="h-12 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent px-4 text-sm text-gray-800 dark:text-gray-200 outline-none focus:border-blue-500 w-full"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-3 ml-2 rounded-md hover:bg-blue-700"
            >
              <MdOutlineMailOutline className="text-2xl" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom copyright section */}
      <div
        className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <p className="flex font-mono dark:text-white items-center gap-1">
          © {new Date().getFullYear()} All rights reserved with Mujeeb Rahman Alokozay
          <FaHeart className="text-red-500" />
        </p>
        <p className="mt-2 font-mono dark:text-white md:mt-0">
          Made with ❤️ using React & TailwindCSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
