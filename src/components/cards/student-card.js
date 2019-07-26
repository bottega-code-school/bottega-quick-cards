import React from "react";
import Cookie from "js-cookie";
import { navigate, A } from "hookrouter";

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

  const handleEditStudent = id => {
    navigate(`/student-form/${id}`);
  };

  return (
    <div className="student-card-wrapper">
      <img src={props.student.image} alt="student" />
      <div>
        <div className="naming-wrapper">
          <A href={`/student/${props.student.id}`}>{props.student.name}</A>
          <a
            href={props.student.linkedin}
            target="_blank"
            className="linkedin-link"
          >
            <img src="/assets/linkedin-2.png" />
          </a>
          <a
            href={props.student.github}
            target="_blank"
            className="github-link"
          >
            <img src="/assets/GitHub-Mark-120px-plus.png" />
          </a>
        </div>
        <div className="naming-wrapper">
          <p>{props.student.summary}</p>
        </div>
      </div>

      <div className="skills">
        <div className="scale-title">
          <span>Production Ready Scale</span>
        </div>
        <div className="skill-legend">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
        <div />
        {renderSkills()}
      </div>

      {Cookie.get("username") ? (
        <div className="admin-control-buttons">
          <button onClick={() => props.handleDeleteStudent(props.student.id)}>
            DELETE
          </button>
          <button onClick={() => handleEditStudent(props.student.id)}>
            EDIT
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default StudentCard;
