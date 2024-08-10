import React from "react";
import { HiHashtag } from "react-icons/hi";

function TitleBar() {
  return (
    <div className="flex justify-left items-center min-h-12 max-h-12 gap-2 px-4 cursor-default shadow-md bg-[#313338]">
      <HiHashtag color="#72767D" size={25} />
      <p className="text-base font-semibold">ticket-19</p>
    </div>
  );
}

export default TitleBar;
