"use client";
import React from "react";
import { ListPublishCarProps } from "./ListPublishCar.type";
import { Car } from "@prisma/client";
import Image from "next/image";
import { Fuel, Gauge, Gem, Heart, Users, Wrench } from "lucide-react";
import ModalReservation from "@/components/shared/ModalRervation/ModalReservation";
import { useLovedCars } from "@/hooks/use-loved-cars";

const ListPublishCar = (props: ListPublishCarProps) => {
  const { cars } = props;
  const { addLovedItems, removedLovedItems, lovedItems } = useLovedCars();

  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      {cars.map((car: Car) => {
        const {
          id,
          name,
          cv,
          transmission,
          people,
          photo,
          priceDay,
          engine,
          type,
          isPublish,
        } = car;

        const likeCar = lovedItems.some((item) => item.id === car.id);

        return (
          <div
            key={car.id}
            className="w-[270px] relative p-1 bg-white rounded-lg shadow-md hover:shadow-lg"
          >
            <Image
              src={photo}
              alt={name}
              width={400}
              height={600}
              className="rounded-lg"
            />
            <div className="relative p-3">
              <div className="flex flex-col mb-3 gap-x-4">
                <p className="text-xl min-h-16 lg:min-h-fit">{name}</p>
                <p>{priceDay}$USD /dia</p>
              </div>
              <div className="grid md:grid-cols-2 gap-x-4">
                <p className="flex items-center">
                  <Gem className="h-4 w-4 mr-2" strokeWidth={1} />
                  {type}
                </p>

                <p className="flex items-center">
                  <Wrench className="h-4 w-4 mr-2" strokeWidth={1} />
                  {transmission}
                </p>

                <p className="flex items-center">
                  <Users className="h-4 w-4 mr-2" strokeWidth={1} />
                  {people}
                </p>

                <p className="flex items-center">
                  <Fuel className="h-4 w-4 mr-2" strokeWidth={1} />
                  {engine}
                </p>

                <p className="flex items-center">
                  <Gauge className="h-4 w-4 mr-2" strokeWidth={1} />
                  {cv} CV
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-3">
              <ModalReservation car={car} />
              <Heart
                className={`mt-2 cursor-pointer ${likeCar && "fill-black"}`}
                onClick={
                  likeCar
                    ? () => removedLovedItems(car.id)
                    : () => addLovedItems(car)
                }
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListPublishCar;
