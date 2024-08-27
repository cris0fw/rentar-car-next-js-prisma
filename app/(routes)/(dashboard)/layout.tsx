import React from "react";
import Sidebar from "./dashboard/components/Sidebar";
import NavbarDashboard from "./dashboard/components/NavbarDashboard";

const layoutDashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-screen">
      <div className="hidden xl:flex w-96 h-full">
        {/* ACA VA A ESTAR EL SIDEBAR */}
        <Sidebar />
      </div>
      <div className="w-full h-full flex flex-col">
        {/* ACA VA A ESTAR EL NAVBAR DEL DASHBOARD */}
        <NavbarDashboard />
        <div className="p-6 flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default layoutDashboard;
