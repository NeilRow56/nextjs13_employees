import Link from "next/link";
import React from "react";

const HeaderPage = () => {
  return (
    <header className="flex justify-center bg-indigo-500 rounded-lg py-4">
      <Link href="/" className="text-2xl font-bold text-gray-50">
        Navigation Menu
      </Link>
    </header>
  );
};

export default HeaderPage;
