import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePage() {
  const navigate = useNavigate();

  const buttonVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, 5, -5, 0],
      transition: { duration: 0.5, repeat: Infinity },
    },
    tap: { scale: 0.9 },
  };

  const circleVariants = {
    animate: (i) => ({
      y: [0, -20 + i * 5, 0],
      x: [0, 15 - i * 5, -15 + i * 5, 0],
      transition: { yoyo: Infinity, duration: 4 + i, ease: "easeInOut" },
    }),
  };

  return (
    <div style={styles.container}>
      {["#FFB6C1", "#87CEFA", "#FFD700", "#ADFF2F", "#FFA07A"].map(
        (color, idx) => (
          <motion.div
            key={idx}
            style={{
              ...styles.circle,
              backgroundColor: color,
              top: `${10 + idx * 15}%`,
              left: `${15 + idx * 12}%`,
            }}
            variants={circleVariants}
            custom={idx}
            animate="animate"
          />
        )
      )}

      {/* Heading */}
      <motion.h1
        style={styles.heading}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 10 }}
      >
        Welcome to Smart School!
      </motion.h1>

      {/* Buttons */}
      <div style={styles.buttonGroup}>
        <motion.button
          style={{ ...styles.button, backgroundColor: "#FF6F61" }}
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
          onClick={() => navigate("/teacher/login")}
        >
          Teacher
        </motion.button>
        <motion.button
          style={{ ...styles.button, backgroundColor: "#6A5ACD" }}
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
          onClick={() => navigate("/student/login")}
        >
          Student
        </motion.button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    fontFamily: "Comic Sans MS, sans-serif",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    background: "linear-gradient(120deg, #FFDEE9, #B5FFFC)",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "50px",
    color: "#333",
    textShadow: "2px 2px #fff",
    textAlign: "center",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  button: {
    padding: "18px 36px",
    fontSize: "1.3rem",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    color: "white",
    fontWeight: "bold",
    boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
    outline: "none",
  },
  circle: {
    position: "absolute",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    opacity: 0.5,
  },
};
