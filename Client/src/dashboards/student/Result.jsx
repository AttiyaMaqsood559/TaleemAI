import React, { useState } from "react";
import Lesson from "./Lesson";

const Result = ({ subject, result, goBack }) => {
  const { correct, wrong, percentage, weakTopics } = result;
  const [selectedTopic, setSelectedTopic] = useState(null);

  if (selectedTopic) {
    return (
      <Lesson subject={selectedTopic} goBack={() => setSelectedTopic(null)} />
    );
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-3xl">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        {subject} Quiz Results
      </h2>
      <p className="text-lg mb-2">✅ Correct: {correct}</p>
      <p className="text-lg mb-2">❌ Wrong: {wrong}</p>
      <p className="text-lg mb-4">📊 Percentage: {percentage}%</p>

      {weakTopics && weakTopics.length > 0 ? (
        <>
          <p className="text-red-600 mt-4 mb-2 font-semibold">Weak Topics:</p>
          <ul className="list-disc ml-6">
            {weakTopics.map((topic, i) => (
              <li key={i}>
                <button
                  className="text-blue-500 underline"
                  onClick={() => setSelectedTopic(topic)}
                >
                  {topic}
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-green-600 mt-4 font-semibold">
          Excellent! You mastered this topic 🎉
        </p>
      )}

      <button
        onClick={goBack}
        className="mt-6 bg-blue-500 px-6 py-3 rounded-xl text-white"
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default Result;
