"use client";

import FormHolder from "./FormHolder";

export default function ClientComponent({ children }) {
  return (
    <>
      <FormHolder />
      {children}
    </>
  );
}
