<<<<<<< HEAD
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

=======

import React from "react";
export default function Foodcard({foodData})
{


    return(
        <>
        <a href={foodData?.action?.link}>
        <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}></img>
        </a>
        </>
    )
}
>>>>>>> 03ccca4fa39b380713cc239f206206c46a55ff94
