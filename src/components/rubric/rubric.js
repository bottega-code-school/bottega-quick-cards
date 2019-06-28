import React, { useState } from "react";

import RubricItem from "./rubric-item";

const Rubric = props => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rubric" onClick={() => setExpanded(!expanded)}>
      {expanded ? (
        <ol>
          <RubricItem
            title="Basic"
            description="Has a primary understanding of programming concepts and scructures"
          />
          <RubricItem
            title="Operational"
            description="Can perform basic tasks and solve real world problems"
          />
          <RubricItem
            title="Supervised"
            description="Functional in a work environment"
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
          Rubric
          <img src={props.pic} />
        </div>
      )}
    </div>
  );
};

export default Rubric;
