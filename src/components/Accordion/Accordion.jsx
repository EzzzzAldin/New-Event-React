import { useState } from "react";

import classes from "./Accordion.module.css";

const Accordion = (props) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const showAnswerHandler = () => {
    setShowAnswer(!showAnswer);
  };

  const contentClasses = showAnswer
    ? `${classes.content} ${classes.show}`
    : `${classes.content}`;

  return (
    <div className={classes["question-group"]}>
      <div className={classes.question}>
        <h4>{props.question}</h4>
        <button onClick={showAnswerHandler}>{showAnswer ? "-" : "+"}</button>
      </div>
      <div className={contentClasses}>
        {showAnswer && <p>{props.answer}</p>}
      </div>
    </div>
  );
};

export default Accordion;
