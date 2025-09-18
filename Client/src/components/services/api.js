import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:6161/learning" });

export const getLesson = async (subject) => {
  const res = await API.post("/lesson", { subject });
  return res.data; // { lesson: "..." }
};

export const getQuiz = async (subject) => {
  const res = await API.post("/quiz", { subject });
  return res.data; // { quiz: [...] }
};

export const submitQuiz = async (subject, quiz, answers, studentName) => {
  const res = await API.post("/submit", {
    subject,
    quiz,
    answers,
    studentName,
  });
  return res.data; // { correct, wrong, percentage, weakTopics }
};

export default API;
