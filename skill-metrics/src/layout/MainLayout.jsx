import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex bg-grey-300">
      <Sidebar />
      <div className="grid grid-row ">
        <Header />
        <main className="p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
















// flex flex-col flex-1