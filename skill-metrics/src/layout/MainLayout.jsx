import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
    <Header />
    <main className="flex-1 overflow-auto p-4 bg-gray-50">
    <Outlet />
    </main>
    </div>
    </div>
  )
}
