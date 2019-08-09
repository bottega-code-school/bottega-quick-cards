import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import StudentCard from "./cards/student-card";
import Titles from "./titles";
import Rubric from "./rubric/rubric";
import Navbar from "./navbar";

const Home = () => {
  const [studentInfo, setStudentInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const get = async () => {
      const result = await axios(
        "https://quick-cards-api.herokuapp.com/students"
      );

      const sumSkills = student => {
        let sum = 0;
        Object.values(student).forEach(value => {
          return isNaN(value) ? null : (sum += Number(value));
        });
        return sum - student.id;
      };

      setStudentInfo(
        result.data.sort((a, b) => {
          return sumSkills(b) - sumSkills(a);
        })
      );
      setLoading(false);
    };
    get();
  }, []);

  const renderStudents = () => {
    return studentInfo.map(student => {
      const createSkillArray = () => {
        const nameArray = [
          "Agile",
          "Algorithms",
          "APIs",
          "Control Structures",
          "CSS & SCSS",
          "Data Types",
          "Functional Programming",
          "Github",
          "HTML",
          "JavaScript",
          "JSON",
          "OOP",
          "Problem Solving",
          "Project Management",
          "Python",
          "Quality",
          "React",
          "Software Engineering",
          "SQL",
          "UI/UX",
          "UML"
        ];
        const skillArray = [];
        Object.values(student).forEach(val => {
          if (!isNaN(val) && val !== Boolean(val) && val !== student.id) {
            skillArray.push(val);
          }
        });
        return skillArray.map((skill, i) => {
          return { skillName: nameArray[i], skillLevel: skill };
        });
      };

      if (!student.hired) {
        return (
          <StudentCard
            key={student.id}
            student={student}
            skillArray={createSkillArray()}
            handleDeleteStudent={handleDeleteStudent}
          />
        );
      }
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

  return (
    <div className="home">
      <Navbar onHomePage={true} />
      <Titles />
      <Rubric pic="/assets/chevron.png" />
      <hr />
      {loading ? <Loader type="Plane" color="#00cb78" /> : renderStudents()}
    </div>
  );
};

export default Home;
