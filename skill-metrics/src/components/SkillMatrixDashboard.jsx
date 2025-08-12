import React, { useEffect, useState } from "react";
import { FiTrendingUp, FiStar, FiBriefcase } from "react-icons/fi";
import DashboardCard from "../components/DashboardCard/index";

export default function SkillMetricsDashboard() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setError(null);
        setLoading(true);
        const res = await fetch("https://insights-api.terrificminds.com/v1/skills");
        const data = await res.json();
        setSkills(Array.isArray(data&&data.data) ? data.data : []);
      } catch (err) {
        setError("Failed to load skills");
        setSkills([]);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-6 ">
<DashboardCard title="Total Skills" value={skills.length} gradientClass="bg-gradient-to-br from-orange-500 to-orange-600" icon={<FiTrendingUp className="h-6 w-6" />}/>
<DashboardCard title="Average Rating" gradientClass="bg-gradient-to-br from-purple-500 to-purple-600" icon={<FiStar className="h-6 w-6" />}/>
<DashboardCard title="Years of Experience" gradientClass="bg-gradient-to-br from-teal-500 to-teal-600" icon={<FiBriefcase className="h-6 w-6" />}/>
      </div>
         <div className="mx-auto mt-6 max-w-6xl rounded-xl bg-white p-6 shadow">
          <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">Top Skills</h2>
          <button className="text-sm font-semibold text-orange-500 hover:text-orange-600">VIEW ALL</button>
        </div>
      </div>
    </div>
  );
}
