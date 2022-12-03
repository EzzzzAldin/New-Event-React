import Sponsors from "./Sponsors";
import Container from "../UI/Container";
import classes from "./SponsorsList.module.css";

import image1 from "../../shared/assets/imags/sponsor-img1.jpg";
import image2 from "../../shared/assets/imags/sponsor-img2.jpg";
import image3 from "../../shared/assets/imags/sponsor-img3.jpg";
import image4 from "../../shared/assets/imags/sponsor-img4.jpg";

const DUMMY_SPONSORS = [
  {
    id: "s1",
    image: image1,
  },
  {
    id: "s2",
    image: image2,
  },
  {
    id: "s3",
    image: image3,
  },
  {
    id: "s4",
    image: image4,
  },
];

const OverviewList = () => {
  const sponsors = DUMMY_SPONSORS.map((sponsors) => (
    <Sponsors key={sponsors.id} image={sponsors.image} />
  ));

  return (
    <section className={classes["sponsors-section"]}>
      <div className={classes.info}>
        <h2>Our</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
      <Container className={classes["sponsors-list"]}>{sponsors}</Container>
    </section>
  );
};

export default OverviewList;
