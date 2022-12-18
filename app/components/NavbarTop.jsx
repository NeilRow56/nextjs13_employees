import React from "react";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarTop = () => {
  return (
    <div className="flex mx-auto w-full  border-b-2 border-gray-600 justify-between items-center px-24 h-20 fixed top-0 text-white bg-gray-900 ">
      <div className="flex">
        <div className="ml-3 mt-3">
          <div className="text-sm font-bold cursor-pointer hover:text-green-400">
            <h4>The Blog of CodingsTrade</h4>
          </div>
        </div>
      </div>
      <div className="gap-3 items-center flex">
        <button className=" px-2 py-1 rounded-md hover:text-green-500 ">
          LOGIN
        </button>
        <button className="border border-blue-600 text-white font-bold px-2 py-1 rounded-md  hover:bg-blue-600 hover:text-white">
          SIGN UP
        </button>
        <button className="border border-green-600 text-white font-bold px-2 py-1 rounded-md hover:bg-green-600 hover:text-white  ">
          CREATE
        </button>

        <div className="items-center  hover:bg-gray-200 hover:text-gray-900 hover:rounded-full cursor-pointer p-2">
          <BiSearch className="w-6 h-6" />
        </div>
        <div className="items-center  hover:bg-gray-200 hover:text-gray-900 hover:rounded-full cursor-pointer p-2 ">
          <GiHamburgerMenu className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
