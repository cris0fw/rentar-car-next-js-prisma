import { Car } from "@prisma/client";

export interface ListCarsProps {
  cars: Car[] | undefined;
}
