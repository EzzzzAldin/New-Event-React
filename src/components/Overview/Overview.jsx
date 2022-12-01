import classes from "./Overview.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Overview = (props) => {
  return (
    <div className={classes.overview}>
      <div className={classes.icon}>
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Overview;
