"use client";
import { Button } from "@/components/ui/button";
import { Fuel, Gem, Heart, Users, Wrench, Gauge } from "lucide-react";
import Image from "next/image";
import { useLovedCars } from "@/hooks/use-loved-cars";
import { useAuth } from "@clerk/nextjs";
import { Car } from "@prisma/client";
import Link from "next/link";
import ModalReservation from "@/components/shared/ModalRervation/ModalReservation";
import React from "react";
import { ListCarsProps } from "./ListCars.types";
import SkeletonCars from "@/components/shared/SkeletonCars";

const ListCars = (props: ListCarsProps) => {
  const { cars } = props;
  const { userId } = useAuth();
  const { addLovedItems, removedLovedItems, lovedItems } = useLovedCars();

  if (!cars) {
    return <SkeletonCars />;
  }

  return (
    <>
      {cars.length === 0 && (
        <p>No se han encontrado vehiculos con estos filtros</p>
      )}
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
        {cars.map((car: Car) => {
          const {
            priceDay,
            photo,
            name,
            type,
            transmission,
            cv,
            people,
            engine,
            id,
          } = car;

          const likedCar = lovedItems.some((item) => item.id === car.id);

          return (
            <div key={id} className="p-1 rounded-lg shadow-md hover:shadow-lg">
              <Image
                src={photo}
                alt=""
                width={400}
                height={600}
                className="rounded-lg"
              />
              <div className="p-3">
                <div className="flex flex-col mb-3 gap-x-4">
                  <p className="text-xl min-h-16 lg:min-h-fit">{name}</p>
                  <p>{priceDay}</p>
                </div>
              </div>
              <p className="flex items-center">
                <Gem className="w-4 h-4 mr-2" strokeWidth={1} />
                {type}
              </p>
              <p className="flex items-center">
                <Wrench className="w-4 h-4 mr-2" strokeWidth={1} />
                {transmission}
              </p>
              <p className="flex items-center">
                <Users className="w-4 h-4 mr-2" strokeWidth={1} />
                {people}
              </p>
              <p className="flex items-center">
                <Fuel className="w-4 h-4 mr-2" strokeWidth={1} />
                {engine}
              </p>
              <p className="flex items-center">
                <Gauge className="w-4 h-4 mr-2" strokeWidth={1} />
                {cv}
              </p>

              {userId ? (
                <div className="flex items-center justify-center gap-x-3">
                  <ModalReservation car={car} />
                  <Heart
                    className={`mt-2 cursor-pointer ${
                      likedCar && "fill-black"
                    }`}
                    onClick={
                      likedCar
                        ? () => removedLovedItems(car.id)
                        : () => addLovedItems(car)
                    }
                  />
                </div>
              ) : (
                <div className="w-full mt-2 text-center">
                  <Link href="/sign-in">
                    <Button className="w-full" variant="outline">
                      Inicia session para reservar
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListCars;
