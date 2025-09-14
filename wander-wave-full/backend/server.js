import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import authRoutes from "./routes/auth.js"
import guideRoutes from "./routes/guides.js"
import contactRoutes from "./routes/contact.js"

dotenv.config()
const app = express()

// Middleware
app.use(express.json())
app.use(cors({
  origin: process.env.CORS_ORIGIN || "*"
}))

// Health check
app.get("/api/health", (req, res) => res.json({ ok: true }))

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/guides", guideRoutes)
app.use("/api/contact", contactRoutes)

const PORT = process.env.PORT || 5000
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB connected")
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  } catch (err) {
    console.error("Failed to start server:", err.message)
    process.exit(1)
  }
}
start()