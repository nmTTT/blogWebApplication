import React from "react";
import Link from "next/link";

const Error = () => {
  return (
    <div className="flex justify-center w-[100vw]">
      <div className="m-24 flex justify-between w-1/3">
        <div className="flex justify-center text-7xl font-semibold border-r-2 w-2/5">
          <p>404</p>
        </div>
        <div className="flex flex-col gap-5 w-1/2">
          <p className="text-2xl font-semibold">Page Not Found</p>
          <p className="text-gray-500">
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </p>
          <div>
            <Link
              href={"/"}
              className="px-5 py-3 bg-[#4B6BFB] rounded-md text-white"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
