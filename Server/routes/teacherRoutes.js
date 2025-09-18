import express from "express";
import Teacher from "../models/Teacher.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, secretKey } = req.body;

  try {
    console.log("📥 Login request received:", req.body);
    const teacher = await Teacher.findOne({
      name,

      secretKey,
    });
    console.log("🔍 Query used:", { name, secretKey });
    console.log("📦 Teacher found:", teacher);

    if (!teacher) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid name or cnic or key" });
    }

    res.json({ success: true, message: "Login successful", teacher });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
});

export default router;
