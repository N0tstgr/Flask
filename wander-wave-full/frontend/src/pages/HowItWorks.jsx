export default function HowItWorks() {
  const steps = [
    "Sign Up and Choose Destination",
    "Get Verified Guide & Custom Itinerary",
    "Explore with AR/VR & Offline Maps",
    "Secure Bookings & Real-time Support"
  ]
  return (
    <section className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">How It Works</h2>
      <ol className="space-y-4">
        {steps.map((s, i) => (
          <li key={i} className="p-4 border rounded-lg">
            <span className="font-semibold mr-2">Step {i+1}:</span>{s}
          </li>
        ))}
      </ol>
    </section>
  )
}