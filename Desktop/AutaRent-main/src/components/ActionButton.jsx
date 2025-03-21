import React from "react";
import { Button } from "@/components/ui/button";
import { FaInfoCircle } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoMdAddCircle } from "react-icons/io";

function ActionButton({ type, onClick }) {
  let icon, text;
  let bgColor, hoverColor, size;

  switch (type) {
    case "add":
      icon = <IoMdAddCircle className="text-2xl group-hover:opacity-0" />;
      text = "Add New Car";
      bgColor = "bg-green-500";
      hoverColor = "hover:bg-green-600";
      break;
    case "info":
      icon = <FaInfoCircle className="text-2xl group-hover:opacity-0" />;
      text = "Info";
      bgColor = "bg-blue-500";
      hoverColor = "hover:bg-blue-600";
      break;
    case "update":
      icon = <MdUpdate className="text-2xl group-hover:opacity-0" />;
      text = "Update";
      bgColor = "bg-yellow-500";
      hoverColor = "hover:bg-yellow-600";
      break;
    case "delete":
      icon = <RiDeleteBin6Fill className="text-2xl group-hover:opacity-0" />;
      text = "Delete";
      bgColor = "bg-red-500";
      hoverColor = "hover:bg-red-600";
      break;
    default:
      break;
  }

  if(type == "add")
    size = "w-[1250px]"
  else
    size = "w-48"

  return (
    <Button
      className={`relative group ${bgColor} text-white text-lg ${size} rounded-[8px] ${hoverColor} focus:outline-none transition-all duration-300 ease-in-out`}
      onClick={onClick}
    >
      {icon}
      <span className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {text}
      </span>
    </Button>
  );
}

export default ActionButton;
