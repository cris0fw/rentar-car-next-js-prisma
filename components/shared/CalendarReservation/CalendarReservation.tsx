"use client";
import React, { useEffect, useState } from "react";
import { CalendarReservationProps } from "./CalendarReservation.types";
import { CalendarIcon } from "lucide-react";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const CalendarReservation = (props: CalendarReservationProps) => {
  const { setDateSelected, className, carPriceDay } = props;
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });

  useEffect(() => {
    if (date?.from && date?.to) {
      setDateSelected({ from: date.from, to: date.to });
    }
  }, [date, setDateSelected]);

  const calculateDayBetween = (from: Date, to: Date): number => {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffInTime = Math.abs(to.getTime() - from.getTime());
    return Math.ceil(diffInTime / oneDay);
  };

  const daysBetween =
    date?.from && date?.to ? calculateDayBetween(date.from, date.to) : 0;

  const totalPrice = daysBetween * (Number(carPriceDay) || 0);

  return (
    <>
      <div className={cn("grid gap-2", className)}>
        {date?.from && date?.to && (
          <>
            <p className="mt-4 text-lg text-black">
              Dias totales {daysBetween}{" "}
            </p>
            <p className="mb-4 text-md">
              Precio total: {totalPrice}$USD (Imp. incluidos)
            </p>
          </>
        )}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant="outline"
              className={cn(
                "justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="w-4 h-4 mr-2" />

              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd y")} - {""}
                    {format(date.to, "LLL dd, y")} - {""}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default CalendarReservation;
