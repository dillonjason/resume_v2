import * as React from 'react'
import * as styles from './styles.scss'
import { Form } from './components/form'

export const About = () => (
  <div className={styles.container}>
    <h1 className={styles.name}>Dillon Jason</h1>
    <Form />
    <div className={styles.links}>
      <a href='#'>Resume</a>
      <a href='#'>GitHub</a>
      <a href='#'>Email</a>
    </div>
  </div>
)
