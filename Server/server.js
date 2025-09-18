import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDatabase from "./db/db.js";
import studentRoutes from "./routes/studentRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import learningRoutes from "./routes/learningRoutes.js";

dotenv.config();
connectToDatabase();

const app = express();
const PORT = process.env.PORT || 6161;

app.use(cors());
app.use(express.json());

app.use("/stud", studentRoutes);
app.use("/teach", teacherRoutes);
app.use("/learning", learningRoutes);

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
