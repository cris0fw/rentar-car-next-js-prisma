import React from "react";
import LogoDashboard from "./LogoDashboard";
import SidebarRoutes from "./SidebarRoutes/SidebarRoutes";

const Sidebar = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex flex-col h-full border-r">
        <LogoDashboard />
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
