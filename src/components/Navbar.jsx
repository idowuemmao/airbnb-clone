import React from "react";
import { AIRBNBicons } from "../assets";
import { TbWorld, TbMenu2, TbUser, TbSearch } from "react-icons/tb";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-20 border-b flex items-center bg-white justify-between lg:justify-normal xl:justify-between py-4 px-8 md:px-12 lg:px-14">
      {/* left */}
      <div className="flex items-center gap-1 cursor-pointer">
        <img
          src={AIRBNBicons.logo}
          alt="airbnb-logo"
          className="hidden md:flex w-8 object-contain"
        />
        <h2 className="hidden xl:flex text-2xl font-bold text-[#ff5a60] ">
          airbnb
        </h2>
      </div>
      {/* middle */}
      <div className="flex items-center md:ml-4 xl:ml-0 w-full md:w-auto justify-between text-xs md:text-base rounded-full p-2 border border-slate-200 shadow-lg px-6 font-semibold gap-2">
        <button>Anywhere</button>
        <button className="border-x-2 px-20 md:px-2 ">Any week</button>
        <button className="text-gray-600/60">Add guests</button>
        <div className="bg-[#ff5a60] rounded-full p-2 ml-4">
          <TbSearch className="text-white" />
        </div>
      </div>
      {/* right */}
      <div className="flex md:ml-auto xl:ml-0 items-center justify-center text-base gap-8">
        <p className="font-semibold hidden lg:block">Airbnb your home</p>
        <TbWorld className="hidden lg:block" />
        <div className="hidden md:flex  items-center gap-2 rounded-full px-4 py-2 border text-xl shadow-lg">
          <TbMenu2 className="cursor-pointer" />
          <TbUser className="cursor-pointer bg-gray-700 text-white rounded-full p-1 text-3xl" />
        </div>
      </div>
    </div>
  );
}
