import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import classes from "./Program.module.css";

const Program = (props) => {
  return (
    <div className={classes["program-info"]}>
      <div className={classes.image}>
        <img src={props.image} alt="" />
      </div>
      <div className={classes["program-details"]}>
        <div className={classes.time}>
          <span>
            <FontAwesomeIcon icon={faClock} />
            {props.time}
          </span>
          <span>
            <FontAwesomeIcon icon={faLocationDot} />
            {props.location}
          </span>
        </div>
        <h3>{props.title}</h3>
        <h6>{props.author}</h6>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Program;
