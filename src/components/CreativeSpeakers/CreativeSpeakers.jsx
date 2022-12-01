import classes from "./CreativeSpeakers.module.css";

const CreativeSpeakers = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.image} alt="" />
      <h3>{props.username}</h3>
      <p>{props.job}</p>
    </div>
  );
};

export default CreativeSpeakers;
