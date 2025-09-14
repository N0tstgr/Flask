export default function Impact() {
  const benefits = [
    "Improves Travel Safety and Satisfaction",
    "Boosts Local Economy & Tourism Sector",
    "Encourages Cultural Understanding",
    "Promotes Sustainable Tourism Practices"
  ]
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Impact & Benefits</h2>
      <ul className="grid md:grid-cols-2 gap-4">
        {benefits.map((b, i) => (
          <li key={i} className="p-4 border rounded-lg">{b}</li>
        ))}
      </ul>
    </section>
  )
}