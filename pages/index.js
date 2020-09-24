import Head from 'next/head'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Workflow from '../components/Workflow'
import styles from '../styles/Home.module.css'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Mohamad Safi | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Home />
      <Workflow />
      <footer className={styles.footer}>
       WIP. <a href="https://alejandroclose.com">Alejandro Close</a>
      </footer>
    </div>
  )
}
