import React, { useState } from "react";
import Cookie from "js-cookie";
import { navigate, A } from "hookrouter";

import Skill from "./skill";
import QuestionModal from "./question-modal";

const StudentCard = props => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
        <a
          href={props.student.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.student.name}
        </a>
        <p>{props.student.summary}</p>
      </div>
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

      <div className="skills">{renderSkills()}</div>

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
      <A href={`/student/${props.student.id}`}>...</A>
    </div>
  );
};

export default StudentCard;
