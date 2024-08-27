import { Calendar, Car, Heart, SquarePen, ScrollText } from "lucide-react";

export const dataGeneralSidebar = [
  {
    icon: Car,
    label: "Car",
    href: "/dashboard",
  },
  {
    icon: Calendar,
    label: "Car reserves",
    href: "/reserves",
  },
  {
    icon: Heart,
    label: "Cars loved",
    href: "/loved-cars",
  },
];

export const dataGeneralSidebarAdmin = [
  {
    icon: SquarePen,
    label: "Manage Your Car",
    href: "/dashboard/admin/car-manager",
  },
  {
    icon: ScrollText,
    label: "All reserves",
    href: "/dashboard/admin/reserves-admin",
  },
];
