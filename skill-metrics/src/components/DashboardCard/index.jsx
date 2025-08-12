import React from "react";

export default function DashboardCard({ title, value, icon = null,  gradientClass }) {
  return (
     <div className={`relative overflow-hidden rounded-xl p-6 text-white ${gradientClass}`}> 
     <div className="relative  flex items-center justify-between">
        <div>
          <p className="text-sm opacity-80">{title}</p>
          <p className="mt-1 text-3xl font-bold ">{value}</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center ">
          {icon}
        </div>
      </div>
    </div>
  );
}