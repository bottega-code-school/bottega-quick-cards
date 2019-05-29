import React from "react";
import Cookie from "js-cookie";
import Skill from "./skill";

const StudentCard = props => {
  const renderSkills = () => {
    return props.skillArray.map(skill => {
      return (
        <Skill
          skill={skill.skillName}
          width={skill.skillLevel}
          key={skill.skillName}
        />
      );
    });
  };

  return (
    <div className="student-card-wrapper">
      <img src={props.student.image} alt="student" />
      <div>
        <a
          href={props.student.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.student.name}
        </a>
        <p>{props.student.summary}</p>
      </div>
      <span className="scale-title">Production Ready Scale</span>
      <div className="skill-legend">
        <span className="left">Supervised</span>
        <span className="middle">Outcome Based</span>
        <span className="right">Proactive</span>
      </div>
      <div className="skills">{renderSkills()}</div>

      {Cookie.get("username") ? (
        <div className="admin-control-buttons">
          <button onClick={() => props.handleDeleteStudent(props.student.id)}>
            DELETE Student
          </button>
          <button onClick={() => props.handleEditStudent(props.student.id)}>
            EDIT Student
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default StudentCard;
