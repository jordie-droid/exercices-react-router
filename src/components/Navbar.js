import { Link } from "react-router-dom";
import styles from "../style/Navbar.module.css";

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/About">About</Link>{" "}
        </li>
      </ul>
    </div>
  );
}
