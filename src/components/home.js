import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookie from "js-cookie";
import { A, navigate } from "hookrouter";
import Loader from "react-loader-spinner";

import StudentCard from "./student-card";

const Home = () => {
  const [studentInfo, setStudentInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(Cookie.get("username"));

  useEffect(() => {
    const get = async () => {
      const result = await axios(
        "https://quick-cards-api.herokuapp.com/students"
      );
      setStudentInfo(result.data);
      setLoading(false);
    };
    get();
  }, []);

  const renderStudents = () => {
    return studentInfo.map(student => {
      const skillArray = [
        { skillName: "Python", skillLevel: student.python_skill },
        { skillName: "React", skillLevel: student.react_skill },
        { skillName: "Github", skillLevel: student.github_skill },
        { skillName: "JSON", skillLevel: student.json_skill },
        { skillName: "CSS & Scss", skillLevel: student.css_scss_skill },
        { skillName: "Data Types", skillLevel: student.data_type_skill },
        { skillName: "SQL", skillLevel: student.sql_skill },
        { skillName: "JavaScript", skillLevel: student.javascript_skill },
        { skillName: "HTML", skillLevel: student.html_skill },
        { skillName: "UML", skillLevel: student.uml_skill },
        { skillName: "UI/UX", skillLevel: student.ui_ux_skill },

        {
          skillName: "Control Structures",
          skillLevel: student.control_structures
        },
        { skillName: "Algorithms", skillLevel: student.algorithms },
        { skillName: "Quality", skillLevel: student.quality },
        {
          skillName: "Project Management",
          skillLevel: student.project_management
        },
        { skillName: "Problem Solving", skillLevel: student.problem_solving },
        { skillName: "Agile", skillLevel: student.agile },
        { skillName: "OOP", skillLevel: student.oop },
        {
          skillName: "Functional Programming",
          skillLevel: student.functional_programming
        },
        {
          skillName: "Software Engineering",
          skillLevel: student.software_engineering
        },
        { skillName: "APIs", skillLevel: student.apis }
      ];

      return (
        <StudentCard
          key={student.id}
          student={student}
          skillArray={skillArray}
          handleDeleteStudent={handleDeleteStudent}
        />
      );
    });
  };

  const handleDeleteStudent = id => {
    fetch(`https://quick-cards-api.herokuapp.com/student/${id}`, {
      method: "DELETE"
    }).then(
      setStudentInfo(
        studentInfo.filter(item => {
          return item.id !== id;
        })
      )
    );
  };

  const handleLogout = () => {
    Cookie.remove("username");
    Cookie.remove("password");
    setLoggedIn(false);
  };

  return (
    <div className="home">
      {loggedIn ? (
        <div className="admin-nav-buttons">
          <A href="/student-form">Form</A>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      ) : null}
      {loading ? <Loader type="Plane" color="#00cb78" /> : renderStudents()}
    </div>
  );
};

export default Home;
