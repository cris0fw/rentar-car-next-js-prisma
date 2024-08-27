import { Car } from "@prisma/client";

export interface ListCarProps {
  cars: Car[];
}

export interface ListCarCardProps {
  card: {
    id: string;
    userId: string;
    name: string;
    cv: string;
    transmission: string;
    people: string;
    photo: string;
    priceDay: string;
    engine: string;
    type: string;
    isPublish: boolean | null;
    createdAt: Date;
    updatedAt: Date;
  };
}

export interface ButtonEditCarProps {
  cardData: Car;
}
