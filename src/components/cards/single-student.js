import React from "react";
import axios from "axios";
import { A } from "hookrouter";

import StudentCard from "./student-card";
import Rubric from "../rubric/rubric";
import Navbar from "../navbar";

const SingleStudent = props => {
  const [student, setStudent] = React.useState([]);

  React.useEffect(() => {
    const get = async () => {
      const result = await axios(
        `https://quick-cards-api.herokuapp.com/student/${props.id}`
      );
      setStudent(result.data);
    };
    get();
  }, []);

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
    <div className="home">
      <Navbar />
      <Rubric pic="/assets/chevron.png" />
      <StudentCard key={student.id} student={student} skillArray={skillArray} />
    </div>
  );
};

export default SingleStudent;
