import { Car } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

export interface FormEditCarProps {
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  cardData: Car;
}
