import React, { Component } from "react";
import axios from "axios";
import { A } from "hookrouter";
import DropzoneComponent from "react-dropzone-component";
import request from "superagent";

import "../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../node_modules/dropzone/dist/min/dropzone.min.css";

const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET;
const CLOUDINARY_UPLOAD_URL = process.env.CLOUDINARY_UPLOAD_URL;

const INITIAL_STATE = {
  name: "",
  linkedin: "",
  image: "",
  summary: "",
  python: "",
  react: "",
  github: "",
  json: "",
  cssScss: "",
  dataType: "",
  sql: "",
  javaScript: "",
  html: "",
  uml: "",
  uiUx: "",

  controlStructures: "",
  algorithms: "",
  quality: "",
  projectManagement: "",
  problemSolving: "",
  agile: "",
  oop: "",
  functionalProgramming: "",
  softwareEngineering: "",
  apis: ""
};

class StudentForm extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;

    this.imageRef = React.createRef();
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
  };

  render() {
    console.log(this.state.image);
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
              name="cssScss"
              placeholder="CSS / Scss"
              value={this.state.cssScss}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="dataType"
              placeholder="Data Types"
              value={this.state.dataType}
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
              name="javaScript"
              placeholder="JavaScript"
              value={this.state.javaScript}
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
              name="uiUx"
              placeholder="UI / UX"
              value={this.state.uiUx}
              onChange={this.handleChange}
            />
          </div>

          <h1>Soft Skills (1-5)</h1>

          <div className="skill-level-inputs">
            <input
              type="text"
              name="controlStructures"
              placeholder="Control Structures"
              value={this.state.controlStructures}
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
              name="projectManagement"
              placeholder="Project Management"
              value={this.state.projectManagement}
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="problemSolving"
              placeholder="Problem Solving"
              value={this.state.problemSolving}
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
              name="functionalProgramming"
              placeholder="Functional Programming"
              value={this.state.functionalProgramming}
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="softwareEngineering"
              placeholder="Software Engineering"
              value={this.state.softwareEngineering}
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
