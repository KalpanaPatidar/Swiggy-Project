<<<<<<< HEAD
import diningOptions from '../Utils/DineData';
=======
import dineoutRestaurants  from '../Utils/DineData';
>>>>>>> 03ccca4fa39b380713cc239f206206c46a55ff94
import React from "react";

import Dinecard from "./DineCard";

export default function DineOption({}) {
  return (

    <div className="w-full px-4 md:px-10 lg:px-20 mt-20">
      <h1 className="text-2xl font-bold mb-6">Discover best restaurants on Dineout</h1>

      <div className="flex flex-nowrap gap-6 overflow-x-auto no-scrollbar pb-4">
<<<<<<< HEAD
        {diningOptions.map((RestData) => (
=======
        {dineoutRestaurants.map((RestData) => (
>>>>>>> 03ccca4fa39b380713cc239f206206c46a55ff94
        
            <Dinecard key={RestData?.info?.id} RestData={RestData} />
        
        ))}
      </div>
    </div>
  );
}
