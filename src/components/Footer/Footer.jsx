import { Link } from "react-router-dom";
import {
  faFacebookF,
  faLinkedinIn,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Footer.module.css";
import Container from "../UI/Container";

const Footer = () => {
  return (
    <footer>
      <h5>
        Copyright &#169; Your Company | Design
        <span> Ezz Aldin</span>
      </h5>
      <Container className={classes.icons}>
        <ul>
          <li>
            <Link
              to="//www.facebook.com/profile.php?id=100009081027328"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
          </li>
          <li>
            <Link to="//www.linkedin.com/in/ezzaldinmohamed" target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </li>
          <li>
            <Link to="//github.com/EzzzzAldin" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </li>
          <li>
            <Link
              to="//www.youtube.com/channel/UCGZLzYCR9sWhU-OX6qBsZ1w"
              target="_blank"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
