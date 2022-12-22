"use client";
import TableHolder from "./TableHolder";

export default function ClientTable({ children }) {
  return (
    <>
      <TableHolder />

      {children}
    </>
  );
}
