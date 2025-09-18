import {
  generateLesson as lessonAI,
  generateQuiz as quizAI,
  evaluateQuiz,
} from "../services/learningService.js";
import StudentResult from "../models/StudentResult.js";

// ✅ Generate Lesson
export const generateLesson = async (req, res) => {
  const { subject } = req.body;
  if (!subject) return res.status(400).json({ error: "Subject is required" });

  try {
    const lesson = await lessonAI(subject);
    res.json({ lesson });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Lesson generation failed", details: err.message });
  }
};

// ✅ Generate Quiz
export const generateQuiz = async (req, res) => {
  const { subject } = req.body;
  if (!subject) return res.status(400).json({ error: "Subject is required" });

  try {
    const quiz = await quizAI(subject);
    res.json({ quiz });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Quiz generation failed", details: err.message });
  }
};

export const submitQuiz = async (req, res) => {
  const { studentName, subject, quiz, answers } = req.body;
  if (!studentName || !subject || !quiz || !answers)
    return res.status(400).json({ error: "All fields are required" });

  try {
    const evaluation = await evaluateQuiz(subject, answers, quiz);

    const result = new StudentResult({
      studentName,
      subject,
      score: evaluation.correct,
      total: quiz.length,
      percentage: evaluation.percentage,
    });
    await result.save();

    res.json({ ...evaluation });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Quiz submission failed", details: err.message });
  }
};
