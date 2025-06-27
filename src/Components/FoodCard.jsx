import React from "react";

export default function Grocerycard({ foodData }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <a href={foodData?.action?.link || "#"}>
        <img
          className="w-36 h-36 object-cover rounded-full shadow-md"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${foodData?.imageId}`}
          alt={foodData?.action?.text || "Grocery item"}
        />
      </a>
      <h2 className="text-sm font-medium text-center">{foodData?.action?.text || "Item"}</h2>
    </div>
  );
}

