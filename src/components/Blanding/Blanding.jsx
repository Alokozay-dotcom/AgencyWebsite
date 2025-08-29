import { FaLocationArrow } from "react-icons/fa";
import { FiMessageCircle, FiPhone } from "react-icons/fi"; 
import googleMapImage from "./map2.webp";

const Blanding = () => {
  return (
    <>
      {/* Top CTA Section */}
      <div
        className="bg-blue-700 dark:bg-cyan-950 dark:text-white mt-20 w-full text-center px-6 lg:px-12 py-10"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h1 className="text-white text-3xl font-semibold">What Are You Looking For?</h1>
        <h2 className="text-white mt-3 text-2xl">Get Started Now</h2>
        <p className="text-white mt-4 max-w-lg mx-auto">
          There are many variations of passages of Lorem Ipsum, but the majority have suffered in some form.
        </p>
        <button className="bg-green-500 px-6 py-2 rounded-lg hover:bg-green-400 mt-6 text-white font-medium">
          Explore Now
        </button>
      </div>

      {/* Contact Info Section */}
      <div
        className="bg-blue-700 dark:bg-cyan-950 dark:text-white mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 px-6 lg:px-12 py-8 rounded-lg"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {/* Email */}
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="flex items-center space-x-2">
            <FiMessageCircle className="text-white text-2xl" />
            <h1 className="text-white font-bold text-lg">Email</h1>
          </div>
          <p className="text-white text-sm">mujeebrahmanalokozay@mail.com</p>
          <p className="text-white text-sm">mujeebralokozay53@gmail.com</p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="flex items-center space-x-2">
            <FiPhone className="text-white text-2xl" />
            <h1 className="text-white font-bold text-lg">Phone Number</h1>
          </div>
          <p className="text-white text-sm">+93 786485423</p>
          <p className="text-white text-sm">+93 777777777</p>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="flex items-center space-x-2">
            <FaLocationArrow className="text-white text-xl" />
            <h1 className="text-white font-bold text-lg">Office Address</h1>
          </div>
          <p className="text-white text-sm">4571 Karte-char, Kabul</p>
          <p className="text-white text-sm">4571 Karte-char, Kabul</p>
        </div>
      </div>

      {/* Form + Map Section */}
      <div
        className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-6 px-6 lg:px-12 py-12"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {/* Form */}
        <form className="space-y-6 dark:bg-black dark:text-white p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              required
              type="text"
              placeholder="First Name"
              className="border px-4 py-3 font-mono rounded w-full focus:outline-none focus:border-blue-500"
            />
            <input
              required
              type="text"
              placeholder="Last Name"
              className="border px-4 py-3 font-mono rounded w-full focus:outline-none focus:border-blue-500"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="border px-4 py-3 font-mono rounded w-full focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border px-4 py-3 font-mono rounded w-full focus:outline-none focus:border-blue-500"
            />
          </div>

          <textarea
            required
            placeholder="Type your message here..."
            rows="6"
            className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-blue-500"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Submit Message
          </button>
        </form>

        {/* Map */}
        <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="300">
          <img
            src={googleMapImage}
            className="w-full rounded-lg shadow-md"
            alt="Google Map"
          />
        </div>
      </div>
    </>
  );
};

export default Blanding;
