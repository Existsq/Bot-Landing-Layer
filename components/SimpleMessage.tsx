import React from "react";

function SimpleMessage() {
  return (
    <div className="flex justify-start items-center px-4 gap-4 min-h-[2.75rem] bg-[#313338] hover:bg-[#2E3035] py-[2px] mt-[0.5rem]">
      <div className="align-middle justify-center">
        <div className="rounded-full min-w-10 min-h-10 bg-black"></div>
      </div>

      <div className="flex-row gap-[10px] justify-center align-middle">
        <div>
          <div className="flex justify-center items-center">
            <p className="text-white mr-[.25rem] font-medium hover:underline cursor-pointer text-[1rem]">
              Exist
            </p>
            <p className="text-[#72767D] ml-[.25rem] font-medium text-[.75rem]">
              07/31/2024 2:49 PM
            </p>
          </div>
        </div>

        <div>
          <p className="text-[1rem]">Message</p>
        </div>
      </div>
    </div>
  );
}

export default SimpleMessage;
