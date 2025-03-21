import { Separator } from "@/components/ui/separator"; // ✅ Import from ShadCN
import React from "react";

function AdsItem({ ads }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden max-w-sm mx-auto">
      {/* Image */}
      <img
        src={ads.image}
        alt={ads.text}
        width={300}
        height={250}
        className="w-full h-56 object-cover rounded-t-xl"
      />
      {/* Separator */}
      <Separator className="my-3 bg-gray-300" />

      {/* Content */}
      <div className="p-4 text-center">
        <h2 className="text-gray-800 text-xl font-semibold">{ads.text}</h2>
      </div>
    </div>
  );
}

export default AdsItem;
