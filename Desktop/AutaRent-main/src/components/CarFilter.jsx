import React, { useState } from "react";
import CustomSwitch from "./Switch";
import SinglePriceSlider from "./Slider";
import Data from "../Shared/Data.jsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter, X } from "lucide-react";

function CarFilter({
  selectedPrice,
  setSelectedPrice,
  selectedBrand,
  setSelectedBrand,
  selectedFuel,
  setSelectedFuel,
  selectedType,
  setSelectedType,
  isAutomatic,
  setIsAutomatic,
  handleReset,
}) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      {/* Mobile Filter Button (visible on small screens) */}
      <div className="lg:hidden flex justify-end p-4">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-md"
        >
          <Filter size={18} />
          <span>Filters</span>
        </button>
      </div>

      {/* Desktop Filter Bar (always visible on large screens) */}
      <div className={`
        lg:flex bg-white bg-opacity-90 rounded-xl shadow-lg max-w-screen-xl mx-auto transition-all
        hidden p-4 items-center justify-between gap-2 xl:gap-4
      `}>
        <Select value={selectedBrand} onValueChange={setSelectedBrand}>
          <SelectTrigger className="outline-none border-none shadow-none text-base font-medium min-w-[100px] xl:min-w-[120px]">
            <SelectValue placeholder="Brand" />
          </SelectTrigger>
          <SelectContent className="bg-white z-50 shadow-lg rounded-md">
            {Data.CarBrands.map((brands) => (
              <SelectItem className="hover:bg-blue-500" ey={brands.id} value={brands.name}>
                {brands.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedFuel} onValueChange={setSelectedFuel}>
          <SelectTrigger className="outline-none border-none shadow-none text-base font-medium min-w-[100px] xl:min-w-[120px]">
            <SelectValue placeholder="Fuel Type" />
          </SelectTrigger>
          <SelectContent className="bg-white z-50 shadow-lg rounded-md">
            {Data.CarFuelType.map((fuel) => (
              <SelectItem key={fuel.id} value={fuel.name}>
                {fuel.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger className="outline-none border-none shadow-none text-base font-medium min-w-[100px] xl:min-w-[120px]">
            <SelectValue placeholder="Car Type" />
          </SelectTrigger>
          <SelectContent className="bg-white z-50 shadow-lg rounded-md">
            {Data.CarType.map((Type) => (
              <SelectItem key={Type.id} value={Type.name}>
                {Type.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex-grow flex justify-center max-w-[300px]">
          <SinglePriceSlider
            min={0}
            max={500}
            value={selectedPrice}
            onChange={setSelectedPrice}
          />
        </div>

        <div className="hidden xl:block">
          <CustomSwitch isAutomatic={isAutomatic} setIsAutomatic={setIsAutomatic} />
        </div>

        <button
          onClick={handleReset}
          className="bg-royalblue text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition text-sm whitespace-nowrap"
        >
          Reset
        </button>
      </div>

      {/* Mobile Filter Panel (slides in from bottom on small screens) */}
      <div className={`
        lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-2xl z-50 transition-transform duration-300
        ${isFilterOpen ? 'translate-y-0' : 'translate-y-full'}
        p-4 max-h-[90vh] overflow-auto
      `}>
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h2 className="text-lg font-bold">Filter Cars</h2>
          <button onClick={() => setIsFilterOpen(false)} className="p-1">
            <X size={24} />
          </button>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <label className="font-medium text-sm">Brand</label>
            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger className="w-full border-0 bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg">
                <SelectValue placeholder="Select Brand" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {Data.CarBrands.map((brands) => (
                  <SelectItem key={brands.id} value={brands.name}>
                    {brands.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="font-medium text-sm">Fuel Type</label>
            <Select value={selectedFuel} onValueChange={setSelectedFuel}>
              <SelectTrigger className="w-full border-0 bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg">
                <SelectValue placeholder="Select Fuel Type" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {Data.CarFuelType.map((fuel) => (
                  <SelectItem key={fuel.id} value={fuel.name}>
                    {fuel.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="font-medium text-sm">Car Type</label>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full border-0 bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg">
                <SelectValue placeholder="Select Car Type" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {Data.CarType.map((Type) => (
                  <SelectItem key={Type.id} value={Type.name}>
                    {Type.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="font-medium text-sm">Price Range</label>
            <SinglePriceSlider
              min={0}
              max={500}
              value={selectedPrice}
              onChange={setSelectedPrice}
            />
          </div>

          <div className="flex justify-center items-center py-2">
            <CustomSwitch isAutomatic={isAutomatic} setIsAutomatic={setIsAutomatic} />
          </div>

          <div className="flex gap-4 pt-2">
            <button
              onClick={() => {
                handleReset();
                setIsFilterOpen(false);
              }}
              className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
            >
              Reset
            </button>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="flex-1 bg-royalblue text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarFilter;