import React from "react";

const Label = ({ text }) => {
  return (
    <div>
      <span className="rounded-md text-[10px] px-2.5 py-1 text-white bg-[#4B6BFB]">
        {text}
      </span>
    </div>
  );
};

export default Label;
