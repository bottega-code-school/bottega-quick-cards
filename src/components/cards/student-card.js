import React, { useEffect } from "react"
import Cookie from "js-cookie"
import { navigate, A } from "hookrouter"

import Skill from "./skill"

const StudentCard = props => {
  const renderSkills = () => {
    return props.student.skills.map(s => {
      return <Skill skill={s.skill} width={s.level} key={s.skill} />
    })
  }

  const handleEditStudent = id => {
    navigate(`/student-form/${id}`)
  }

  useEffect(() => {}, [props.student])

  return (
    <div className="student-card-wrapper">
      <img src={props.student.image_url} alt="student" />
      <div>
        <div className="naming-wrapper">
          <div className="name-titles">
            <A href={`/student/${props.student.id}`}>{props.student.name}</A>
          </div>
          <a
            href={props.student.linkedin_url}
            target="_blank"
            className="linkedin-link"
          >
            <img src="/assets/linkedin.png" />
          </a>
          <a
            href={props.student.github_url}
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
  )
}

export default StudentCard
