export default function Features() {
  const features = [
    "Verified Local Guides",
    "Secure Stays & Bookings",
    "Authentic Experiences (food, culture, activities)",
    "GPS “Near Me” & Itinerary Planner",
    "Multi-language Support",
    "Offline Maps",
    "AR/VR Exploration"
  ]
  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Features</h2>
      <ul className="grid md:grid-cols-2 gap-4">
        {features.map((f, i) => (
          <li key={i} className="p-4 border rounded-lg">{f}</li>
        ))}
      </ul>
    </section>
  )
}