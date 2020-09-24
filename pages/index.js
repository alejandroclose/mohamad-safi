import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mohamad Safi | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <img src="/images/Vector4.png" alt="A splash of orange color at the top of the page" className={styles.splash} />
      </div>

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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
