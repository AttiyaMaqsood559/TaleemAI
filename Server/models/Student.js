import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rollNo: { type: String, required: true },
  },
  { collection: "mystudents" }
);

export default mongoose.model("Student", studentSchema);
