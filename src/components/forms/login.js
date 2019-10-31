import React from "react"
import { navigate } from "hookrouter"
import Cookie from "js-cookie"

const Login = () => {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [errorText, setErrorText] = React.useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if (username === "admin" && password === "workingman") {
      Cookie.set("username", username)
      Cookie.set("password", password)
      setErrorText("")
      navigate("/student-form")
    } else {
      setErrorText("Wrong Username or Password")
    }
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Admin Login</h1>
        <input
          placeholder="User Name"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <p>{errorText}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login
