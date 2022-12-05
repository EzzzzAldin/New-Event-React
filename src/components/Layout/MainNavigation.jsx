import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import Container from "../UI/Container";
import LINKS from "./Links";

const MainNavigation = () => {
  const linksList = LINKS.map((link) => (
    <li key={link.id}>
      <NavLink to={link.path} activeClassName={classes.active} exact>
        {link.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className={classes.nav}>
      <Container className={classes.items}>
        <h1>New</h1>
        <ul>{linksList}</ul>
      </Container>
    </nav>
  );
};

export default MainNavigation;
