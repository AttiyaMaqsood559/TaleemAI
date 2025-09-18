import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import HomePage from "./components/HomePage";
import TeacherLogin from "./components/TeacherLogin";
import StudentLogin from "./components/StudentLogin";

// Teacher Dashboard Pages
// Teacher Dashboard Pages
import TeacherDashboard from "./dashboards/teacher/TeacherDashboard";
import TeacherClasses from "./dashboards/teacher/TeacherClasses";

// Student Dashboard Pages
import StudentDashboard from "./dashboards/student/Dashboard";
import Lesson from "./dashboards/student/Lesson";
import Quiz from "./dashboards/student/Quiz";
import Result from "./dashboards/student/Result";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Teacher Login + Dashboard */}
        <Route path="/teacher/login" element={<TeacherLogin />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher/classes" element={<TeacherClasses />} />

        {/* Student Login + Dashboard */}
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/lesson" element={<Lesson />} />
        <Route path="/student/quiz" element={<Quiz />} />
        <Route path="/student/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
