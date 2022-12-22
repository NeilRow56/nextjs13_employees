"use client";
import { useSelector } from "react-redux";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import Table from "./Table";

import React from "react";

export default function TableHolder() {
  const visible = useSelector((state) => state);
  console.log(visible);
  return (
    <div>
      <Table />
    </div>
  );
}
