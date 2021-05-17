import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Nav";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.about}>
      <div className={styles.description}>
        <h2 className={styles.desc_heading}> We work to make</h2>
        <span className={styles.fancyText}>dreams</span>
        <h2 className={styles.desc_heading}>come true</h2>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </div>
      <Image
        className={styles.image}
        src="/home1.png"
        width={500}
        height={750}
      />
    </div>
  );
}
