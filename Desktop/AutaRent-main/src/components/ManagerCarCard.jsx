import React from "react";
import { Separator } from "@/components/ui/separator";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { IoCarSport } from "react-icons/io5";
import { IoIosPricetags } from "react-icons/io";

function CarCard({ car }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-3 sm:p-4 flex flex-col items-center h-96 hover:scale-105 transition-transform"> {/* Fixed height */}
      {/* Image with Responsive Size */}
      <img
        className="mt-4 mb-2 sm:mb-4 w-full h-[70px] sm:h-[90px] object-cover rounded-md"
        src={car?.image}
        alt={car?.name}
      />

      {/* Car Name - Fixed Height for Alignment */}
      <div className="p-2 sm:p-4 w-full flex-grow">
        <h2 className="font-bold text-black text-base sm:text-lg mb-2 h-10 flex items-center justify-center text-center">
          {car?.name}
        </h2>
        <Separator />

        {/* Icons and Car Details */}
        <div className="grid grid-cols-3 mt-3 sm:mt-5 text-center gap-2 sm:gap-5 text-sm sm:text-base">
          <div className="flex flex-col items-center">
            <BsFillFuelPumpFill className="text-sm sm:text-base" />
            <h2 className="text-xs sm:text-sm">{car.fuel}</h2>
          </div>

          <div className="flex flex-col items-center">
            <GiGearStickPattern className="text-sm sm:text-base" />
            <h2 className="text-xs sm:text-sm">{car.gear}</h2>
          </div>

          <div className="flex flex-col items-center">
            <IoCarSport className="text-sm sm:text-base" />
            <h2 className="text-xs sm:text-sm">{car.type}</h2>
          </div>
        </div>

        {/* Price Section */}
        <div className="flex flex-col items-center mt-4 sm:mt-8">
          <IoIosPricetags className="text-[#0b385f] text-sm sm:text-base" />
          <h2 className="text-base sm:text-lg text-[#0b385f] font-bold">$ {car.price} /day</h2>
        </div>
      </div>
    </div>
  );
}

export default CarCard;