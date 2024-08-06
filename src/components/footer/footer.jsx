import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-200 flex flex-col items-center py-16">
      <div className="flex w-2/3">
        <div className="flex flex-col gap-6 w-1/4">
          <div className="flex flex-col gap-3">
            <p className="text-xl font-semibold">About</p>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div>
            <p>Email : info@jstemplate.net</p>
            <p>Phone : 880 123 456 789</p>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="flex flex-col gap-2">
            <p>
              <button>Home</button>
            </p>
            <p>
              <button>Blog</button>
            </p>
            <p>
              <button>Contact</button>
            </p>
          </div>
        </div>

        <div className="flex gap-9">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
      <div className="w-2/3 flex justify-between"></div>
    </div>
  );
};

export default Footer;
