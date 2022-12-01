import {
  faUserGroup,
  faClock,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

import Overview from "./Overview";
import Container from "../UI/Container";
import classes from "./OverviewList.module.css";

const OverviewList = () => {
  return (
    <Container className={classes["overview-list"]}>
      <Overview icon={faUserGroup} title="650 particles">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
        dolorum,nihil asperiores placeat aliquid ab corrupti inventore enim
        aspernatur
      </Overview>
      <Overview icon={faClock} title="24 programs">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
        dolorum,nihil asperiores placeat aliquid ab corrupti inventore enim
        aspernatur
      </Overview>
      <Overview icon={faMicrophone} title="11 Speaker">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
        dolorum,nihil asperiores placeat aliquid ab corrupti inventore enim
        aspernatur
      </Overview>
    </Container>
  );
};

export default OverviewList;
