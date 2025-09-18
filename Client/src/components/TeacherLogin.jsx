import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const TeacherLogin = () => {
  const [name, setName] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:6161/teach", {
        name,
        secretKey,
      });

      if (res.data.success) {
        alert("Login Successful");
        window.location.href = "/teacher/dashboard";
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, 5, -5, 0],
      transition: { duration: 0.5, repeat: Infinity },
    },
    tap: { scale: 0.9 },
  };

  const circleVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, -10, 0],
      transition: { yoyo: Infinity, duration: 2 },
    },
  };

  return (
    <div style={styles.container}>
      <motion.div
        style={{
          ...styles.circle,
          backgroundColor: "#FF6F61",
          top: "15%",
          left: "25%",
        }}
        variants={circleVariants}
        animate="animate"
      />
      <motion.div
        style={{
          ...styles.circle,
          backgroundColor: "#6A5ACD",
          top: "65%",
          left: "70%",
        }}
        variants={circleVariants}
        animate="animate"
      />
      <motion.div
        style={{
          ...styles.circle,
          backgroundColor: "#FFD700",
          top: "45%",
          left: "50%",
        }}
        variants={circleVariants}
        animate="animate"
      />

      <motion.h1
        style={styles.heading}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        Teacher Login
      </motion.h1>

      <motion.form
        onSubmit={handleLogin}
        style={styles.form}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          whileFocus={{ scale: 1.05, borderColor: "#FF6F61" }}
        />
        <motion.input
          type="text"
          placeholder="Secret Key"
          value={secretKey}
          onChange={(e) => setSecretKey(e.target.value)}
          style={styles.input}
          whileFocus={{ scale: 1.05, borderColor: "#6A5ACD" }}
        />
        <motion.button
          type="submit"
          style={styles.button}
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </motion.button>
      </motion.form>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    textAlign: "center",
    fontFamily: "Comic Sans MS, sans-serif",
    minHeight: "100vh",
    overflow: "hidden",
    background: "linear-gradient(120deg, #FFDEE9, #B5FFFC)",
    paddingTop: "80px",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "40px",
    color: "#333",
    textShadow: "2px 2px #fff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  input: {
    padding: "14px 20px",
    fontSize: "1.2rem",
    borderRadius: "10px",
    border: "2px solid #ccc",
    outline: "none",
    width: "280px",
    boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
  },
  button: {
    padding: "14px 30px",
    fontSize: "1.2rem",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#FF6F61",
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

export default TeacherLogin;
