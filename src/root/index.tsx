import * as React from 'react'

import { About } from '../views/about'
import { Content } from '../content'
import * as styles from './styles.scss'

export const Root = () => (
  <div className={styles.container}>
    <div className={styles.about}>
      <About sidebar />
    </div>
    <Content />
  </div>
)
