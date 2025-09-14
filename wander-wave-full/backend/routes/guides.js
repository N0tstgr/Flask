import express from "express"
import Guide from "../models/Guide.js"
import { requireAuth } from "../config/authMiddleware.js"

const router = express.Router()

// Public: get all guides (with optional filters)
router.get("/", async (req, res) => {
  const { location, language } = req.query
  const q = {}
  if (location) q.location = new RegExp(location, "i")
  if (language) q.language = { $in: [new RegExp(language, "i")] }
  const guides = await Guide.find(q).sort({ rating: -1 })
  res.json(guides)
})

// Protected: create guide
router.post("/", requireAuth, async (req, res) => {
  try {
    const guide = await Guide.create(req.body)
    res.json(guide)
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

export default router