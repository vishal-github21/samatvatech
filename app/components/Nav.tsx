"use client";

import { useState } from "react";
import Image from "next/image";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { logo } from "@/public";
import { Roboto, Poppins, Chakra_Petch } from "next/font/google";
import { SignIn, SignUp } from "@clerk/nextjs";
import { UserButton, useUser } from "@clerk/nextjs"; // Import Clerk components
import Link from "next/link";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "600" });
const poppins2 = Chakra_Petch({ subsets: ["latin"], weight: "300" });

const Nav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { isSignedIn } = useUser(); // Get the sign-in status
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-50 shadow-md w-full bg-white text-black">
      <nav className="h-[10vh] flex items-center justify-between w-full px-4 md:px-6 lg:px-8">
        <div className="flex items-center md:ml-7 gap-2">
          <Image src={logo} alt="Samatva Logo" height={60} width={60} />
          <p className={`text-lg font-semibold md:block ${poppins.className}`}>
            samatva tech
          </p>
        </div>

        <div
          className={`hidden md:flex flex-row gap-6 mr-10 font-light ${poppins2.className} text-lg text-cyan-600 items-center`}
        >
          <div>
            <Link href="/" className="block px-4 py-2 text-lg text-teal-600 text-center">Home</Link>
          </div>
          <div>
            <Link href="/labs" className="block px-4 py-2 text-lg text-teal-600 text-center">Makerspace</Link>
          </div>
          <div>
            <Link href="/workshops" className="block px-4 py-2 text-lg text-teal-600 text-center">Workshops</Link>
          </div>
          <div>
            <Link href="/events" className="block px-4 py-2 text-lg text-teal-600 text-center">Events</Link>
          </div>
          {/* Profile Icon or User Button */}
          <div className="relative">
            {isSignedIn ? (
              // Show Clerk UserButton when signed in
              <div className="translate-y-[0.15rem]"><UserButton /></div>
            ) : (
              // Show FaUserCircle with login/signup dropdown when not signed in
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <FaUserCircle size={24} />
              </div>
            )}
            {!isSignedIn && dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 border-black border bg-gray-100 rounded-md shadow-lg">
                <button
                  onClick={() => {
                    setShowSignIn(true);
                    setDropdownOpen(false);
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md w-full text-left"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setShowSignUp(true);
                    setDropdownOpen(false);
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md w-full text-left"
                >
                  Signup
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-[10vh] left-0 w-full  bg-white shadow-md z-50 md:hidden">
          <div className="flex flex-col items-center py-4">
            <Link
              href="/"
              className="block px-4 py-2 text-lg text-teal-600 hover:bg-gray-200 w-full text-center"
            >
              Home
            </Link>
            <Link
              href="/Labs"
              className="block px-4 py-2 text-lg text-teal-600 hover:bg-gray-200 w-full text-center"
            >
              Makerspace
            </Link>
            <Link
              href="/workshops"
              className="block px-4 py-2 text-lg text-teal-600 hover:bg-gray-200 w-full text-center"
            >
              Workshops
            </Link>
            <Link
              href="/events"
              className="block px-4 py-2 text-lg text-teal-600 hover:bg-gray-200 w-full text-center"
            >
              Events
            </Link>
            {/* Profile Icon or User Button in Mobile */}
            <div className="relative mt-4">
              {isSignedIn ? (
                // Show Clerk UserButton when signed in
                <UserButton />
              ) : (
                // Show FaUserCircle with login/signup dropdown when not signed in
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <FaUserCircle size={24} />
                </div>
              )}
              {!isSignedIn && dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 border-black border bg-gray-100 rounded-md shadow-lg">
                  <button
                    onClick={() => setShowSignIn(true)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md w-full text-left"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setShowSignUp(true)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md w-full text-left"
                  >
                    Signup
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Sign In Modal */}
      {!isSignedIn && showSignIn && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="z-60"><SignIn routing="hash" /></div>
        </div>
      )}

      {/* Sign Up Modal */}
      {!isSignedIn && showSignUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="z-60"><SignUp routing="hash" /></div>
        </div>
      )}
    </div>
  );
};

export default Nav;
