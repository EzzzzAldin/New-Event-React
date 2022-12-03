import { NavLink, Route, Switch, Redirect } from "react-router-dom";

import classes from "./ProgramsList.module.css";
import Container from "../UI/Container";
import First from "../../pages/First";
import Second from "../../pages/Second";
import Third from "../../pages/Third";

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
              <NavLink to="/first" activeClassName={classes.active}>
                First Day
              </NavLink>
            </li>
            <li>
              <NavLink to="/second" activeClassName={classes.active}>
                Second Day
              </NavLink>
            </li>
            <li>
              <NavLink to="/third" activeClassName={classes.active}>
                Third Day
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={classes.programs}>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/first" />
            </Route>
            <Route path="/first">
              <First />
            </Route>
            <Route path="/second">
              <Second />
            </Route>
            <Route path="/third">
              <Third />
            </Route>
          </Switch>
        </div>
      </Container>
    </section>
  );
};

export default ProgramsList;
