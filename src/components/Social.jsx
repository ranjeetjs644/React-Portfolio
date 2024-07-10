import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Social() {
  return (
    <div className="social   fixed bottom-0 left-1/2 transform -translate-x-1/2 p-2  text-gray-700 flex flex-row justify-center gap-5 sm:left-1 sm:top-1/2 sm:bottom-1/2 sm:flex-col sm:-translate-x-1  ">
      <Link
        to="https://www.instagram.com/_ranjeetttt/"
        target="_blank"
        className="hover:text-teal-800 text-[22px] hover:scale-125 transition-transform duration-300"
      >
        <FaInstagram />
      </Link>
      <Link
        to="https://www.facebook.com/ranjeet.patell.9/"
        target="_blank"
        className="hover:text-teal-800 text-[22px] hover:scale-125 transition-transform duration-300"
      >
        <FaFacebook />
      </Link>
      <Link
        to="/"
        target="_blank"
        className="hover:text-teal-800 text-[22px] hover:scale-125 transition-transform duration-300"
      >
        <FaXTwitter />
      </Link>
      <Link
        to="https://www.linkedin.com/in/ranjeetjs/"
        target="_blank"
        className="hover:text-teal-800 text-[22px] hover:scale-125 transition-transform duration-300"
      >
        <FaLinkedin />
      </Link>
      <Link
        to="https://github.com/ranjeetjs644/"
        target="_blank"
        className="hover:text-teal-800 text-[22px] hover:scale-125 transition-transform duration-300"
      >
        <FaGithub />
      </Link>
    </div>
  );
}

export default Social;
