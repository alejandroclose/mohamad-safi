import React, { useState } from 'react';
import styles from "../styles/Navbar.module.css";

export default function Navbar() {

  const [navOpen, setNavOpen] = useState(0)

  return (
    <div>
    <div className={styles.container}>
      <img src="../images/MS.png" className={styles.logo} />
      <main className={styles.main}>
        <div className={styles.links}>
        </div>
      </main>
        <button className={styles.hamburger} onClick={ () => setNavOpen(!navOpen)}><img src="../images/menu.png" className={styles.menu}></img></button>
    </div>
    <div className={navOpen ? styles.mobile : styles.nodisplay}>
    <div className={styles.mobilelinks}>
          <div className={styles.anchor}><a href="#workflow">WORKFLOW</a></div>
          <div className={styles.anchor}><a href="#projects">PROJECTS</a></div>
          <div className={styles.anchor}><a href="#about">ABOUT</a></div>
          <div className={styles.anchor}><a href="#contact">CONTACT</a></div>
        </div>
    </div>
    </div>
  );
}
