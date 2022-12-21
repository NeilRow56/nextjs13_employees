"use client";
import { BiUserPlus } from "react-icons/bi";
import Form from "../components/Form";

import { useState } from "react";

export default function FormHolder() {
  const [visible, setVisible] = useState(false);

  const handler = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <main className="py-5">
        <h1 className=" text-xl md:text-5xl font-bold text-red-600 text-center py-10">
          Employee Management
        </h1>
        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex-gap-3">
            <button
              onClick={handler}
              className="flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:text-gray-800 hover:border-indigo-500"
            >
              Add Employee
              <span className="px-2">
                <BiUserPlus size={23}></BiUserPlus>
              </span>
            </button>
          </div>
        </div>
        {/* Collapsable Form */}

        {visible ? <Form /> : <></>}

        {/* Table */}
      </main>
    </div>
  );
}
