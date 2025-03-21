import { GiGearStickPattern } from "react-icons/gi";

export function CustomSwitch({ isAutomatic, setIsAutomatic }) {
  const toggleGearFilter = () => {
    setIsAutomatic((prev) => !prev); // Toggle the `isAutomatic` state
  };

  return (
    <div className="flex items-center justify-between w-[220px]">
      {/* Gear Icon and Text with Proper Alignment */}
      <div className="flex items-center gap-2 min-w-[130px]">
        <div className="flex items-center justify-center w-[30px] h-[30px]">
          <GiGearStickPattern size={30} className="text-gray-700" />
        </div>
        <span className="text-gray-700 font-medium">
          {isAutomatic ? "Automatic Only" : "All Gears"}
        </span>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleGearFilter}
        className={`w-16 h-8 flex items-center rounded-full p-1 transition duration-200 ${isAutomatic ? 'bg-royalblue' : 'bg-gray-500'}`}
      >
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition duration-200 ${isAutomatic ? 'translate-x-[1.8rem]' : 'translate-x-0'}`}
        ></div>
      </button>



    </div>
  );
}

export default CustomSwitch;
