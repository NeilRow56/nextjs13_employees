import React, { Suspense } from "react";
import ClientComponent from "./components/Clientcomponent";
import Table from "./components/Table";

const HomePage = () => {
  return (
    <>
      <ClientComponent>
        <Table />
      </ClientComponent>
    </>
  );
};

export default HomePage;
