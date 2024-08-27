"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormAddCard from "./formAddCar/FormAddCar";

const ButtonAddCar = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpen = () => setOpenDialog(true);
  const handleClose = () => setOpenDialog(false);

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={handleOpen}>
          Add new car
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Car</DialogTitle>
          <DialogDescription>
            Complete the form below to add a new car.
          </DialogDescription>
        </DialogHeader>
        <FormAddCard setOpenDialog={setOpenDialog} />
      </DialogContent>
    </Dialog>
  );
};

export default ButtonAddCar;
