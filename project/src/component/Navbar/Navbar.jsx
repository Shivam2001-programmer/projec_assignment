
import React from 'react';
import './Navbar.css';


function Navbar({ setShowCourse, showCourse }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo.jpeg" alt="Logo" />

      </div>

      <ul className="navbar-links">
        <li>
          <li className="collag" onClick={
            () => { setShowCourse(!showCourse) }
          }><a >Colleges</a></li>
        </li>
        <li><a>Courses</a></li>
        <li><a >Exams</a></li>
        <li><a >Study Abroad</a></li>
        <li><a >Get Counselling</a></li>
        <li><a >Latest News</a></li>

      </ul>
    </nav>
  );
}

export default Navbar;
