import React from "react";

function Divider() {
  return (
    <div className="flex justify-between items-center mt-[.5rem] mb-[.5rem]">
      <div className="bg-[#404048] min-h-[1px] flex-grow ml-[1rem] mr-[.875rem]"></div>
      <span className="px-[4px] pt-[2px] font-semibold text-[12px] text-[#949BA4] cursor-default w-auto block whitespace-nowrap">
        July 31, 2024
      </span>
      <div className="bg-[#404048] min-h-[1px] flex-grow ml-[1rem] mr-[.875rem]"></div>
    </div>
  );
}

export default Divider;
