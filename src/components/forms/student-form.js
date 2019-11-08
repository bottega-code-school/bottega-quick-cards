import React, { Component } from "react"
import { A, navigate } from "hookrouter"
import DropzoneComponent from "react-dropzone-component"
import request from "superagent"

import "../../../node_modules/react-dropzone-component/styles/filepicker.css"
import "../../../node_modules/dropzone/dist/min/dropzone.min.css"

const INITIAL_STATE = {
  name: "",
  linkedin_url: "",
  github_url: "",
  image_url: "",
  summary: "",
  python: "",
  react: "",
  github: "",
  json: "",
  css_scss: "",
  data_type: "",
  sql: "",
  javascript: "",
  html: "",
  uml: "",
  ui_ux: "",

  control_structures: "",
  algorithms: "",
  quality: "",
  project_management: "",
  problem_solving: "",
  agile: "",
  oop: "",
  functional_programming: "",
  software_engineering: "",
  apis: "",
  hired: false,
  cirr_positions: ""
}

class StudentForm extends Component {
  constructor(props) {
    super(props)

    this.state = INITIAL_STATE

    // this.imageRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.id && this.props.editMode) {
      fetch(`https://quick-cards-api.herokuapp.com/student/${this.props.id}`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            name: data.name,
            linkedin_url: data.linkedin_url,
            github_url: data.github_url,
            image_url: data.image_url,
            summary: data.summary,
            python: data.skills[0].level,
            react: data.skills[1].level,
            github: data.skills[5].level,
            json: data.skills[7].level,
            css_scss: data.skills[3].level,
            data_type: data.skills[8].level,
            sql: data.skills[11].level,
            javascript: data.skills[4].level,
            html: data.skills[2].level,
            uml: data.skills[12].level,
            ui_ux: data.skills[13].level,

            control_structures: data.skills[15].level,
            algorithms: data.skills[16].level,
            quality: data.skills[17].level,
            project_management: data.skills[18].level,
            problem_solving: data.skills[14].level,
            agile: data.skills[19].level,
            oop: data.skills[9].level,
            functional_programming: data.skills[10].level,
            software_engineering: data.skills[20].level,
            apis: data.skills[6].level,
            hired: data.hired,
            cirr_positions: data.cirr_positions
          })
        })
    }
  }

  // componentConfig = () => {
  //   return {
  //     iconFiletypes: [".jpg", ".png"],
  //     showFiletypeIcon: true,
  //     postUrl: "https://httpbin.org/post"
  //   };
  // };

  // djsConfig = () => {
  //   return {
  //     addRemoveLinks: true,
  //     maxFiles: 1
  //   };
  // };

  // handleImageDrop = () => {
  //   return {
  //     addedfile: file => {
  //       let upload = request
  //         .post("https://api.cloudinary.com/v1_1/dkwmzcfls/image/upload")
  //         .field("upload_preset", "student-images")
  //         .field("file", file);

  //       upload.end((err, response) => {
  //         if (err) {
  //           console.log("error uploading to Cloudinary", file);
  //         }
  //         if (response.body.secure_url !== "") {
  //           this.setState({ image: response.body.secure_url });
  //         }
  //       });
  //     }
  //   };
  // };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    if (this.props.editMode) {
      fetch(`https://quick-cards-api.herokuapp.com/student/${this.props.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          cirr_positions: this.state.cirr_positions,
          github_url: this.state.github_url,
          hired: this.state.hired,
          image_url: this.state.image_url,
          linkedin_url: this.state.linkedin_url,
          name: this.state.name,
          summary: this.state.summary,
          skills: [
            { skill: "Python", level: this.state.python },
            { skill: "React", level: this.state.react },
            { skill: "HTML", level: this.state.html },
            { skill: "CSS & Scss", level: this.state.css_scss },
            { skill: "JavaScript", level: this.state.javascript },
            { skill: "Github", level: this.state.github },
            { skill: "APIs", level: this.state.apis },
            { skill: "JSON", level: this.state.json },
            { skill: "Data Types", level: this.state.data_type },
            { skill: "OOP", level: this.state.oop },
            {
              skill: "Functional Programming",
              level: this.state.functional_programming
            },
            { skill: "SQL", level: this.state.sql },
            { skill: "UML", level: this.state.uml },
            { skill: "UI/UX", level: this.state.ui_ux },
            { skill: "Problem Solving", level: this.state.problem_solving },
            {
              skill: "Control Structures",
              level: this.state.control_structures
            },
            { skill: "Algorithms", level: this.state.algorithms },
            { skill: "Quality", level: this.state.quality },
            {
              skill: "Project Management",
              level: this.state.project_management
            },
            { skill: "Agile", level: this.state.agile },
            {
              skill: "Software Engineering",
              level: this.state.software_engineering
            }
          ]
        })
      })
        // .then(this.imageRef.current.dropzone.removeAllFiles())
        .then(navigate("/"))
        .catch(error => console.log("put error", error))
    } else {
      fetch("https://quick-cards-api.herokuapp.com/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          cirr_positions: this.state.cirr_positions,
          github_url: this.state.github_url,
          hired: this.state.hired,
          image_url: this.state.image_url,
          linkedin_url: this.state.linkedin_url,
          name: this.state.name,
          summary: this.state.summary,
          skills: [
            { skill: "Python", level: this.state.python },
            { skill: "React", level: this.state.react },
            { skill: "HTML", level: this.state.html },
            { skill: "CSS & Scss", level: this.state.css_scss },
            { skill: "JavaScript", level: this.state.javascript },
            { skill: "Github", level: this.state.github },
            { skill: "APIs", level: this.state.apis },
            { skill: "JSON", level: this.state.json },
            { skill: "Data Types", level: this.state.data_type },
            { skill: "OOP", level: this.state.oop },
            {
              skill: "Functional Programming",
              level: this.state.functional_programming
            },
            { skill: "SQL", level: this.state.sql },
            { skill: "UML", level: this.state.uml },
            { skill: "UI/UX", level: this.state.ui_ux },
            { skill: "Problem Solving", level: this.state.problem_solving },
            {
              skill: "Control Structures",
              level: this.state.control_structures
            },
            { skill: "Algorithms", level: this.state.algorithms },
            { skill: "Quality", level: this.state.quality },
            {
              skill: "Project Management",
              level: this.state.project_management
            },
            { skill: "Agile", level: this.state.agile },
            {
              skill: "Software Engineering",
              level: this.state.software_engineering
            }
          ]
        })
      })
        .then(result => result.json())
        .then(this.setState(INITIAL_STATE))
        // .then(this.imageRef.current.dropzone.removeAllFiles())
        .catch(error => console.log("form submit", error))
    }
  }

  render() {
    console.log(this.state.cirr_position)
    return (
      <div className="student-form-wrapper">
        <A href="/">Home</A>
        <form onSubmit={this.onSubmit} className="student-form">
          <h1>Student Info</h1>

          <div className="student-names">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />

            <select name="cirr_positions" onChange={this.handleChange}>
              <option value="">Select CIRR position</option>
              <option value="Web Developer">Web Developer</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Full-Stack Engineer">Full-Stack Engineer</option>
              <option value="Solutions Engineer">Solutions Engineer</option>
              <option value="Solutions Consultant">Solutions Consultant</option>
              <option value="Developer">Developer</option>
              <option value="Project Manager">Project Manager</option>
              <option value="QA/Tester ">QA/Tester </option>
              <option value="Jr Software Developer">
                Jr Software Developer
              </option>
              <option value="UX UI Product Designer">
                UX UI Product Designer
              </option>
              <option value="Actuarial Analyst">Actuarial Analyst</option>
              <option value="Director of Digital Design">
                Director of Digital Design
              </option>
              <option value="Entry Level Release Engineer">
                Entry Level Release Engineer
              </option>
              <option value="Prep Experience Coordinator">
                Prep Experience Coordinator
              </option>
              <option value="Junior Automation Engineer">
                Junior Automation Engineer
              </option>
              <option value="Analyst">Analyst</option>
              <option value="UX/UI Designer">UX/UI Designer</option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="Back-End Developer">Back-End Developer</option>
              <option value="Database Architect">Database Architect</option>
            </select>

            <input
              type="text"
              name="linkedin_url"
              placeholder="LinkedIn Profile Link"
              value={this.state.linkedin_url}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="github_url"
              placeholder="Github Profile Link"
              value={this.state.github_url}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="image_url"
              placeholder="Image Link"
              value={this.state.image_url}
              onChange={this.handleChange}
            />
          </div>

          {/* <DropzoneComponent
            ref={this.imageRef}
            config={this.componentConfig()}
            djsConfig={this.djsConfig()}
            eventHandlers={this.handleImageDrop()}
          >
            <div>Student Image</div>
          </DropzoneComponent> */}

          <textarea
            rows="12"
            type="text"
            name="summary"
            placeholder="Summary"
            value={this.state.summary}
            onChange={this.handleChange}
          />

          <h1>Skill Levels (1-5)</h1>

          <div className="skill-level-inputs">
            <input
              type="text"
              name="python"
              placeholder="Python"
              value={this.state.python}
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="react"
              placeholder="React"
              value={this.state.react}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="github"
              placeholder="Github"
              value={this.state.github}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="json"
              placeholder="JSON"
              value={this.state.json}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="css_scss"
              placeholder="CSS / Scss"
              value={this.state.css_scss}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="data_type"
              placeholder="Data Types"
              value={this.state.data_type}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="sql"
              placeholder="SQL"
              value={this.state.sql}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="javascript"
              placeholder="JavaScript"
              value={this.state.javascript}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="html"
              placeholder="HTML"
              value={this.state.html}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="uml"
              placeholder="UML"
              value={this.state.uml}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="ui_ux"
              placeholder="UI / UX"
              value={this.state.ui_ux}
              onChange={this.handleChange}
            />
          </div>

          <h1>Soft Skills (1-5)</h1>

          <div className="skill-level-inputs">
            <input
              type="text"
              name="control_structures"
              placeholder="Control Structures"
              value={this.state.control_structures}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="algorithms"
              placeholder="Algorithms"
              value={this.state.algorithms}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="quality"
              placeholder="Quality"
              value={this.state.quality}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="project_management"
              placeholder="Project Management"
              value={this.state.project_management}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="problem_solving"
              placeholder="Problem Solving"
              value={this.state.problem_solving}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="agile"
              placeholder="Agile"
              value={this.state.agile}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="oop"
              placeholder="OOP"
              value={this.state.oop}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="functional_programming"
              placeholder="Functional Programming"
              value={this.state.functional_programming}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="software_engineering"
              placeholder="Software Engineering"
              value={this.state.software_engineering}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="apis"
              placeholder="APIs"
              value={this.state.apis}
              onChange={this.handleChange}
            />

            <div>
              hired?
              <input
                type="checkbox"
                name="hired"
                checked={this.state.hired}
                onChange={() => this.setState({ hired: !this.state.hired })}
              />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default StudentForm
