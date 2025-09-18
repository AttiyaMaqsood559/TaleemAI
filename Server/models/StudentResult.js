import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  subject: { type: String, required: true },
  score: { type: Number, required: true },
  total: { type: Number, required: true },
  percentage: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("StudentResult", resultSchema);
