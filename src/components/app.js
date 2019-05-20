import React from 'react';
import { useRoutes } from "hookrouter"

import Home from './home';
import StudentForm from './student-form';

import "../style/app.scss";

const routes = {
  "/": () => <Home />,
  "/student-form": () => <StudentForm />
}

const App = () => {
  return (
    <div>
      {useRoutes(routes)}
    </div>
  );
}

export default App;
