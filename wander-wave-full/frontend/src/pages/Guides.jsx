import { useEffect, useState } from "react"
import { api } from "../lib/api"

export default function Guides() {
  const [guides, setGuides] = useState([])
  const [filters, setFilters] = useState({ location: "", language: "" })
  const [error, setError] = useState("")

  const load = async () => {
    setError("")
    try {
      const params = new URLSearchParams()
      if (filters.location) params.append("location", filters.location)
      if (filters.language) params.append("language", filters.language)
      const data = await api(`/guides?${params.toString()}`)
      setGuides(data)
    } catch (e) {
      setError(e.message)
    }
  }

  useEffect(() => { load() }, [])

  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Tourist Guides</h2>

      <div className="grid md:grid-cols-3 gap-3 mb-6">
        <input value={filters.location} onChange={e=>setFilters({...filters,location:e.target.value})} placeholder="Filter by location" className="p-3 border rounded" />
        <input value={filters.language} onChange={e=>setFilters({...filters,language:e.target.value})} placeholder="Filter by language" className="p-3 border rounded" />
        <button onClick={load} className="bg-blue-700 text-white px-4 py-3 rounded">Search</button>
      </div>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <ul className="grid md:grid-cols-2 gap-4">
        {guides.map(g => (
          <li key={g._id} className="p-4 border rounded-lg">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold">{g.name}</h3>
              {g.verified && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Verified</span>}
            </div>
            <p className="text-sm text-gray-600 mt-1">{g.location} • {Array.isArray(g.language) ? g.language.join(", ") : ""}</p>
            <p className="mt-2">Rating: {g.rating ?? 0} ⭐</p>
            <p className="mt-1">Price/Day: ₹{g.pricePerDay ?? 0}</p>
            {g.contact && <p className="mt-1 text-sm">Contact: {g.contact}</p>}
          </li>
        ))}
      </ul>
    </section>
  )
}