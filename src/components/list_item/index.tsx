import * as React from 'react'

import * as styles from './styles.scss'

interface Props {
  image?: string
  children: string
}

export const ListItem = ({ image, children }: Props) => (
  <div className={styles.container}>
    {image && (
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      />
    )}
    <div className={styles.content}>{children}</div>
  </div>
)
