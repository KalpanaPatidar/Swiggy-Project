import React, { useState } from "react";
import ButtonGrocery from "./ButtonGrocery";

const groceryCities = [
  { city: "Bangalore", link: "#" },
  { city: "Gurgaon", link: "#" },
  { city: "Hyderabad", link: "#" },
  { city: "Delhi", link: "#" },
  { city: "Mumbai", link: "#" },
  { city: "Pune", link: "#" },
  { city: "Kolkata", link: "#" },
  { city: "Chennai", link: "#" },
  { city: "Ahmedabad", link: "#" },
  { city: "Chandigarh", link: "#" },
  { city: "Jaipur", link: "#" },
];

function GrocerySection() {
  const [showAll, setShowAll] = useState(false);

  const visibleCities = showAll ? groceryCities : groceryCities.slice(0, 9);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Cities with grocery delivery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {visibleCities.map((item, index) => (
          <ButtonGrocery key={index} city={item.city} link={item.link} />
        ))}
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="px-2 py-1  border border-gray-300 rounded-md text-sm font-medium text-orange-600 hover:shadow-md transition duration-200 bg-white w-[27%] text-left"
          >
            Show More <span className="inline-block transform rotate-180">⌄</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default GrocerySection;
