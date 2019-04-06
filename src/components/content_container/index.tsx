import * as React from 'react'

import * as styles from './styles.scss'
import { View } from '../../enums/view'

interface Props {
  children: React.ReactElement
  view: View
  showBar?: Boolean
}

export const ContentContainer = ({ children, view, showBar = true }: Props) => (
  <div className={`${styles.container} ${styles[view]}`}>
    <div className={styles.content}>
      {showBar && <div className={`${styles.bar} ${styles[view]}`} />}
      {children}
    </div>
  </div>
)
