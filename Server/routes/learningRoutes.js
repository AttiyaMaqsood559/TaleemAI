import express from "express";

import {
  generateLesson,
  generateQuiz,
  submitQuiz,
} from "../controllers/learningController.js";

const router = express.Router();

router.post("/lesson", generateLesson);
router.post("/quiz", generateQuiz);
router.post("/submit", submitQuiz);

export default router;
