import React from "react";
import { SidebarItemsProps } from "./sidebarItems.type";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const SidebarItems = (props: SidebarItemsProps) => {
  const { item } = props;
  const { label, href, icon: Icon } = item;

  const pathname = usePathname();

  const activePath = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex gap-x-2 mt-2 text-slate-700 text-sm items-center hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer",
        activePath && "bg-slate-400/20"
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1} />
      {label}
    </Link>
  );
};

export default SidebarItems;
