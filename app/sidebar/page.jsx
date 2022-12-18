import Link from "next/link";
import React, { Suspense } from "react";
import DelayComponent from "./delay";
import Loading from "./loading";

const SidebarPage = () => {
  return (
    <aside className="bg-yellow-300 text-center flex justify-center items-center h-full">
      <Suspense fallback={<Loading />}>
        <div>
          <h1 className="text-2xl font-bold">Sidebar Page Render</h1>

          <DelayComponent />
          <Link href="/" className="text-xl font-bold underline">
            Main with Sidebar
          </Link>
        </div>
      </Suspense>
    </aside>
  );
};

export default SidebarPage;
