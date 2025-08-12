import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SkillMetricsDashboard from "../components/SkillMatrixDashboard";


export default function MainLayout() {
  return (
          <div className="flex bg-grey-300">
          <Sidebar />
         <div  className="grid grid-row ">
        <Header title="Dashboard" />
        <main className="p-5">
       <SkillMetricsDashboard />
        </main>
         </div>
        </div>
  );
}
















// flex flex-col flex-1