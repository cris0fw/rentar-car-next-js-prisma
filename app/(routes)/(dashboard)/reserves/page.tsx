import React from "react";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TableReserves from "./components/tableReserves/TableReserves";

const pageReserves = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const order = await db.order.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <h1 className="mb-4 text-3xl">Reserves Page</h1>
      {order.length === 0 ? (
        <div className="flex flex-col justify-center gap-4 items-center">
          <h2 className="text-xl">No tenes ningun pedido</h2>
          <p>Haz tus pedidos a traves de la pagina de vehiculos</p>
          <Link href="/cars">
            <Button>Lista de vehiculos</Button>
          </Link>
        </div>
      ) : (
        <TableReserves orders={order} />
      )}
    </div>
  );
};

export default pageReserves;
