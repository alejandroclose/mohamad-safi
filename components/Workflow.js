import styles from '../styles/Workflow.module.css'

export default function Workflow() {
  return (
    <div className={styles.container} id="workflow">
      <main className={styles.main}>
        <h2 className={styles.title}>
        ENJOYING THE PROCESS<br/>OF BEING A WORK IN PROGRESS
        </h2>

        <div className={styles.description}>
        My workflow focuses on delivering digital products that align business goals with our users’ behaviours and frustrations.
        <br/>
        I learn, decide, develop, implement and repeat.
        </div>

        <img src="/images/Workflow.png" alt="Learn, Design, Develop, Implement workflow graph" className={styles.graph}/>
        
        <div className={styles.description}>
        With every project I improve and refine my workflow using different methodologies to get the most out of each one. Lean UX, Design Thinking, Theory U and Agile are some that I use interchangeably.
Progress is in the process.
        </div>
        <button className={styles.button_l}><a href="#contact">Let's work together</a></button>
      </main>
    </div>
  )
}
