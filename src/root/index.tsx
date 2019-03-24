import * as React from 'react'

import { About } from '../about'
import { Content } from '../content'
import * as styles from './styles.scss'

export const Root = () => (
  <div className={styles.container}>
    <About />
    <Content />
  </div>
)
