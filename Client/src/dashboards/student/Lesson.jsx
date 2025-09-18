import { useEffect, useState } from "react";
import { getLesson } from "../../components/services/api";
import Quiz from "./Quiz";

const Lesson = ({ subject, goBack }) => {
  const [lesson, setLesson] = useState("");
  const [loading, setLoading] = useState(true);
  const [startQuiz, setStartQuiz] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await getLesson(subject);
        setLesson(res.lesson);
      } catch (err) {
        console.error("❌ Error fetching lesson:", err);
        setLesson("❌ Error fetching lesson.");
      }
      setLoading(false);
    })();
  }, [subject]);

  if (startQuiz) return <Quiz subject={subject} goBack={goBack} />;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-3xl">
      <h2 className="text-3xl font-bold mb-4">{subject} Lesson</h2>
      {loading ? <p>Loading lesson...</p> : <p>{lesson}</p>}

      <div className="mt-4">
        <button
          onClick={() => setStartQuiz(true)}
          className="bg-blue-500 text-white px-6 py-3 rounded-xl"
        >
          Start Quiz
        </button>
        <button
          onClick={goBack}
          className="ml-4 bg-gray-400 text-white px-6 py-3 rounded-xl"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Lesson;
