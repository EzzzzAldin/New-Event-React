import Container from "../UI/Container";
import classes from "./Venue.module.css";

const Venue = () => {
  return (
    <section className={classes.venue}>
      <Container className={classes.info}>
        <h3>Venue</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quas et
          officiis voluptatem? Saepe repellat fuga quas iste? Cupiditate
          repudiandae maxime laudantium nam officiis ipsam dolores placeat?
          Inventore, quo sed!
        </p>
        <div className={classes.location}>
          <span>New Event</span>
          <span>120 Market Street, Suite 110</span>
          <span>San Francisco, CA 10110</span>
          <span>Tel: 01128449516</span>
        </div>
      </Container>
    </section>
  );
};

export default Venue;
