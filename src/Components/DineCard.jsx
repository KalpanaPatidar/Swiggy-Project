 import React from "react";
export default function Dinecard({ RestData }) {
  return (
    <div className="max-w-sm">
      <div>
        <img
          className="w-36 h-36 object-cover rounded-full shadow-md"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${RestData?.mediaFiles?.url}`}
          alt={RestData?.info?.name}
        />
        <p>{RestData?.info?.name}</p>
        <p>Rating: {RestData?.info?.rating?.value}</p>
        <p>Reviews: {RestData?.info?.rating?.count}</p>
        <p>{RestData?.info?.rating?.countDescription}</p>
      </div>
    </div>
  );
}
