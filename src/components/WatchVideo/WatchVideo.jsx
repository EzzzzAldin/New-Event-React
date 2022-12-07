import classes from "./WatchVideo.module.css";
import Container from "../UI/Container";

const AboutUs = () => {
  return (
    <section className={classes["watch-section"]}>
      <Container className={classes["watch-video"]}>
        <div className={classes.info}>
          <h3>WATCH VIDEO </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur at modi fugiat ullam corporis, voluptatum in praesentium
            beatae, voluptates vero neque enim, eligendi laudantium quae! Autem
            odit ipsa ut molestias?
          </p>
        </div>
        <div className={classes.video}>
          <iframe
            title="EZ2"
            src="https://www.youtube.com/embed/3i7T5gkgAsQ"
            frameBorder="0"
          ></iframe>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
