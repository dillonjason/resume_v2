import * as React from 'react'

import * as styles from './styles.scss'

interface Props {
  children: React.ReactElement[]
}

export const ListGrid = ({ children }: Props) => (
  <div className={styles.container}>{children}</div>
)
