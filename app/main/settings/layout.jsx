import Sidebar from "../../sidebar/page";

export default function SidebarLayout({ children }) {
  return (
    <div className="grid grid-cols-6 border text-center">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-4 bl-slate-100">{children}</div>
    </div>
  );
}
