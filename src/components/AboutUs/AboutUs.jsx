import classes from "./AboutUs.module.css";
import Container from "../UI/Container";
import aboutImage from "../../shared/assets/imags/overview-img.jpg";

const AboutUs = () => {
  return (
    <section className={classes["aboutus-section"]}>
      <Container className={classes.about}>
        <div className={classes.info}>
          <h3>New Event is a fully Responsive one-page template </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur at modi fugiat ullam corporis, voluptatum in praesentium
            beatae, voluptates vero neque enim, eligendi laudantium quae! Autem
            odit ipsa ut molestias?
            <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quam, quasi ipsa beatae repellendus labore, nostrum at perferendis
            molestiae et, debitis sint distinctio vero eaque rerum ad cumque?
            Rem, eligendi tenetur.
          </p>
        </div>
        <div className={classes.image}>
          <img src={aboutImage} alt="about" />
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
