import React from "react";
import RubricItem from "./rubric-item";

const Rubric = () => {
  return (
    <ol className="rubric">
      <RubricItem
        title="Basic"
        description="Has a primary understanding of programming concepts"
      />
      <RubricItem
        title="Operational"
        description="Can survive in a work environment"
      />
      <RubricItem
        title="Supervised"
        description="Able to complete tasks with adequate supervision and help"
      />
      <RubricItem
        title="Outcome Based"
        description="Able to complete difficult tasks when assigned and given time"
      />
      <RubricItem
        title="Proactive"
        description="Able to actively look for difficult problems and tasks to complete"
      />
    </ol>
  );
};

export default Rubric;
