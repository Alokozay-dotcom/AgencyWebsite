import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

// ✅ Validation schema
const schema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z
    .string()
    .min(8, { message: "Email must be at least 8 characters" })
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Must contain at least one lowercase letter" })
    .regex(/[@$!%*?&]/, {
      message:
        "Must contain at least one special character (@, $, !, %, *, ?, &)",
    }),
  privacyPolicy: z.boolean().refine((val) => val, {
    message: "You must accept the privacy policy",
  }),
  marketingConsent: z.boolean().optional(),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      privacyPolicy: false,
      marketingConsent: false,
    },
  });

  const onSubmit = (values) => {
    console.log(values);
    reset();
  };

  return (
    <>
      {/* Main Section */}
      <div className="min-h-[115vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#06191F] via-[#0D2C35] to-[#06191F] px-4 sm:px-6 lg:px-12 py-12">
        {/* Home link */}

        <div className="w-full max-w-[450px]">
          {/* Title */}
          <div className="text-center text-white mb-4">
            <h2 className="text-3xl font-bold">Create Account</h2>
            <p className="mt-2 text-gray-300">
              Return to
              <span className="text-yellow-400 ms-3 font-semibold">
                <Link to="/">Home</Link>
              </span>
            </p>
          </div>

          {/* Card */}
          <div className="bg-[#1E3A3F]/90 backdrop-blur-xl dark:bg-black  p-6 rounded-xl shadow-2xl border border-gray-700">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
              noValidate
            >
              {/* Name */}
              <div>
                <label className="block text-white text-sm mb-1">Name</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400 text-base" />
                  <input
                    type="text"
                    {...register("name")}
                    className={`w-full pl-10 pr-3 py-2 border rounded-lg bg-[#2D4A4F] text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all ${
                      errors.name ? "border-red-500" : "border-gray-600"
                    }`}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1 absolute">
                      {errors.name.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-white text-sm mb-1">
                  Email address
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400 text-base" />
                  <input
                    type="email"
                    {...register("email")}
                    className={`w-full pl-10 pr-3 py-2 border rounded-lg bg-[#2D4A4F] text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all ${
                      errors.email ? "border-red-500" : "border-gray-600"
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1 absolute">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-white text-sm mb-1">
                  Password
                </label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400 text-base" />
                  <input
                    type="password"
                    {...register("password")}
                    className={`w-full pl-10 pr-3 py-2 border rounded-lg bg-[#2D4A4F] text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all ${
                      errors.password ? "border-red-500" : "border-gray-600"
                    }`}
                    placeholder="Enter Password"
                  />
                  {errors.password && (
                    <p className="text-red-400 text-xs mt-1 absolute">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Checkboxes */}
              <div className="text-sm text-gray-300 space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("privacyPolicy")}
                    className="w-4 h-4 accent-yellow-400 rounded"
                  />
                  <span className="ml-2 text-xs">
                    I agree to the{" "}
                    <span className="text-yellow-400 hover:underline cursor-pointer">
                      privacy policy
                    </span>{" "}
                    and terms
                  </span>
                </label>
                {errors.privacyPolicy && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.privacyPolicy.message}
                  </p>
                )}

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("marketingConsent")}
                    className="w-4 h-4 accent-yellow-400 rounded"
                  />
                  <span className="ml-2 text-xs">
                    I want to receive marketing emails
                  </span>
                </label>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-2 mt-4 bg-yellow-400 text-black font-semibold rounded-lg shadow-md transition-transform duration-300 hover:scale-95 hover:bg-yellow-500 text-sm"
              >
                Sign Up
              </button>

              {/* Footer link */}
              <div className="text-gray-300 flex justify-center mt-2 space-x-2 text-xs">
                <span>Already have an account?</span>
                <Link
                  to="/login"
                  className="cursor-pointer hover:underline text-yellow-400"
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#06191F] text-xs text-gray-300 px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 border-t border-gray-700">
        <div className="flex gap-2">
          <span className="hover:text-yellow-400 cursor-pointer">
            Style guide
          </span>
          <span className="hover:text-yellow-400 cursor-pointer">Privacy</span>
          <span className="hover:text-yellow-400 cursor-pointer">License</span>
        </div>
        <div className="flex gap-2">
          <p>
            DESIGN BY:
            <a
              href="#"
              className="hover:text-yellow-500 font-semibold ms-1 gap-2"
            >
              MUJEEB RAHMAN ALOKOZAY
            </a>
          </p>
          <span>
            Powered by{" "}
            <span className="hover:text-yellow-400 cursor-pointer">
              Webflow
            </span>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Register;
