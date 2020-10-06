import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.profileBox}>
          <h1 className={styles.title}>
            <div>
              <div>Hi there! I’m </div>
              <div>
              Mohamad <b className={styles.highlight}>Safi</b>
              </div>
            </div>
            <div>A UX Designer and Psychologist</div>
          </h1>
          <img src="/images/profile.png" className={styles.profile} />
        </div>
        <div className={styles.ctaBox}>
        <h2 className={styles.description}>
          I help people widen perspectives to grow inside and out.
        </h2>
        <div className={styles.grid}>
          <button className={styles.button_l}>
            <a href="#projects">See selected projects</a>
          </button>
          <button className={styles.button_r}>
            <a href="#workflow">Learn about my workflow</a>
          </button>
        </div>
        </div>
        
      </main>
    </div>
  );
}
