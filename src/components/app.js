import React from "react"
import { useRoutes, useRedirect } from "hookrouter"
import Cookie from "js-cookie"

import Home from "./home"
import StudentForm from "./forms/student-form"
import Login from "./forms/login"

import "../style/app.scss"
import SingleStudent from "./cards/single-student"

const routes = {
  "/": () => <Home />,
  "/student-form": () => <StudentForm />,
  "/login": () => <Login />,
  "/student-form/:id": ({ id }) => <StudentForm id={id} editMode={true} />,
  "/student/:id": ({ id }) => <SingleStudent id={id} />
}

const App = () => {
  return (
    <div className="app">
      {useRedirect(
        "/student-form",
        Cookie.get("username") ? "/student-form" : "/"
      )}
      {useRoutes(routes)}
    </div>
  )
}

export default App
