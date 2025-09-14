import express from "express"
import Contact from "../models/Contact.js"

const router = express.Router()

router.post("/", async (req, res) => {
  try {
    const saved = await Contact.create(req.body)
    res.json(saved)
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

export default router