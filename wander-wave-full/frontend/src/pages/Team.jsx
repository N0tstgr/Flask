export default function Team() {
  const members = [
    { name: "Code Crafter Team (CCT)", role: "Smart India Hackathon 2025" },
  ]
  return (
    <section className="p-8 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
      <div className="grid sm:grid-cols-1 gap-6">
        {members.map((m, i) => (
          <div key={i} className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">{m.name}</h3>
            <p className="text-gray-600">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}