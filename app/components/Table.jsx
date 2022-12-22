/* eslint-disable @next/next/no-img-element */
import React from "react";
import { getUsers } from "../lib/helper";
import { BiEdit, BiTrashAlt } from "react-icons/bi";

export default async function Table() {
  let { users } = await getUsers();

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-16 py-2">
            <span className="text-gray-200">Name</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Email</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Salary</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Birthday</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Status</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {users.map((user, i) => (
          <Tr {...user} key={i} />
        ))}
        {/* {users.map((user, i) => {

          // return (
          //   <tr className="bg-gray-50 text-center items-center" key={i}>
          //     <td className="px-16 py-2 flex flex-row items-center ">
          //       <img src={user.avatar || "#"} alt="" width={24} height={24} />
          //       <span className="text-center  font-semibold ml-2">
          //         {user.name || "unknown"}
          //       </span>
          //     </td>
          //     <td className="px-16 py-2">
          //       <span>{user.email || "unknown"}</span>
          //     </td>
          //     <td className="px-16 py-2">
          //       <span>{user.salary || "unknown"}</span>
          //     </td>
          //     <td className="px-16 py-2">
          //       <span>{user.date || "unknown"}</span>
          //     </td>
          //     <td className="px-16 py-2">
          //       <button className="cursor">
          //         <span
          //           className={`${
          //             user.status == "Active" ? "bg-green-500" : "bg-rose-500"
          //           } text-white px-5 py-1 rounded-full`}
          //         >
          //           {user.status || "unknown"}
          //         </span>
          //       </button>
          //     </td>
          //     <td className="px-16   ">
          //       <div className="flex justify-around gap-5">
          //         <button className="cursor">
          //           <BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit>
          //         </button>
          //         <button className="cursor">
          //           <BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt>
          //         </button>
          //       </div>
          //     </td>
          //   </tr>
          // );
        })} */}
      </tbody>
    </table>
  );
}

function Tr({ id, name, avatar, email, salary, date, status }) {
  return (
    <tr className="bg-gray-50 text-center items-center">
      <td className="px-16 py-2 flex flex-row items-center ">
        <img src={avatar || "#"} alt="" width={24} height={24} />
        <span className="text-center  font-semibold ml-2">
          {name || "unknown"}
        </span>
      </td>
      <td className="px-16 py-2">
        <span>{email || "unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{salary || "unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{date || "unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <button className="cursor">
          <span
            className={`${
              status == "Active" ? "bg-green-500" : "bg-rose-500"
            } text-white px-5 py-1 rounded-full`}
          >
            {status || "unknown"}
          </span>
        </button>
      </td>
      <td className="px-16   ">
        <div className="flex justify-around gap-5">
          <button className="cursor">
            <BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit>
          </button>
          <button className="cursor">
            <BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt>
          </button>
        </div>
      </td>
    </tr>
  );
}
