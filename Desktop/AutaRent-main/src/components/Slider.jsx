import React from "react";

const SinglePriceSlider = ({
  min = 0,
  max = 1000,
  step = 10,
  trackColor = "#e0e0e0",
  rangeColor = "#007bff",
  currencyText = "$",
  value,
  onChange,
}) => {
  const handleChange = (event) => {
    const newValue = Number(event.target.value);
    onChange(newValue);
  };

  return (
    <div className="w-full flex flex-col items-center space-y-2">
      {/* Display selected value */}
      <div className="flex items-center gap-1 md:gap-2 w-full justify-center">
        <span className="text-sm md:text-base font-medium whitespace-nowrap">
          {currencyText} {value.toLocaleString()}
        </span>
        <span className="text-xs md:text-sm text-gray-500 whitespace-nowrap">
          Maximum Price
        </span>
      </div>

      {/* Slider */}
      <div className="relative w-full max-w-[300px] h-6 flex items-center px-2">
        {/* Gray track bar */}
        <div className="absolute w-full h-[4px] bg-gray-300 rounded-full"></div>

        {/* Blue progress bar */}
        <div
          className="absolute h-[4px] bg-royalblue rounded-full"
          style={{
            width: `${((value - min) / (max - min)) * 100}%`,
          }}
        />

        {/* Slider input (thumb) */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className="absolute w-full h-4 appearance-none bg-transparent cursor-pointer z-4 
                     [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 
                     [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-royalblue 
                     [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer
                     [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white
                     [&::-webkit-slider-thumb]:shadow-md"
        />
      </div>
    </div>
  );
};

export default SinglePriceSlider;