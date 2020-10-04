import React, { useState } from 'react';
import styles from "../styles/Navbar.module.css";

export default function Navbar() {

  const [navOpen, setNavOpen] = useState(0)

  return (
    <>
    <div className={styles.container}>
      <img src="../images/MS.png" className={styles.logo} />
      <main className={styles.main} />
        <button className={styles.hamburger} onClick={ () => setNavOpen(!navOpen)}><img src="../images/menu.png" className={styles.menu}></img></button>
    </div>
    <div className={navOpen ? styles.nav : styles.nodisplay}>
    <div className={styles.links}>
          <h2 className={styles.anchor}><a href="#workflow">WORKFLOW</a></h2>
          <h2 className={styles.anchor}><a href="#projects">PROJECTS</a></h2>
          <h2 className={styles.anchor}><a href="#about">ABOUT</a></h2>
          <h2 className={styles.anchor}><a href="#contact">CONTACT</a></h2>
        </div>
    </div>
    </>
  );
}
