"use client";

import React from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { useSelector } from "react-redux";

export default function UpdateDelete() {
  const visible = useSelector((state) => state);
  console.log(visible);

  return (
    <div className="flex justify-around gap-5">
      <button className="cursor">
        <BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit>
      </button>
      <button className="cursor">
        <BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt>
      </button>
    </div>
  );
}
