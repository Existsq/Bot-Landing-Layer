import React from "react";
import { HiHashtag } from "react-icons/hi";

function ChannelStarter() {
  return (
    <section className="flex-row justify-start align-middle text-white m-[16px] mt-10">
      <div className="flex items-center h-[68px] w-[68px] rounded-full bg-[#42434A] justify-center align-middle mt-[16px]">
        <HiHashtag color="#FFF" size={45} />
      </div>
      <h1 className="text-[32px] cursor-default font-bold my-[8px]">
        Welcome to #ticket-19!
      </h1>
      <p className="text-md cursor-default text-[#B9BBBE] font-base">
        This is the start of the #ticket-19 channel.
      </p>
    </section>
  );
}

export default ChannelStarter;
