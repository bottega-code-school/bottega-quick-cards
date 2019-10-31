import React, { useState, useEffect } from "react"
import axios from "axios"

import StudentCard from "./student-card"
import Rubric from "../rubric/rubric"
import Navbar from "../navbar"

const SingleStudent = props => {
  const [student, setStudent] = useState()

  useEffect(() => {
    const get = async () => {
      const result = await axios(
        `https://quick-cards-api.herokuapp.com/student/${props.id}`
      )
      setStudent(result.data)
    }
    get()
  }, [])

  return (
    <div className="home">
      <Navbar />
      <Rubric pic="/assets/chevron.png" />
      <div className="single-student-wrapper">
        {student && <StudentCard student={student} />}
        <div className="task-list-wrapper">
          <h3>Tasks you can ask me to do:</h3>
          <ul>
            <li>- Create cookie based API authentication system</li>
            <li>- Create JWT based API authentication system</li>
            <li>- Implement authorization rules for various user types</li>
            <li>- Connect JavaScript front end with server side backend</li>
            <li>- Understand the request/response lifecycle</li>
            <li>- Convert design to HTML/CSS code</li>
            <li>- Build SQL queries</li>
            <li>- Build out CRUD functionality</li>
            <li>- Create MVC based applications</li>
            <li>- Create micro service based applications</li>
            <li>
              - Work with various data structures, such as arrays and key value
              collections
            </li>
            <li>- Build front end and backend applications from scratch</li>
            <li>- Add features to our existing applications</li>
            <li>- Read and work with automated tests</li>
            <li>- Build out SPA based routing systems</li>
            <li>- Build out API based routing actions</li>
            <li>- Implement infinite scrolling based pagination</li>
            <li>- Work with Scss imports, variables, nesting, and mixins</li>
            <li>- Deploy applications to the web</li>
            <li>- Work with CORS policies</li>
            <li>- Utilize debuggers</li>
            <li>- Utilize the browser development tools</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SingleStudent
