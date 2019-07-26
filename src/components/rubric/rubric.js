import React, { useState } from "react";

import RubricItem from "./rubric-item";

const Rubric = props => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rubric" onClick={() => setExpanded(!expanded)}>
      {expanded ? (
        <ol>
          <RubricItem
            title="Student"
            description="Basic Development Concepts"
          />
          <RubricItem
            title="Basic Developer"
            description="Can perform basic tasks and coding logic"
          />
          <RubricItem
            title="Certified Production Ready Engineer"
            description="Can perform tasks independently or on a team with supervision"
          />
          <RubricItem
            title="Outcome Based"
            description="Able to complete difficult tasks when assigned"
          />
          <RubricItem
            title="Proactive"
            description="Actively looks for difficult problems and tasks to complete"
          />
          <img src={props.pic} />
        </ol>
      ) : (
        <div className="collapsed-rubric">
          Production Ready Rubric
          <img src={props.pic} />
        </div>
      )}
    </div>
  );
};

export default Rubric;
