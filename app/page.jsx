import React, { Suspense } from "react";
import ClientForm from "./components/ClientForm";
// import ClientTable from "./components/ClientTable";
import Table from "./components/Table";

const HomePage = () => {
  return (
    <>
      <ClientForm></ClientForm>
      <Table />
    </>
  );
};

export default HomePage;
