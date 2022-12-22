"use client";

import React from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { toggleChangeAction } from "../redux/reducer";

export default function UpdateDelete() {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();

  const onUpdate = () => {
    dispatch(toggleChangeAction());
    console.log(visible);
  };

  return (
    <div className="flex justify-around gap-5">
      <button className="cursor" onClick={onUpdate}>
        <BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit>
      </button>
      <button className="cursor">
        <BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt>
      </button>
    </div>
  );
}
