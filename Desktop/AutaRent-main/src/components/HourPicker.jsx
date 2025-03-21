import React, { useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock } from "lucide-react";
import Data from "../Shared/Data.jsx";
import { cn } from "@/lib/utils";
import { useRental } from "@/components/RentalContext";

function HourPicker({ placeholder = "Select Hour", type = "pickUp", className, defaultValue }) {
  const { setRentalData } = useRental();

  useEffect(() => {
    if (defaultValue) {
      setRentalData(prev => ({
        ...prev,
        [type === "pickUp" ? "pickUpTime" : "dropOffTime"]: defaultValue
      }));
    }
  }, [defaultValue, setRentalData, type]);

  const handleHourChange = (hour) => {
    setRentalData(prev => ({
      ...prev,
      [type === "pickUp" ? "pickUpTime" : "dropOffTime"]: hour
    }));
  };

  return (
    <div className={cn("w-full", className)}>
      <Select onValueChange={handleHourChange} value={defaultValue || ""}>
        <SelectTrigger className="flex h-14 items-center justify-start w-full pl-3 pr-2 gap-2 bg-white/90 hover:bg-white border border-gray-200 text-left font-medium text-gray-600 hover:text-gray-800 rounded-l rounded-r transition-all duration-200 shadow-sm hover:shadow">
          <Clock className="h-5 w-5 text-blue-600 flex-shrink-0" />
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <div className="grid grid-cols-2 gap-1 p-1">
            {Data.Hours.map((hour) => (
              <SelectItem key={hour.id} value={hour.time}>
                {hour.time}
              </SelectItem>
            ))}
          </div>
        </SelectContent>
      </Select>
    </div>
  );
}

export default HourPicker;