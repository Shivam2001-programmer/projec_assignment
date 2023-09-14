import "./App.css";
import Courses from "./component/Courses/Courses";
import Header from "./component/Header/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./component/Navbar/Navbar";
function App() {
  const [showCourse, setShowCourse] = useState(false);
  return (
    <>
      <Navbar showCourse={showCourse} setShowCourse={setShowCourse} />
      <Header />
      <Courses showCourse={showCourse} setShowCourse={setShowCourse} />
    </>
  );
}

export default App;
