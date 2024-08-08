import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center py-16 gap-6">
      <div className="flex w-2/3">
        <div className="flex flex-col gap-6 w-1/4">
          <div className="flex flex-col gap-3">
            <p className="text-xl font-semibold">About</p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div>
            <p>
              Email : <span className="text-gray-500">info@jstemplate.net</span>
            </p>
            <p>
              Phone : <span className="text-gray-500">880 123 456 789</span>
            </p>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="flex flex-col gap-2">
            <Link href={"/"} className="text-gray-500">
              Home
            </Link>
            <Link href={"/AllBlogList"} className="text-gray-500">
              Blog
            </Link>
            <Link href={"/Contact"} className="text-gray-500">
              Contact
            </Link>
          </div>
        </div>

        <div className="flex gap-9">
          <Link
            href={"https://react-icons.github.io/react-icons/search/#q=linked"}
          >
            <FaFacebook />
          </Link>
          <Link
            href={"https://react-icons.github.io/react-icons/search/#q=linked"}
          >
            <FaTwitter />
          </Link>
          <Link
            href={"https://react-icons.github.io/react-icons/search/#q=linked"}
          >
            <FaInstagram />
          </Link>
          <Link
            href={"https://react-icons.github.io/react-icons/search/#q=linked"}
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
      <div className="w-2/3 flex justify-between border-t-2 py-5">
        <img src="images/Copyright.png" alt="" className="w-[15rem] h-14" />
        <div>
          <div className="flex gap-4 text-gray-600">
            <p className="py-1">Terms of Use</p>
            <p className="py-1 px-4 border-x">Privacy Policy</p>
            <p className="py-1">Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
