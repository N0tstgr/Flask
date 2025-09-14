import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section className="text-center p-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-blue-700">Welcome to Wander Wave</h2>
        <p className="mt-4 text-xl">Your Journey, Our Guidance</p>
        <p className="mt-4 text-gray-700">
          Smart Tourist Guide System for safe, authentic, and immersive travel.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <FeatureCard title="Verified Guides" desc="Background-checked and trusted local experts." />
          <FeatureCard title="Secure Stays" desc="Handpicked, safe, and reliable accommodations." />
          <FeatureCard title="AR/VR Tours" desc="Explore culture and history with immersive tech." />
        </div>

        <div className="mt-10 space-x-4">
          <Link to="/guides" className="bg-blue-700 text-white px-5 py-3 rounded-lg shadow">
            Find Guides
          </Link>
          <Link to="/contact" className="border border-blue-700 text-blue-700 px-5 py-3 rounded-lg">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ title, desc }) {
  return (
    <div className="p-6 border rounded-xl shadow-sm text-left">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{desc}</p>
    </div>
  )
}