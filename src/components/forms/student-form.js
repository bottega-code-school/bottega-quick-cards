import React, { Component } from "react";
import { A, navigate } from "hookrouter";
import DropzoneComponent from "react-dropzone-component";
import request from "superagent";

import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";

const INITIAL_STATE = {
  name: "",
  linkedin: "",
  github: "",
  image: "",
  summary: "",
  python_skill: "",
  react_skill: "",
  github_skill: "",
  json_skill: "",
  css_scss_skill: "",
  data_type_skill: "",
  sql_skill: "",
  javascript_skill: "",
  html_skill: "",
  uml_skill: "",
  ui_ux_skill: "",

  control_structures: "",
  algorithms: "",
  quality: "",
  project_management: "",
  problem_solving: "",
  agile: "",
  oop: "",
  functional_programming: "",
  software_engineering: "",
  apis: ""
};

class StudentForm extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.id && this.props.editMode) {
      fetch(`https://quick-cards-api.herokuapp.com/student/${this.props.id}`)
        .then(response => response.json())
        .then(data => this.setState(data));
    }
  }

  componentConfig = () => {
    return {
      iconFiletypes: [".jpg", ".png"],
      showFiletypeIcon: true,
      postUrl: "https://httpbin.org/post"
    };
  };

  djsConfig = () => {
    return {
      addRemoveLinks: true,
      maxFiles: 1
    };
  };

  handleImageDrop = () => {
    return {
      addedfile: file => {
        let upload = request
          .post("https://api.cloudinary.com/v1_1/dkwmzcfls/image/upload")
          .field("upload_preset", "student-images")
          .field("file", file);

        upload.end((err, response) => {
          if (err) {
            console.log("error uploading to Cloudinary", file);
          }
          if (response.body.secure_url !== "") {
            this.setState({ image: response.body.secure_url });
          }
        });
      }
    };
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.props.editMode) {
      fetch(`https://quick-cards-api.herokuapp.com/student/${this.props.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(this.state)
      })
        .then(this.imageRef.current.dropzone.removeAllFiles())
        .then(navigate("/"))
        .catch(error => console.log("put error", error));
    } else {
      fetch("https://quick-cards-api.herokuapp.com/add-student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(this.state)
      })
        .then(result => result.json())
        .then(this.setState(INITIAL_STATE))
        .then(this.imageRef.current.dropzone.removeAllFiles())
        .catch(error => console.log("form submit", error));
    }
  };

  render() {
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
            <input
              type="text"
              name="linkedin"
              placeholder="LinkedIn Profile Link"
              value={this.state.linkedin}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="github"
              placeholder="Github Profile Link"
              value={this.state.github}
              onChange={this.handleChange}
            />
          </div>

          <DropzoneComponent
            ref={this.imageRef}
            config={this.componentConfig()}
            djsConfig={this.djsConfig()}
            eventHandlers={this.handleImageDrop()}
          >
            <div>Student Image</div>
          </DropzoneComponent>

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
              name="python_skill"
              placeholder="Python"
              value={this.state.python_skill}
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="react_skill"
              placeholder="React"
              value={this.state.react_skill}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="github_skill"
              placeholder="Github"
              value={this.state.github_skill}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="json_skill"
              placeholder="JSON"
              value={this.state.json_skill}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="css_scss_skill"
              placeholder="CSS / Scss"
              value={this.state.css_scss_skill}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="data_type_skill"
              placeholder="Data Types"
              value={this.state.data_type_skill}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="sql_skill"
              placeholder="SQL"
              value={this.state.sql_skill}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="javascript_skill"
              placeholder="JavaScript"
              value={this.state.javascript_skill}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="html_skill"
              placeholder="HTML"
              value={this.state.html_skill}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="uml_skill"
              placeholder="UML"
              value={this.state.uml_skill}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="ui_ux_skill"
              placeholder="UI / UX"
              value={this.state.ui_ux_skill}
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
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default StudentForm;
