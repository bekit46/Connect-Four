import React, { useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin } from "lucide-react";
import Data from "../Shared/Data.jsx";
import { cn } from "@/lib/utils";
import { useRental } from "@/components/RentalContext";

function Search({ placeholder = "Select Location", type = "pickUp", className, defaultValue }) {
  const { setRentalData } = useRental();

  useEffect(() => {
    if (defaultValue) {
      setRentalData(prev => ({
        ...prev,
        [type === "pickUp" ? "pickUpLocation" : "dropOffLocation"]: defaultValue
      }));
    }
  }, [defaultValue, setRentalData, type]);

  const handleLocationChange = (location) => {
    setRentalData(prev => ({
      ...prev,
      [type === "pickUp" ? "pickUpLocation" : "dropOffLocation"]: location
    }));
  };

  return (
    <div className={cn("w-full", className)}>
      <Select onValueChange={handleLocationChange} value={defaultValue || ""}>
        <SelectTrigger
          className={cn(
            "flex h-14 items-center justify-start w-full pl-3 pr-2 gap-2",
            "bg-white/90 hover:bg-white border border-gray-200",
            "text-left font-medium text-gray-600 hover:text-gray-800",
            "rounded-l rounded-r transition-all duration-200",
            "shadow-sm hover:shadow"
          )}
        >
          <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="bg-white rounded-l rounded-r shadow-lg border border-gray-200 max-h-80 overflow-y-auto">
          {Data.Locations.map((location) => (
            <SelectItem key={location.id} value={location.name} className="py-2 px-3 cursor-pointer hover:bg-blue-50 transition-colors">
              <div className="flex items-center gap-2">
                <span className="font-medium">{location.name}</span>
                {location.airport && (
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                    Airport
                  </span>
                )}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default Search;