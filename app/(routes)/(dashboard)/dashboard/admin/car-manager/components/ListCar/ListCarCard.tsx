"use client";
import React from "react";
import { ListCarCardProps } from "./ListCar.type";
import { Button } from "@/components/ui/button";
import { Fuel, Gauge, Gem, Trash, Upload, Users, Wrench } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ButtonEditCar from "./ButtonEditCar";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";

const ListCarCard = (props: ListCarCardProps) => {
  const { card } = props;
  const router = useRouter();

  const deleteCar = async () => {
    try {
      await axios.delete(`/api/car/${card.id}`);
      toast({
        title: "Car delete",
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  const handlerPublishCar = async (publish: boolean) => {
    try {
      await axios.patch(`/api/car/${card.id}`, { isPublish: publish });

      if (publish) {
        toast({
          title: "Car Published",
        });
        router.refresh();
      } else {
        toast({
          title: "Car Unpublished",
        });
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
      router.refresh();
    }
  };

  return (
    <div className="w-[270px] relative p-1 bg-white rounded-lg shadow-md hover:shadow-lg">
      <Image
        src={card.photo}
        alt={card.name}
        width={400}
        height={600}
        className="rounded-lg"
      />
      {card.isPublish ? (
        <p className="absolute top-0 right-0 w-full p-1 text-center rounded-t-lg text-white bg-green-700">
          Published
        </p>
      ) : (
        <p className="absolute top-1 left-0 right-0 w-full rounded-t-lg p-1 text-center text-white bg-red-300">
          No Published
        </p>
      )}

      <div className="relative p-3">
        <div className="flex flex-col mb-3 gap-x-4">
          <p className="text-xl min-h-16 lg:min-h-fit">{card.name}</p>
          <p>{card.priceDay}$USD /dia</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-4">
          <p className="flex items-center">
            <Gem className="h-4 w-4 mr-2" strokeWidth={1} />
            {card.type}
          </p>

          <p className="flex items-center">
            <Wrench className="h-4 w-4 mr-2" strokeWidth={1} />
            {card.transmission}
          </p>

          <p className="flex items-center">
            <Users className="h-4 w-4 mr-2" strokeWidth={1} />
            {card.people}
          </p>

          <p className="flex items-center">
            <Fuel className="h-4 w-4 mr-2" strokeWidth={1} />
            {card.engine}
          </p>

          <p className="flex items-center">
            <Gauge className="h-4 w-4 mr-2" strokeWidth={1} />
            {card.cv} CV
          </p>
        </div>

        <div className="flex justify-between mt-3 gap-x-4">
          <Button variant="outline" onClick={deleteCar}>
            Delete
            <Trash className="w-4 h-4 ml-2" />
          </Button>

          <ButtonEditCar cardData={card} />
        </div>

        {card.isPublish ? (
          <Button
            className="w-full mt-3"
            variant="outline"
            onClick={() => handlerPublishCar(false)}
          >
            Unpublish
            <Upload className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            className="w-full mt-3"
            onClick={() => handlerPublishCar(true)}
          >
            Publish
            <Upload className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ListCarCard;
