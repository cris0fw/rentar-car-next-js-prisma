import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "@/components/ui/use-toast";
import { Car } from "@prisma/client";

interface UseLovedCarsType {
  lovedItems: Car[];
  addLovedItems: (data: Car) => void;
  removedLovedItems: (id: string) => void;
}

export const useLovedCars = create(
  persist<UseLovedCarsType>(
    (set, get) => ({
      lovedItems: [],
      addLovedItems: (data: Car) => {
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find(
          (item) => item.id === data.id
        );

        if (existingItem) {
          return toast({
            title: "El coche ya existe en la lista",
          });
        }

        set((state) => ({
          lovedItems: state.lovedItems ? [...state.lovedItems, data] : [data],
        }));

        toast({
          title: "Coche añadido a la lista",
        });
      },
      removedLovedItems: (id: string) => {
        set((state) => ({
          lovedItems: state.lovedItems
            ? state.lovedItems.filter((item) => item.id !== id)
            : [],
        }));

        toast({
          title: "El coche se ha eliminado de la lista",
        });
      },
    }),
    {
      name: "loved-products-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
