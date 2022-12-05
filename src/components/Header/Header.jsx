import classes from "./Header.module.css";

const Header = () => {
  return (
    <section className={classes.header}>
      <div className={classes.info}>
        <p>July 22 - 26 in San Francisco, CA</p>
        <h2>Web Design Conference</h2>
        <div className={classes.btns}>
          <button className={classes.learn}>Learn More</button>
          <button className={classes.register}>Register Now</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
