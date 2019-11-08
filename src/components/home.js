import React, { useState, useEffect } from "react"
import axios from "axios"
import Loader from "react-loader-spinner"

import StudentCard from "./cards/student-card"
import Titles from "./titles"
import Rubric from "./rubric/rubric"
import Navbar from "./navbar"

const Home = () => {
  const [studentInfo, setStudentInfo] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const get = async () => {
      const result = await axios(
        "https://quick-cards-api.herokuapp.com/students"
      )

      const sumSkills = student => {
        console.log(student.skills)
        let sum = 0
        Object.values(student.skills).forEach(value => {
          return (sum += Number(value.level))
        })
        return sum
      }

      setStudentInfo(
        result.data.sort((a, b) => {
          return sumSkills(b) - sumSkills(a)
        })
      )
      setLoading(false)
    }
    get()
  }, [])

  const renderStudents = () => {
    return studentInfo.map(student => {
      if (!student.hired) {
        return (
          <StudentCard
            key={student.id}
            student={student}
            handleDeleteStudent={handleDeleteStudent}
          />
        )
      }
    })
  }

  const handleDeleteStudent = id => {
    fetch(`https://quick-cards-api.herokuapp.com/student/${id}`, {
      method: "DELETE"
    }).then(
      setStudentInfo(
        studentInfo.filter(item => {
          return item.id !== id
        })
      )
    )
  }

  return (
    <div className="home">
      <Navbar onHomePage={true} />
      <Titles />
      <Rubric pic="/assets/chevron.png" />
      <hr />
      {loading ? <Loader type="Plane" color="#00cb78" /> : renderStudents()}
    </div>
  )
}

export default Home
