import React from 'react'
import { LiaMaleSolid } from "react-icons/lia";
import { LiaFemaleSolid } from "react-icons/lia";

const DashboardCardGender = ({title, description, male, female}) => {
  return (
      <div className="bg-white shadow-md p-4 rounded-lg border-[0.1px] border-black border-opacity-60">
          <h3 className="text-gray-700 text-sm font-semibold">{title}</h3>
          <div className="flex flex-row gap-6 items-center">
              <p className="text-2xl font-bold gap-2 flex"><LiaMaleSolid size={25}/>{male}</p>
              <p className="text-2xl font-bold gap-2 flex"><LiaFemaleSolid size={25}/>{female}</p>
          </div>

          <span className="text-gray-500 text-xs">{description}</span>
      </div>
  );
}

export default DashboardCardGender
