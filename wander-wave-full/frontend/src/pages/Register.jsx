import { useState } from "react"
import { api } from "../lib/api"
import { useNavigate } from "react-router-dom"

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" })
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await api("/auth/register", { method: "POST", body: form })
      navigate("/login")
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <section className="p-8 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6">Register</h2>
      <form className="space-y-4" onSubmit={submit}>
        <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} type="text" placeholder="Name" className="w-full p-3 border rounded" required />
        <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} type="email" placeholder="Email" className="w-full p-3 border rounded" required />
        <input value={form.password} onChange={e=>setForm({...form,password:e.target.value})} type="password" placeholder="Password" className="w-full p-3 border rounded" required />
        <button type="submit" className="bg-blue-700 text-white px-5 py-3 rounded-lg w-full">
          Create Account
        </button>
      </form>
      {error && <p className="mt-4 text-center text-red-600">{error}</p>}
    </section>
  )
}