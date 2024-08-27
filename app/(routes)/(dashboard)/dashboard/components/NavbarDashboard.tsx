import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SidebarRoutes from "./SidebarRoutes/SidebarRoutes";
import { UserButton } from "@clerk/nextjs";

const NavbarDashboard = () => {
  return (
    <nav className="flex items-center px-10 justify-between w-full h-20 border-b gap-x-4 md:px-6 bg-background">
      <div className="block xl:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center">
            <Menu />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SidebarRoutes />
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex items-center justify-end w-full gap-x-2">
        <UserButton />
      </div>
    </nav>
  );
};

export default NavbarDashboard;
