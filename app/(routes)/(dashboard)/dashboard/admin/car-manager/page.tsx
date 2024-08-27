import React from "react";
import ButtonAddCar from "./components/ButtonAddCar";
import ListCar from "./components/ListCar/ListCar";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { isAdministrator } from "@/lib/isAdministrator";

const CarManager = async () => {
  const { userId } = auth();

  if (!userId || !isAdministrator(userId)) {
    return redirect("/");
  }

  const car = await db.car.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Manage Your Cars</h2>
        <ButtonAddCar />
      </div>
      <ListCar cars={car} />
    </div>
  );
};

export default CarManager;
