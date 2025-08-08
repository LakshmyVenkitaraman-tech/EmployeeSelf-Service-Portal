import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r">
    <div className="p-4 font-bold text-orange-500">Skill Metrics</div>
    <nav className="flex flex-col p-2 space-y-2">
    <Link to="/" className="p-2 rounded hover:bg-orange-100">Dashboard</Link>
    <Link to="/skill-profile" className="p-2 rounded hover:bg-orange-100">Skill Profile</Link>
    </nav>
    </aside>
  )
}
