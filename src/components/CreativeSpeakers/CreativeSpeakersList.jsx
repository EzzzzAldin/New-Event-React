import Container from "../UI/Container";
import CreativeSpeakers from "./CreativeSpeakers";
import classes from "./CreativeSpeakersList.module.css";

import image1 from "../../shared/assets/speakers/speakers-img1.jpg";
import image2 from "../../shared/assets/speakers/speakers-img2.jpg";
import image3 from "../../shared/assets/speakers/speakers-img3.jpg";
import image4 from "../../shared/assets/speakers/speakers-img4.jpg";
import image5 from "../../shared/assets/speakers/speakers-img5.jpg";

const DUMMY_CREATIVESPEAKERS = [
  {
    id: "c1",
    image: image1,
    username: "Jeeny Green",
    job: "UI Designer",
  },
  {
    id: "c2",
    image: image2,
    username: "David Yoon",
    job: "Creative Director",
  },
  {
    id: "c3",
    image: image3,
    username: "Je Mary Lee",
    job: "Web specialist",
  },
  {
    id: "c4",
    image: image4,
    username: "Johnathan Deo",
    job: "Front-End Div",
  },
  {
    id: "c5",
    image: image5,
    username: "Elite Hamilton",
    job: "Marketing Guru",
  },
];

const CreativeSpeakersList = () => {
  const creativeSpeakers = DUMMY_CREATIVESPEAKERS.map((creativeSpeaker) => (
    <CreativeSpeakers
      key={creativeSpeaker.id}
      username={creativeSpeaker.username}
      image={creativeSpeaker.image}
      job={creativeSpeaker.job}
    />
  ));

  return (
    <section className={classes["creativespeaker-section"]}>
      <div className={classes.info}>
        <h2>Creative</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
      <Container className={classes["creativespeaker-list"]}>
        {creativeSpeakers}
      </Container>
    </section>
  );
};

export default CreativeSpeakersList;
