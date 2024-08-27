import React from "react";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import ListPublishCar from "./components/ListPublishCar/ListPublishCar";

const Dashboard = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const cars = await db.car.findMany({
    where: {
      isPublish: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <div className="flex justify-between flex-col">
        <h2 className="text-2xl font-bold">Listado de autos</h2>

        <ListPublishCar cars={cars} />
      </div>
    </div>
  );
};

export default Dashboard;
