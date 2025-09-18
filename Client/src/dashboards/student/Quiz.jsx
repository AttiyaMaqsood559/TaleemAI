import { useEffect, useState } from "react";
import { getQuiz, submitQuiz } from "../../components/services/api";
import Result from "./Result";

const Quiz = ({ subject, goBack }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const studentName = localStorage.getItem("studentName") || "Student";

  useEffect(() => {
    (async () => {
      try {
        const res = await getQuiz(subject);
        if (res.quiz) {
          setQuestions(res.quiz);
        } else {
          setError("❌ No quiz found for this subject.");
        }
      } catch (err) {
        console.error("❌ Error fetching quiz:", err);
        setError("❌ Error fetching quiz.");
      }
      setLoading(false);
    })();
  }, [subject]);

  const handleSubmit = async () => {
    try {
      const res = await submitQuiz(subject, questions, answers, studentName);
      setResult(res);
    } catch (err) {
      console.error("❌ Error submitting quiz:", err);
      setError("❌ Error submitting quiz.");
    }
  };

  if (result)
    return <Result subject={subject} result={result} goBack={goBack} />;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-3xl">
      <h2 className="text-3xl font-bold mb-4">{subject} Quiz</h2>

      {loading ? (
        <p>Loading quiz...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        questions.map((q, i) => (
          <div key={i} className="mb-4">
            <p className="font-semibold">
              {i + 1}. {q.question}
            </p>
            {q.options.map((opt, j) => (
              <label key={j} className="block">
                <input
                  type="radio"
                  name={`q${i}`}
                  value={opt}
                  checked={answers[i] === opt}
                  onChange={() => setAnswers({ ...answers, [i]: opt })}
                />{" "}
                {opt}
              </label>
            ))}
          </div>
        ))
      )}

      {!loading && !error && questions.length > 0 && (
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-6 py-3 rounded-xl mt-4"
        >
          Submit
        </button>
      )}

      <button
        onClick={goBack}
        className="ml-4 bg-gray-400 text-white px-6 py-3 rounded-xl mt-4"
      >
        Back
      </button>
    </div>
  );
};

export default Quiz;
