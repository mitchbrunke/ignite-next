import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <Link href="/">
        <a>
          <h1 className={styles.logo}> Capture </h1>
        </a>
      </Link>
      <ul>
        <Link href="/">
          <a>
            <li> 1. About Us</li>
          </a>
        </Link>
        <Link href="/our-work">
          <a>
            <li>2. Our Work</li>
          </a>
        </Link>
        <Link href="/contact-us">
          <a>
            <li>3. Contact Us</li>
          </a>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
