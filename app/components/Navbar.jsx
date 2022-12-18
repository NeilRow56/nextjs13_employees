import React from "react";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="flex container mx-auto w-full  border-b-2 border-gray-600 justify-between items-center px-24 h-20 static">
      <div className="flex">
        <button className="text-4xl font-bold px-2 py-1 rounded-md hover:text-orange-800 ">
          CodingsNotes
        </button>
        <div className="ml-3 mt-3">
          <div className="text-sm font-bold">
            <h4>THE BLOG</h4>
          </div>
          <div className="text-sm font-bold">
            <h4>OF CODINGSTRADE</h4>
          </div>
        </div>
      </div>
      <div className="gap-3 items-center flex">
        <button className=" px-2 py-1 rounded-md font-bold hover:text-orange-800 ">
          BOOOKS
        </button>
        <button className=" px-2 py-1 rounded-md font-bold hover:text-orange-800 ">
          VIDEOS
        </button>
        <button className="px-2 py-1 rounded-md font-bold hover:text-orange-800 ">
          YEAR IN REVIEW
        </button>
        <button className=" px-2 py-1 rounded-md hover:text-orange-800 ">
          LOGIN
        </button>
        <button className="border border-blue-600 text-blue-600 font-bold px-2 py-1 rounded-md  hover:bg-blue-600 hover:text-white">
          SIGN UP
        </button>
        <button className="border border-green-600 text-green-600 font-bold px-2 py-1 rounded-md hover:bg-green-600 hover:text-white  ">
          CREATE
        </button>

        <div className="items-center  hover:bg-gray-200 hover:rounded-full cursor-pointer p-2">
          <BiSearch className="w-6 h-6" />
        </div>
        <div className="items-center  hover:bg-gray-200 hover:rounded-full cursor-pointer p-2 ">
          <GiHamburgerMenu className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
