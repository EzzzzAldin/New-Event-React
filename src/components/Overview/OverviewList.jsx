import {
  faUserGroup,
  faClock,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

import Overview from "./Overview";
import Container from "../UI/Container";
import classes from "./OverviewList.module.css";

const DUMMY_OVERVIEW = [
  {
    id: "o1",
    icon: faUserGroup,
    title: "650 particles",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorum,nihil asperiores placeat aliquid ab corrupti inventore enim aspernatur",
  },
  {
    id: "o2",
    icon: faClock,
    title: "24 programs",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorum,nihil asperiores placeat aliquid ab corrupti inventore enim aspernatur",
  },
  {
    id: "o3",
    icon: faMicrophone,
    title: "11 Speaker",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorum,nihil asperiores placeat aliquid ab corrupti inventore enim aspernatur",
  },
];

const OverviewList = () => {
  const overviews = DUMMY_OVERVIEW.map((overview) => (
    <Overview
      key={overview.id}
      icon={overview.icon}
      title={overview.title}
      description={overview.description}
    />
  ));

  return (
    <section className={classes["overview-section"]}>
      <Container className={classes["overview-list"]}>{overviews}</Container>
    </section>
  );
};

export default OverviewList;
