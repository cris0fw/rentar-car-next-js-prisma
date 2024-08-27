import React from "react";
import { ButtonEditCarProps } from "./ListCar.type";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { useState } from "react";
import FormEditCar from "./FormEditCar/FormEditCar";

const ButtonEditCar = (props: ButtonEditCarProps) => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpen = () => setOpenDialog(true);
  const handleClose = () => setOpenDialog(false);

  const { cardData } = props;

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={handleOpen}>
          Edit
          <Pencil className="w-4 h-4 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit car</DialogTitle>
          <DialogDescription>Edit the car now</DialogDescription>
        </DialogHeader>
        <FormEditCar setOpenDialog={setOpenDialog} cardData={cardData} />
      </DialogContent>
    </Dialog>
  );
};

export default ButtonEditCar;
