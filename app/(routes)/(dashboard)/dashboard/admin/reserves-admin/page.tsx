import React from "react";
import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { isAdministrator } from "@/lib/isAdministrator";
import TableReservesAdmin from "./components/TableReservesAdmin/TableReservesAdmin";

const pageReservesAdmin = async () => {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user || !isAdministrator(userId)) {
    return redirect("/");
  }

  const orders = await db.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <TableReservesAdmin orders={orders} />
    </div>
  );
};

export default pageReservesAdmin;
