import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    secretKey: { type: String, required: true },
  },
  { collection: "myteachers" }
);

export default mongoose.model("Teacher", teacherSchema);
