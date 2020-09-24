import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <img src="/images/Vector4.png" alt="A splash of orange color at the top of the page" className={styles.splash} />

      <main className={styles.main}>
        <h1 className={styles.title}>
        HI THERE! I’M MOHAMAD SAFI
        </h1>

        <h1 className={styles.title}>
          A UX/UI DESIGNER AND PSYCHOLOGIST
        </h1>

        <div className={styles.break}/>
        <h1 className={styles.description}>
        Helping people widen perspectives to grow inside and out is what drives me.
        </h1>
        <div className={styles.grid}>
          <button className={styles.button_l}><a href="#projects">See selected projects</a></button>
          <button className={styles.button_r}><a href="#workflow">Learn about my workflow</a></button>
        </div>
        
      </main>
    </div>
  )
}
