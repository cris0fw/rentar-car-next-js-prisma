import React from "react";
import { ListCarProps } from "./ListCar.type";
import ListCarCard from "./ListCarCard";

const ListCar = (props: ListCarProps) => {
  const { cars } = props;

  return (
    <div className="grid grid-cols-2 gap-6 my-4 lg:grid-cols-4">
      {cars.map((car) => (
        <ListCarCard key={car.id} card={car} />
      ))}
    </div>
  );
};

export default ListCar;
