import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const generateLesson = async (subject) => {
  const prompt = `Explain a ${subject} lesson for grade 6-8 students in simple words with examples.`;
  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });
  return res.choices[0].message.content;
};

export const generateQuiz = async (subject) => {
  const prompt = `Create 5 multiple choice questions for ${subject} with 4 options each. Return JSON: 
  [{ "question": "...", "options": ["a","b","c","d"], "answer": "..." }]`;
  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });
  return JSON.parse(res.choices[0].message.content);
};

export const evaluateQuiz = async (subject, answers, questions) => {
  let correct = 0;
  let wrong = 0;
  let mistakes = [];

  questions.forEach((q, i) => {
    if (answers[i] === q.answer) correct++;
    else {
      wrong++;
      mistakes.push(q.question);
    }
  });

  const percentage = Math.round((correct / questions.length) * 100);

  let weakTopics = [];
  if (mistakes.length > 0) {
    const prompt = `These are the questions student got wrong in ${subject}: 
    ${mistakes.join("\n")}
    Identify weak topics in short points. Return as JSON array.`;
    const res = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });
    weakTopics = JSON.parse(res.choices[0].message.content);
  }

  return { correct, wrong, percentage, weakTopics };
};
