import mongoose from "mongoose"

const guideSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  language: [{ type: String }],
  verified: { type: Boolean, default: false },
  rating: { type: Number, default: 0 },
  pricePerDay: { type: Number, default: 0 },
  contact: { type: String }
}, { timestamps: true })

export default mongoose.model("Guide", guideSchema)