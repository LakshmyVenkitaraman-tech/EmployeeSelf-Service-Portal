import React from "react";
import { FiChevronDown } from "react-icons/fi";

export default function Header({ userProfile }) {
  const user = userProfile || { name: "John Doe", role: "Employee" };

  return (
    <header className="sticky h-20 w-full border-gray-200 bg-gray-100 px-6">
      <div className="flex h-full items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>

           
             <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300">
              <span className="text-sm font-medium text-gray-700"></span>
            </div>
            <div className="text-right">
              <p className=" font-medium text-gray-800">{user.name}</p>
              <p className="text-sm  text-gray-600">{user.role}</p>
            </div>
            <FiChevronDown className="h-4 w-4 text-gray-600" />
          </div>
          </div>
         
        </header>
  );
}
