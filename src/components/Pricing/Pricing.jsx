import React from "react";

const Pricing = () => {
  return (
    <>
      {/* Header */}
      <div className="text-center mt-10 px-6" data-aos="fade-up" data-aos-delay="300">
        <h1 className="text-blue-600 font-bold uppercase tracking-wide">
          Pricing Table
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mt-2">
          Our Pricing Plan
        </h2>
        <p className="w-full md:w-[50%] m-auto mt-5 text-gray-600 dark:text-gray-300">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-6 lg:px-12">
        {/* Basic Plan */}
        <div
          className="bg-white dark:bg-gray-900 border-2 border-blue-600 rounded-2xl shadow-xl text-center p-6 lg:py-14 transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="text-sm font-semibold mt-4 text-gray-500 dark:text-gray-400">
            Starting from
          </p>
          <p className="text-blue-700 dark:text-blue-400 text-2xl font-bold mt-2">
            € 19.99/mo
          </p>
          <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
            <li>1 User</li>
            <li>All UI components</li>
            <li>Lifetime access</li>
            <li>Free updates</li>
            <li>Use on 1 project</li>
            <li>3 Months support</li>
          </ul>
          <button className="mt-10 px-6 py-2 rounded-xl bg-orange-400 text-blue-700 font-bold hover:bg-blue-700 hover:text-white transition">
            Purchase Now
          </button>
        </div>

        {/* Popular Plan */}
        <div
          className="bg-blue-600 border-2 border-blue-600 rounded-2xl shadow-xl text-center p-6 lg:py-14 relative transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <span className="absolute top-4 right-4 bg-orange-400 text-sm font-bold px-3 py-1 rounded-full text-blue-900">
            Popular
          </span>
          <p className="text-sm font-semibold mt-6 text-gray-100">
            Starting from
          </p>
          <p className="text-2xl font-bold text-white mt-2">€ 49.99/mo</p>
          <ul className="mt-6 space-y-3 text-gray-100">
            <li>5 Users</li>
            <li>All UI components</li>
            <li>Lifetime access</li>
            <li>Free updates</li>
            <li>Use on unlimited projects</li>
            <li>12 Months support</li>
          </ul>
          <button className="mt-10 px-6 py-2 rounded-xl bg-orange-400 text-blue-900 font-bold hover:bg-gray-100 transition">
            Purchase Now
          </button>
        </div>

        {/* Pro Plan */}
        <div
          className="bg-white dark:bg-gray-900 border-2 border-blue-600 rounded-2xl shadow-xl text-center p-6 lg:py-14 transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="text-sm font-semibold mt-4 text-gray-500 dark:text-gray-400">
            Starting from
          </p>
          <p className="text-blue-700 dark:text-blue-400 text-2xl font-bold mt-2">
            € 99.99/mo
          </p>
          <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
            <li>Unlimited Users</li>
            <li>All UI components</li>
            <li>Lifetime access</li>
            <li>Free updates</li>
            <li>Use on unlimited projects</li>
            <li>24/7 Premium support</li>
          </ul>
          <button className="mt-10 px-6 py-2 rounded-xl bg-orange-400 text-blue-700 font-bold hover:bg-blue-700 hover:text-white transition">
            Purchase Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Pricing;
