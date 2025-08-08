export default function DashboardCard({ title, value, icon, color }) {
  return (
    <div className={`p-4 rounded-xl shadow-md text-white ${color}`}>
    <div className="flex items-center gap-3">
    {icon && <span className="text-2xl">{icon}</span>}
    <div>
        <h3 className="text-sm">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
}
