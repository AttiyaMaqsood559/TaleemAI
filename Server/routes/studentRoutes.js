import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, rollNo } = req.body;

  try {
    const student = await Student.findOne({ name, rollNo });

    if (!student) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Name or Roll No" });
    }

    res.json({ success: true, message: "Login successful", student });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
});

export default router;
