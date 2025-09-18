import React, { useState } from "react";
import { motion } from "framer-motion";
import Lesson from "./Lesson";

const subjects = [
  { name: "Math", color: "bg-red-400" },
  { name: "Science", color: "bg-green-400" },
  { name: "English", color: "bg-blue-400" },
  { name: "Computer", color: "bg-purple-400" },
];

const Dashboard = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200 flex flex-col items-center justify-start p-6">
      {!selectedSubject ? (
        <>
          <h1 className="text-4xl font-bold mb-10 animate-pulse text-gray-800">
            Welcome to Your Learning Dashboard!
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className={`relative ${subject.color} rounded-3xl shadow-2xl flex items-center justify-center h-48 cursor-pointer`}
                onClick={() => setSelectedSubject(subject.name)}
              >
                <h2 className="text-2xl font-extrabold text-white">
                  {subject.name}
                </h2>
              </motion.div>
            ))}
          </div>
        </>
      ) : (
        <Lesson
          subject={selectedSubject}
          goBack={() => setSelectedSubject(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;
