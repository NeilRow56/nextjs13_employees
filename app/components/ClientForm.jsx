import FormHolder from "./FormHolder";
// import Table from "./Table";

export default function ClientForm({ children }) {
  return (
    <>
      <div>
        <FormHolder />
        {/* <Table /> */}
      </div>
      <main>{children}</main>
    </>
  );
}
