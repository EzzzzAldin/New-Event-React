import classes from "./ContactUs.module.css";
import Container from "../UI/Container";

const ContactUs = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section className={classes["contact-section"]}>
      <Container className={classes["contact-us"]}>
        <div className={classes.info}>
          <h3>New</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur at modi fugiat ullam corporis, voluptatum in praesentium
            beatae, voluptates vero neque enim, eligendi laudantium quae! Autem
            odit ipsa ut molestias?
          </p>
          <button className={classes.btn}>Download Now</button>
        </div>
        <div className={classes.form}>
          <form onSubmit={formSubmitHandler}>
            <h4>Keep In</h4>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Phone Number" />
            <input type="email" placeholder="Email" />
            <button type="submit">Send</button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
