import React from "react";

export type CalendarReservationProps = React.HTMLAttributes<HTMLDivElement> & {
  setDateSelected: React.Dispatch<
    React.SetStateAction<{ from: Date; to: Date }>
  >;
  carPriceDay: string;
};
