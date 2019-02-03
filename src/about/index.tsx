import * as React from 'react'
import * as styles from './styles.scss'

import { Form } from './components/form'
import { Name } from './components/name'

export const About = () => (
  <div className={styles.container}>
    <Name />
    <Form />
    <div className={styles.links}>
      <a href='#'>Resume</a>
      <a href='#'>GitHub</a>
      <a href='#'>Email</a>
    </div>
  </div>
)
