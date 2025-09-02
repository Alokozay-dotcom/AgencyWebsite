import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

/* ---------- Icons ---------- */
const MailIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
    <path d="m22 8-10 6L2 8" />
  </svg>
);

const LockIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const EyeIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeSlashIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.82 21.82 0 0 1 5.06-5.94" />
    <path d="M1 1l22 22" />
    <path d="M9.88 9.88A3 3 0 0 0 12 15a3 3 0 0 0 2.12-.88" />
  </svg>
);

/* ---------- Validation ---------- */
const loginSchema = z.object({
  email: z.string().min(8).email(),
  password: z.string().min(6),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (values) => {
    console.log(values);
    reset();
  };

  return (
    <div className="min-h-screen py-20 mt-5 flex items-center justify-center bg-gradient-to-br from-cyan-900 via-cyan-950 to-black px-4">
      <div className="w-full max-w-sm">
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-white">
            Welcome Back 👋
          </h1>
          <p className="mt-2 text-gray-300">
            Return to
            <span className="text-yellow-400 ms-3 font-semibold">
              <Link to="/">Home</Link>
            </span>
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/10 dark:bg-black backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl space-y-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            noValidate
          >
            {/* Email */}
            <div className="relative">
              <input
                id="email"
                type="email"
                {...register("email")}
                className={`peer w-full pl-10 pr-3 py-2.5 rounded-lg bg-white/5 text-white placeholder-transparent border-2 ${
                  errors.email ? "border-red-500" : "border-gray-600"
                } focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition`}
                placeholder="you@example.com"
              />
              <label
                htmlFor="email"
                className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400 text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-yellow-400 peer-focus:text-sm transition-all"
              >
                Email Address
              </label>
              <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-yellow-400 pointer-events-none" />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className={`peer w-full pl-10 pr-10 py-2.5 rounded-lg bg-white/5 text-white placeholder-transparent border-2 ${
                  errors.password ? "border-red-500" : "border-gray-600"
                } focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition`}
                placeholder="••••••"
              />
              <label
                htmlFor="password"
                className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400 text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-yellow-400 peer-focus:text-sm transition-all"
              >
                Password
              </label>
              <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-yellow-400 pointer-events-none" />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:scale-110 transition-transform"
              >
                {showPassword ? (
                  <EyeSlashIcon className="w-4 h-4" />
                ) : (
                  <EyeIcon className="w-4 h-4" />
                )}
              </button>
              {errors.password && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between text-sm text-gray-300">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" className="accent-yellow-400 rounded" />
                Remember me
              </label>
              <Link to="/login" className="hover:underline text-yellow-400">
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 hover:scale-95 transition-transform duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Logging in..." : "Log In"}
            </button>
          </form>

          {/* Signup link */}
          <div className="flex justify-center items-center mt-4 text-sm text-gray-300">
            <span>Don’t have an account?</span>
            <Link
              to="/register"
              className="text-yellow-400 font-medium ms-1 hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
