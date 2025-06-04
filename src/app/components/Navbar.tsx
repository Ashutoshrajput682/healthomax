"use client";

import { useState } from "react";
import { QrCode } from "lucide-react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("feed");
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-white border-b border-blue-600 px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/Group (1).png" alt="Logo" className="h-[36px] w-[36px]" />
          <span className="text font-semibold text-blue-900 text-[20px] text-size-[20px]">
            Health<span className="text-size-[22] font-normal">Omax</span>
          </span>
        </div>

        {/* Tabs (Desktop - Centered & Bottom Aligned with Gap) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-0 pb-1 w-90 gap-80">
          {["feed", "news"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative capitalize font-medium transition-colors ${
                activeTab === tab ? "text-blue-900 font-bold text-[18px] " : "text-gray-400"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-40 h-0.5 bg-blue-900 rounded"></span>
              )}
            </button>
          ))}
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-2 md:gap-3">
          <button className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-200 transition">
            <img src="/img/Get App.svg" alt="QR Icon" className="w-4 h-4" />
            Get App
          </button>

          <button
            onClick={() => setShowLogin(true)}
            className="rounded-full bg-blue-800 px-4 py-1.5 text-sm font-semibold text-white hover:bg-blue-900 transition"
          >
            Log in
          </button>
        </div>
      </nav>
      {/* Tabs (Mobile View) */}
      <div className="md:hidden mt-16 px-4 flex gap-6 overflow-x-auto border-b border-gray-200 pb-2">
        {["feed", "news"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`capitalize font-medium whitespace-nowrap ${
              activeTab === tab
                ? "text-blue-900 border-b-2 border-blue-900"
                : "text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4  ">
          <div className="bg-white rounded-xl shadow-2xl p-8 h-[503px] w-[553px] max-w-md relative">
            {/* Close */}
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Log In
            </h2>

            <form className="space-y-4 text-gray-800">
              <input
                type="email"
                placeholder="Email or username"
                required
                className="w-90 ml-4 px-4  py-2 border rounded-lg focus:outline-none focus:ring-2 text-gray-800 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="w-90 ml-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="text-right text-sm text-blue-600 hover:underline cursor-pointer mr-3">
                Forgot Password?
              </div>
              <button
                type="submit"
                className="w-90 ml-4 bg-blue-800 text-white py-2 rounded-lg font-semibold hover:bg-blue-900 transition"
              >
                Log In
              </button>
            </form>

            <div className="my-5 border-t pt-4 text-center text-sm text-gray-500 ">
              OR
            </div>

            <button className="w-90 ml-4 flex items-center justify-center gap-2 border rounded-lg py-2 mb-2 text-gray-800 hover:bg-gray-50">
              <img src="/img/google.svg" alt="Google" className="w-5 h-5" />
              Continue with Google
            </button>
            <button className="w-90 ml-4 flex items-center justify-center gap-2 border rounded-lg py-2 text-gray-800 hover:bg-gray-50">
              <img src="/img/apple.svg" alt="Apple" className="w-5 h-5" />
              Continue with Apple
            </button>

            <p className="mt-6 text-center text-sm text-gray-800">
              New to HealthOmax?{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                Sign Up
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
