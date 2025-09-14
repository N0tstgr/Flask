import { useState } from "react"
import { api } from "../lib/api"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      const res = await api("/auth/login", { method: "POST", body: { email, password } })
      localStorage.setItem("token", res.token)
      navigate("/guides")
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <section className="p-8 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6">Login</h2>
      <form className="space-y-4" onSubmit={submit}>
        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" className="w-full p-3 border rounded" required />
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" className="w-full p-3 border rounded" required />
        <button type="submit" className="bg-blue-700 text-white px-5 py-3 rounded-lg w-full">
          Login
        </button>
      </form>
      {error && <p className="mt-4 text-center text-red-600">{error}</p>}
    </section>
  )
}