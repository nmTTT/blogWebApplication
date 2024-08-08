import React from "react";

const Contact = () => {
  return (
    <div className="m-24 flex flex-col items-center w-[100vw]">
      <div className="flex flex-col gap-5 w-1/2 items-center pb-9">
        <div className="flex flex-col gap-5 w-4/5">
          <p className="text-[1.8rem] font-semibold">Contact Us</p>
          <p className="text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="w-[80%] flex justify-between">
          <div className="flex flex-col gap-2.5 border rounded-lg w-[47.5%] p-4">
            <p className="text-[1.5rem] font-semibold">Address</p>
            <div className="w-3/5">
              <p className="text-base text-gray-500">
                1328 Oak Ridge Drive, Saint Louis, Missouri
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 border rounded-lg w-[47.5%] p-4">
            <p className="text-[1.5rem] font-semibold">Contact</p>
            <div className="w-1/2">
              <p className="text-base text-gray-500">
                313-332-8662 info@email.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="w-[80%] pl-9 py-7 bg-gray-100 flex flex-col gap-6 rounded-xl">
          <p className="font-semibold text-lg">Leave a message</p>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-5">
              <div className="flex justify-between w-4/5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="pl-3 py-1 rounded-md border w-[45%]"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="pl-3 py-1 rounded-md border w-[45%]"
                />
              </div>
              <div className="w-4/5">
                <input
                  type="text"
                  placeholder="Subject"
                  className="pl-3 py-1 rounded-md border w-[100%]"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Write a message"
                  className="pl-3 pt-1 flex rounded-md border w-4/5 pb-20"
                />
              </div>
            </div>
            <div className="w-1/5">
              <button className="py-2 px-4 bg-[#4B6BFB] rounded-md text-white">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
