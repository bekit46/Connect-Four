import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useRental } from "@/components/RentalContext";

export function DatePicker({ placeholder = "Pick a date", type = "pickUp", className, defaultValue }) {
  const [date, setDate] = useState(defaultValue || null);
  const { setRentalData } = useRental();

  // Sync local state with defaultValue
  useEffect(() => {
    setDate(defaultValue || null);
  }, [defaultValue]);

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    setRentalData(prev => ({
      ...prev,
      [type === "pickUp" ? "pickUpDate" : "dropOffDate"]: selectedDate
    }));
  };

  return (
    <div className={cn("w-full", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="flex h-14 items-center justify-start w-full pl-3 pr-2 gap-2 bg-white/90 hover:bg-gray-100 border-gray-200 text-gray-600 hover:text-black text-left font-medium rounded-l rounded-r transition-all duration-200 shadow-sm hover:shadow"
          >
            <CalendarIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
            <span className="truncate">
              {date ? format(date, "MMM d, yyyy") : placeholder}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateChange}
            initialFocus
            fromDate={new Date()} // Today
            toDate={new Date(new Date().setMonth(new Date().getMonth() + 2))} // Two months later
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DatePicker;