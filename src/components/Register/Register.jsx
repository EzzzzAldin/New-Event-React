import classes from "./Register.module.css";
import Container from "../UI/Container";

const Register = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section className={classes["register-section"]}>
      <Container className={classes.register}>
        <div className={classes.info}>
          <h3>Register</h3>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur at modi fugiat ullam corporis, voluptatum in praesentium
            beatae, voluptates vero neque enim, eligendi laudantium quae! Autem
            odit ipsa ut molestias?
          </p>
        </div>
        <div className={classes.form}>
          <form onSubmit={formSubmitHandler}>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Phone Number" />
            <input type="email" placeholder="Email" />
            <button type="submit">Register</button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Register;
