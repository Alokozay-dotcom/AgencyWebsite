import React from "react";
const isLoggedIn = true;

// import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import iphone from "./iphone13.jpg";
import mac from "./mac.jpg";
import apple from "./apple.jpg";

// import stars in react project

const Condition = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center  bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">
          {isLoggedIn ? "Welcome back" : "Please sign in"}
        </h1>
        {isLoggedIn ? (
          <button
            onClick={() => alert("You have logged out")}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition duration-300"
          >
            Logout
            <br />
          </button>
        ) : (
          <button
            onClick={() => alert("You have logged in")}
            className="px-4 bg-blue-500 text-white font-semibold rounded hover:bg-red-600 transition duration-300"
          >
            Login
          </button>
        )}

        {isLoggedIn && (
          <p className="mt-4 text-gray-700">Thanks for login in Enjoy</p>
        )}
      </div>

      {/* <div className="container">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <div className="mt-4 ">
            <div className="shadow-lg bg-white p-2">
              <img className="w-full rounded" src={image} alt="image" />
              <h3 className="m-3">Apple Watch Series 7</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <hr className="mt-2" />
      mt-3         <div className="flex p-2 justify-between ">
                <div>kjfsdhfjfsd</div>

                <div className="border-collapse ">964$</div>
              </div>
            </div>
          </div>

          <div className="card rounded mt-4 shadow-lg  bg-white">
            <div className="image  p-2">
              <img className="w-full rounded" src={image} alt="image" />
            </div>
            <div className=" m-3">
              <h2>Apple Computer Series 8</h2>
              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequatur!
              </p>
              <hr className="mt-2 p-2" />
  mt-3             <div className=" flex justify-between ">
                    <div>stars</div>
                    <div>(500) Reviews</div>
                    <div className="border-1 border-1 ">1000$</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* card creation */}
      {/* <div className="flex text-yellow-400 text-xl">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStarHalfAlt />
    </div> */}

      <div className="container bg-dark mt-2  m-auto justify-center items-center ">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 "> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 ">
          <div className=" h-full mx-auto border rounded">
            <div className="image rounded">
              <img src={iphone} className="rounded w-full shadow" alt="" />
              <div className="rounded mt-3 ">
                <h3 className="text-lg font-bold p-2 m-1">
                  Apple Watch Series 7
                </h3>
                <p className="p-2 m-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <hr className="text-green-300 mt-3" />
              <div className="flex items-center justify-between ">
                <div className="p-2">Stars</div>
                <div>(55) Reviews</div>
                <div className="border-l-2 p-2 ">100$</div>
              </div>
            </div>
          </div>
          {/* second card */}
          <div className=" h-full mx-auto border rounded">
            <div className="image rounded">
              <img src={apple} className="rounded w-full shadow" alt="" />
              <div className="rounded mt-3 ">
                <h3 className="text-lg font-bold p-2 m-1">
                  Apple Watch Series 7
                </h3>
                <p className="p-2 m-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <hr className="text-green-300 mt-3" />
              <div className="flex items-center justify-between ">
                <div className="p-2">Stars</div>
                <div>(55) Reviews</div>
                <div className="border-l-2 p-2 ">100$</div>
              </div>
            </div>
          </div>
          {/* third div */}
          <div className=" h-full mx-auto border rounded">
            <div className="image rounded">
              <img src={mac} className="rounded w-full shadow" alt="" />
              <div className="rounded mt-3 ">
                <h3 className="text-lg font-bold p-2 m-1">
                  Apple Watch Series 7
                </h3>
                <p className="p-2 m-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <hr className="text-green-300 mt-3" />
              <div className="flex items-center justify-between ">
                <div>(55) Reviews</div>
                <div className="border-l-2 p-2 ">100$</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Condition;
