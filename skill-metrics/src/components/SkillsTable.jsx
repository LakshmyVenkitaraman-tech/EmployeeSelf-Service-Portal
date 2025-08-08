export default function SkillsTable({ skills }) {
  return (
    <table className="min-w-full border">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 text-left">Skill</th>
          <th className="p-2">Rating</th>
          <th className="p-2">Years of Experience</th>
          <th className="p-2">Skill Level</th>
        </tr>
      </thead>
      <tbody>
        {skills.map((skill, idx) => (
          <tr key={idx} className="border-t">
            <td className="p-2">{skill.name}</td>
            <td className="p-2">{skill.rating}</td>
            <td className="p-2">{skill.years}</td>
            <td className="p-2">{skill.level}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
