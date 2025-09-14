import { Link, NavLink, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const NavItem = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-white text-blue-700' : 'text-white'}`
    }
  >
    {label}
  </NavLink>
)

export default function Navbar() {
  const [authed, setAuthed] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setAuthed(!!localStorage.getItem("token"))
  }, [])

  const logout = () => {
    localStorage.removeItem("token")
    setAuthed(false)
    navigate("/")
  }

  return (
    <nav className="bg-blue-700 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Wander Wave</Link>
        <div className="space-x-2 flex items-center">
          <NavItem to="/" label="Home" />
          <NavItem to="/features" label="Features" />
          <NavItem to="/how-it-works" label="How It Works" />
          <NavItem to="/guides" label="Guides" />
          <NavItem to="/impact" label="Impact" />
          <NavItem to="/team" label="Team" />
          <NavItem to="/contact" label="Contact" />
          {!authed ? (
            <>
              <NavItem to="/login" label="Login" />
              <NavItem to="/register" label="Register" />
            </>
          ) : (
            <button onClick={logout} className="ml-2 bg-white text-blue-700 px-3 py-2 rounded-md text-sm font-medium">Logout</button>
          )}
        </div>
      </div>
    </nav>
  )
}