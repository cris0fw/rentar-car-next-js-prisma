"use client";
import React from "react";
import { useAuth } from "@clerk/nextjs";
import {
  dataGeneralSidebar,
  dataGeneralSidebarAdmin,
} from "./SidebarRoutes.data";
import SidebarItems from "./sidebarItems/SidebarItems";
import { isAdministrator } from "@/lib/isAdministrator";

const SidebarRoutes = () => {
  const { userId } = useAuth();

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6">
          <p className="mb-2 text-slate-500">GENERAL</p>
          {dataGeneralSidebar.map((item) => (
            <SidebarItems key={item.label} item={item} />
          ))}
        </div>

        {isAdministrator(userId) && (
          <div className="p-2 md:p-6">
            <p className="mb-2 text-slate-500">ADMIN</p>
            {dataGeneralSidebarAdmin.map((item) => (
              <SidebarItems key={item.label} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarRoutes;
