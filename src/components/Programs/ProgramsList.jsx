import { NavLink, Route, Switch } from "react-router-dom";

import classes from "./ProgramsList.module.css";
import Container from "../UI/Container";
import First from "../../pages/ListPrograms/First";
import Second from "../../pages/ListPrograms/Second";
import Third from "../../pages/ListPrograms/Third";

const ProgramsList = () => {
  return (
    <section className={classes["programs-section"]}>
      <Container>
        <div className={classes.info}>
          <h2>Our</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div className={classes.days}>
          <ul>
            <li>
              <NavLink to="/programs" activeClassName={classes.active} exact>
                First Day
              </NavLink>
            </li>
            <li>
              <NavLink to="/programs/second" activeClassName={classes.active}>
                Second Day
              </NavLink>
            </li>
            <li>
              <NavLink to="/programs/third" activeClassName={classes.active}>
                Third Day
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={classes.programs}>
          <Switch>
            <Route path="/programs" exact>
              <First />
            </Route>
            <Route path="/programs/first">
              <First />
            </Route>
            <Route path="/programs/second">
              <Second />
            </Route>
            <Route path="/programs/third">
              <Third />
            </Route>
            <Route path="*">
              <First />
            </Route>
          </Switch>
        </div>
      </Container>
    </section>
  );
};

export default ProgramsList;
