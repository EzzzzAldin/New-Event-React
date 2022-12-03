import classes from "./Sponsors.module.css";

const Overview = (props) => {
  return (
    <div className={classes.image}>
      <img src={props.image} alt="" />
    </div>
  );
};

export default Overview;
