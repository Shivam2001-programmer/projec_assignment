import React from "react";
import './Course.css'
const Courses = ({ showCourse }) => {
  return (
    <div className="course" style={{ display: showCourse ? "block" : "none" }}>
      <div className="contain">
        <div className="box1">
          <h3 className="texts">Engineering</h3>
          <h3 className="texts">Management</h3>
          <h3 className="texts">Hotel Management</h3>
          <h3 className="texts">Medical</h3>
          <h3 className="texts">Paramedical</h3>
          <h3 className="texts">Arts & Huminties</h3>
          <h3 className="texts">Science</h3>
          <h3 className="texts">Nursing</h3>
          <h3 className="texts">Agriculture</h3>
          <h3 className="texts">Design</h3>
          <h3 className="texts">Information Technology</h3>
          <h3 className="texts">Farmacy</h3>
          <h3 className="texts">Dental</h3>
          <h3 className="texts">Music</h3>
          
        </div>


        <div className="box2">
          <div>
            <h3 className="te">College By Degree </h3>
            <p className="te" >Btech</p>
            <p className="te">Mtech</p>
            <p className="te">Btech + Mtech</p>
            <p className="te">Diploma</p>
          </div>
          <div>
            <h3 className="te">College By Status</h3>
            <p className="te">Delhi-NCR</p>
            <p className="te">Karnatka</p>
            <p className="te">Maharastra</p>
            <p className="te">Benglore</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Courses;
