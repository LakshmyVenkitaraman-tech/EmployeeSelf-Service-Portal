import React from "react";
import { Link } from "react-router-dom";
import { FiGrid} from "react-icons/fi";
import { BsGraphUpArrow } from "react-icons/bs";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white text-black shadow-lg flex flex-col">
      <div className="flex items-center p-4 text-lg font-bold border-b">
        <img className="w-12 h-12 object-cover mr-3" src="/vite.svg" alt=" Logo"/>
        <p className="text-black font-medium">SkillMetrics</p>
      </div>

      <nav className="mt-4 flex flex-col gap-1 px-2">
        <Link to="/" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-orange-300">
          <FiGrid className="h-6 w-6" />Dashboard
        </Link>
        <Link to="/profile" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-orange-300">
          <BsGraphUpArrow className="h-6 w-6" />SkillProfile
        </Link>
      </nav>

    </aside>
  );
}
